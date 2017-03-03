var moment = require('moment'),
    _ = require("lodash");

var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function getAll (q, done) {
  let activeCondition = '';
  if (q) { activeCondition = (q=='active')?' AND r.active=1 ':' AND r.active=0 '; }

switch(q) {
  case 'active': {
    activeCondition = ' AND r.active=1 ';
    break;
  }
  case'inactive': {
    activeCondition = ' AND r.active=0 ';
    break;
  }
  case 'pendings': {
    activeCondition = ` AND r.active=1 HAVING pendings > 0 `
    break;
  }
}

  db.get().query(`SELECT r.*, c.name, sl.number, slt.name as storagelokertypename, f_pending_payments(r.rentId) as pendings
                    FROM rent r
                      INNER JOIN client c ON r.clientId = c.clientId
                      INNER JOIN storageloker sl ON r.storagelokerId = sl.storagelokerId
                      INNER JOIN storagelokertype slt ON slt.storagelokertypeId = sl.storagelokertypeId
                    WHERE r.enable = 1 ${activeCondition}
                    ORDER BY r.startDate DESC, r.rentId DESC`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getPendingPaymentsById (id, done) {
  db.get().query(`call sp_get_pendingpayment_rent(?);`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function getById (id, done) {
  db.get().query(`SELECT r.*, c.name, sl.number
                    FROM rent r
                      INNER JOIN client c ON r.clientId = c.clientId
                      INNER JOIN storageloker sl ON r.storagelokerId = sl.storagelokerId
                    WHERE r.enable = 1 AND r.rentId = ?`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function getByClientId (id, done) {
  db.get().query(`SELECT r.*, c.name, sl.number, slt.name as storagelokertypename, f_pending_payments(r.rentId) as pendings
                    FROM rent r
                      INNER JOIN client c ON r.clientId = c.clientId
                      INNER JOIN storageloker sl ON r.storagelokerId = sl.storagelokerId
                      INNER JOIN storagelokertype slt ON slt.storagelokertypeId = sl.storagelokertypeId
                    WHERE r.enable = 1 AND r.active=1 AND c.clientId = ?
                    ORDER BY r.startDate DESC, r.rentId DESC`, id, function(err, row) {
    if(err) throw err;
    done(row);
  });
}

function getPromotionsById (id, done) {
  db.get().query(`SELECT r.*, p.name, p.description
                    FROM rent r
                      INNER JOIN rentpromotion rp ON r.rentId = rp.rentId
                      INNER JOIN promotion p ON p.promotionId = rp.promotionId
                    WHERE rp.enable = 1 AND r.enable = 1 AND r.rentId = ?`, id, function(err, row) {
    if(err) throw err;
    done(row);
  });
}

function insert (data,done) {
  let userAuthorization;
  let promotion;
  data.clientId = data.client.clientId;
  data.storagelokerId = data.storageloker.storagelokerId;
  data.startDate = moment(data.startDate).format("YYYY-MM-DD HH:mm:ss");
  userAuthorization = data.user;
  promotion = data.promotion;
  delete data.client;
  delete data.storageloker;
  delete data.storagelokertype;
  delete data.user;
  delete data.promotion;
  db.get().query('INSERT INTO rent SET ?', data, function(err, result) {
    if(err) throw err;
    authorizedUsers(userAuthorization, result.insertId, function() {
      promotions(promotion, result.insertId, function() {
        updateFolio(result.insertId, function() {
          done(result);
        })
      });
    });
  });
}

function update (id, data, done) {
  let userAuthorization;
  let promotion;
  data.clientId = data.client.clientId;
  data.storagelokerId = data.storageloker.storagelokerId;
  data.startDate = moment(data.startDate).format("YYYY-MM-DD HH:mm:ss");
  userAuthorization = data.user;
  promotion = data.promotion;
  delete data.client;
  delete data.storageloker;
  delete data.storagelokertype;
  delete data.user;
  delete data.promotion;
  db.get().query('UPDATE rent SET ? WHERE rentId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    authorizedUsers(userAuthorization, id, function() {
      promotions(promotion, id, function() {
        updateFolio(id, function() {
          done(result);
        })
      });
    });
  });
}

function remove (id, done) {
  db.get().query('UPDATE rent SET enable = 0 WHERE rentId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function authorizedUsers(users, id, callback) {
  let mapped = ObjToArray(
      _.map(users, item => _.extend(
                              _.pick(item, 'userId'),
                              {"rentId": id}
                            )));
  db.get().query('DELETE FROM rentauthorization WHERE rentId = ?', id, function(err, result) {
      db.get().query('INSERT INTO rentauthorization (userId, rentId) VALUES ?', [mapped], function(err, result) {
        callback();
    });
  });
}

function promotions(promotions, id, callback) {
  let mapped = ObjToArray(
      _.map(promotions, item => _.extend(
                              _.pick(item, 'promotionId'),
                              {"rentId": id}
                            )));
  db.get().query('DELETE FROM rentpromotion WHERE rentId = ?', id, function(err, result) {
    db.get().query('INSERT INTO rentpromotion (promotionId, rentId) VALUES ?', [mapped], function(err, result) {
      callback();
    });
  });
}

function updateFolio(id, callback) {
  db.get().query(`UPDATE rent a
                    SET a.folio = CONCAT('B-',DATE_FORMAT(a.startDate, '%y%m'), LPAD(a.rentId, 3, '0'))
                  WHERE a.rentId = ? `, id, function(err, result) {
    callback();
  });
}

function enddate(id, done) {
  db.get().query('UPDATE rent SET active = 0, endDate = ? WHERE rentId = ?', [moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),  id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/rents', jwtCheck);
app.get('/api/rents', function(req, res) {
  moment.locale('es');
  getAll(req.query.q, function(result) {
    _.forEach(result, function(value) {
      value.startDateToString = moment(value.startDate).fromNow();
      value.endDateToString = moment(value.endDate).fromNow();
    });
    res.status(200).send(result);
  });
});

app.get('/api/rents/:id', function(req, res) {
  getById(parseInt(req.params.id), function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/rents/client/:id', function(req, res) {
  getByClientId(parseInt(req.params.id), function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/rents/:id/pendingpayments', function(req, res) {
  getPendingPaymentsById(parseInt(req.params.id), function(result) {
    moment.locale('es');
    _.forEach(result, function(value) {
      value.description = moment(value.date).format('MMMM - YYYY').toUpperCaseFirstChar();
    });
    res.status(200).send(result);
  });
});

app.get('/api/rents/:id/promotions', function(req, res) {
  getPromotionsById(parseInt(req.params.id), function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/rents', function(req, res) {
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/rents/:id', function(req, res) {
  update(parseInt(req.params.id),req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/rents/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/rents/:id/enddate', function(req, res) {
  enddate(req.params.id, function(result) {
    res.status(200).send(result);
  });
});


function ObjToArray(obj) {
  var arr = obj instanceof Array;
  return (arr ? obj : Object.keys(obj)).map(function(i) {
    var val = arr ? i : obj[i];
    if(typeof val === 'object')
      return ObjToArray(val);
    else
      return val;
  });
}

String.prototype.toUpperCaseFirstChar = function() {
    return this.substr( 0, 1 ).toUpperCase() + this.substr( 1 );
}
