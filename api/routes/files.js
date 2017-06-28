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

function getAll (id, done) {
  db.get().query(`SELECT * FROM clientfile WHERE clientId = ? AND enable = 1`, id, function(err, rows) {
    if(err) throw err;

    done(rows);
  });
}

function getById (id, done) {
  db.get().query('SELECT * FROM payment WHERE paymentId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function insert (data,done) {
  db.get().query('INSERT INTO clientfile SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE clientfile SET description = ? WHERE fileId = ? AND enable = 1', [data.description, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE payment SET enable = 0 WHERE paymentId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/files', jwtCheck);
app.get('/api/files', function(req, res) {
  getAll(req.query.q, function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/files/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/files/:id', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  let sampleFile = req.files.file;
  let data = {
    clientId: req.params.id,
    name: sampleFile.name,
    originalname: sampleFile.name
  }
  sampleFile.mv('./files/' + sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
    insert(data, function(result) {
      res.status(200).send(result);
    });
  });
});

app.put('/api/files/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/payments/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

