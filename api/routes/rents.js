var moment = require('moment');

var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function getAll (done) {
  db.get().query(`SELECT  *
                  FROM rent
                  WHERE enable = 1`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id,done) {
  db.get().query('SELECT * FROM rent WHERE rentId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function insert (data,done) {
  data.clientId = data.client.clientId;
  data.storagelokerId = data.storageloker.storagelokerId;
  data.startDate = moment(data.startDate).format("YYYY-MM-DD HH:MM");
  delete data.client;
  delete data.storageloker;
  console.log(JSON.stringify(data));

  db.get().query('INSERT INTO rent SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE rent SET ? WHERE rentId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE rent SET enable = 0 WHERE rentId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/rents', jwtCheck);
app.get('/api/rents', function(req, res) {
  getAll(function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/rents/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/rents', function(req, res) {
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/rents/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/rents/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});
