var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function getAll (q, done) {
  let query =   `SELECT sl.*, slt.name as typename
                  FROM storageloker sl
                  INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                WHERE sl.enable = 1`;
  if (q=='active')
    query =   `SELECT DISTINCT sl.*, slt.name as typename
                FROM storageloker sl
                INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId
              WHERE sl.enable = 1 AND (r.rentId IS NULL OR r.active = 0)
              ORDER BY sl.storagelokerId asc`;
  else if (q=='available')
    query =   `SELECT DISTINCT sl.*, slt.name as typename
                FROM storageloker sl
                INNER JOIN storagelokertype slt ON sl.storagelokertypeId = slt.storagelokertypeId AND slt.enable = 1
                LEFT JOIN rent r ON sl.storagelokerId = r.storagelokerId
              WHERE sl.enable = 1 AND (r.rentId IS NULL OR r.active = 0 OR r.enable = 0)
              ORDER BY sl.storagelokerId asc`;

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

app.use('/api/storagelokers', jwtCheck);
app.get('/api/storagelokers', function(req, res) {
  getAll(req.query.q, function(result) {
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
