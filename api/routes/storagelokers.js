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
  let query =   `SELECT sl.storagelokerId, sl.storagelokertypeId, sl.number, sl.enable,
                      slt.name as typename, r.rentId, c.name as clientname, r.startDate
                  FROM storageloker sl
                  INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                  LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId AND r.enable = 1
                  LEFT JOIN client c ON r.clientId = c.clientId AND c.enable = 1
                WHERE sl.enable = 1
                  GROUP BY sl.storagelokerId, sl.storagelokertypeId, sl.number, sl.enable
                ORDER BY sl.number`;


  if (q=='active')
    query =   `SELECT DISTINCT sl.*, slt.name as typename
                FROM storageloker sl
                INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId
              WHERE sl.enable = 1 AND (r.rentId IS NULL OR r.active = 0)
              ORDER BY sl.number, sl.storagelokerId`;
  else if (q=='available')
    query =   `SELECT DISTINCT sl.*, slt.name as typename
                FROM storageloker sl
                INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId
              WHERE sl.enable = 1 AND (r.rentId IS NULL OR r.active = 0 OR r.enable = 0)
              ORDER BY sl.number, sl.storagelokerId`;

  db.get().query(query, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id,done) {
  db.get().query('SELECT * FROM storageloker WHERE storagelokerId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function insert (data,done) {
  db.get().query('INSERT INTO storageloker SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE storageloker SET ? WHERE storagelokerId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE storageloker SET enable = 0 WHERE storagelokerId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function removeValidation (id, done) {
  db.get().query(`SELECT sl.storagelokerId, sl.number, r.rentId, c.name as clientname
                    FROM storageloker sl
                    LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId AND r.enable = 1
                    LEFT JOIN client c ON r.clientId = c.clientId AND c.enable = 1
                  WHERE sl.enable = 1 AND sl.storagelokerId = ?
                  GROUP BY sl.storagelokerId, sl.number`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function unique(data,done) {
  db.get().query('SELECT * FROM storageloker WHERE ' + ((data.key != undefined && data.key != '')?'storagelokerId != '+data.key+' AND ':'') + data.property + " = '" + data.value + "' AND enable = 1", function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

app.use('/api/storagelokers', jwtCheck);
app.get('/api/storagelokers', function(req, res) {
  moment.locale('es');
  getAll(req.query.q, function(result) {
    _.forEach(result, function(value) {
      if (value.startDate)
        value.startDateToString = moment(value.startDate).fromNow();
    });
    res.status(200).send(result);
  });
});

app.get('/api/storagelokers/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/storagelokers', function(req, res) {
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/storagelokers/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/storagelokers/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/storagelokers/unique', function(req, res) {
  unique(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/storagelokers/:id/validation', function(req, res) {
  removeValidation(req.params.id, function(result) {
    res.status(200).send(result);
  });
});
