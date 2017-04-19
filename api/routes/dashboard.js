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

function getNewClients(done) {
  db.get().query(`call sp_new_clients();`, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function getStoragelokersAvailable(done) {
  db.get().query(`SELECT COUNT(s.storagelokerId) - COUNT(r.storagelokerId) AS available,
                        COUNT(r.storagelokerId) AS unavailable
                  FROM storageloker s
                  LEFT JOIN rent r ON s.storagelokerId = r.storagelokerId and r.enable = 1
                  WHERE s.enable = 1;`, function(err, row) {
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

app.get('/api/dashboard/newclients/', function(req, res) {
  getNewClients(function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/dashboard/available/', function(req, res) {
  getStoragelokersAvailable(function(result) {
    res.status(200).send(result);
  });
});

