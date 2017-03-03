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
  db.get().query('SELECT * FROM promotiontype WHERE enable = 1', function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id, done) {
  db.get().query('SELECT * FROM promotiontype WHERE promotiontypeId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

app.use('/api/promotiontypes', jwtCheck);
app.get('/api/promotiontypes', function(req, res) {
  getAll(req.query.q, function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/promotiontypes/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});


