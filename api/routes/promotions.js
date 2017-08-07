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
  db.get().query(`SELECT p.promotionId, p.promotiontypeId, p.name, p.description, p.amount, p.percentage, p.enable, pt.name as promotiontypename,
                      COUNT(rp.rentpromotionId) AS \`using\`
                    FROM promotion p
                    LEFT JOIN rentpromotion rp ON p.promotionId = rp.promotionId AND rp.enable = 1 AND rp.applied = 0
                    LEFT JOIN promotiontype pt ON p.promotiontypeId = pt.promotiontypeId AND pt.enable = 1
                  WHERE p.enable = 1
                  GROUP BY p.promotionId, p.promotiontypeId, p.name, p.description, p.amount, p.percentage, p.enable, pt.name`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id, done) {
  db.get().query('SELECT * FROM promotion WHERE promotionId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function getByRentId (id,done) {
  db.get().query(`SELECT p.*, pt.name as promotiontypename
                    FROM promotion p
                    INNER JOIN rentpromotion rp ON p.promotionId = rp.promotionId  AND rp.enable = 1
                    INNER JOIN rent r ON rp.rentId = r.rentId AND r.enable = 1
                    LEFT JOIN promotiontype pt ON p.promotiontypeId = pt.promotiontypeId AND pt.enable = 1
                  WHERE p.enable = 1 AND r.rentId = ?`, id, function(err, row) {
    if(err) throw err;
    done(row);
  });
}

function insert (data,done) {
  db.get().query('INSERT INTO promotion SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE promotion SET ? WHERE promotionId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE promotion SET enable = 0 WHERE promotionId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function removeValidation (id, done) {
  db.get().query(`SELECT p.promotionId, p.name, COUNT(rp.rentpromotionId) AS \`using\`
                    FROM promotion p
                  LEFT JOIN rentpromotion rp ON p.promotionId = rp.promotionId AND rp.enable = 1 AND rp.applied = 0
                  WHERE p.enable = 1 AND p.promotionId = ?
                  GROUP BY p.promotionId, p.name`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function unique(data,done) {
  console.log('SELECT * FROM promotion WHERE ' + ((data.key != undefined && data.key != '')?'promotionId != '+data.key+' AND ':'') + data.property + " = '" + data.value + "' AND enable = 1")
  db.get().query('SELECT * FROM promotion WHERE ' + ((data.key != undefined && data.key != '')?'promotionId != '+data.key+' AND ':'') + data.property + " = '" + data.value + "' AND enable = 1", function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

app.use('/api/promotions', jwtCheck);
app.get('/api/promotions', function(req, res) {
  getAll(req.query.q, function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/promotions/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/promotions', function(req, res) {
  if (req.body.promotiontypeId == 1) {
    req.body.percentage = 100;
    delete req.body.amount;
  } else if (req.body.promotiontypeId == 2 && req.body.types.id == 1) {
    delete req.body.percentage;
  } else if (req.body.promotiontypeId == 2 && req.body.types.id == 2) {
    delete req.body.amount;
  }
  delete req.body.types;
  console.log(req.body);
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/promotions/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/promotions/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/promotions/rent/:id', function(req, res) {
  getByRentId(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/promotions/unique', function(req, res) {
  unique(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/promotions/:id/validation', function(req, res) {
  removeValidation(req.params.id, function(result) {
    res.status(200).send(result);
  });
});
