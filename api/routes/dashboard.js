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

function getStoragelokersInRent(done) {
  db.get().query(`call sp_storagelokers_rented();`, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

app.use('/api/dashboard', jwtCheck);
app.get('/api/dashboard/rented/', function(req, res) {
  getStoragelokersInRent(function(result) {
    res.status(200).send(result);
  });
});

