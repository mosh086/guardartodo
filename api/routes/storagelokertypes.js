var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function getAll (done) {
  db.get().query(`SELECT stl.storagelokertypeId, COUNT(st.storagelokerId) AS \`using\`, stl.name, stl.description, stl.price, stl.size, stl.enable, stl.createDatetime
        FROM storagelokertype stl
          LEFT JOIN storageloker st ON st.storagelokertypeId = stl.storagelokertypeId AND st.enable = 1
      WHERE stl.enable = 1
      GROUP BY stl.storagelokertypeId, stl.name, stl.description, stl.price, stl.size, stl.enable, stl.createDatetime
      ORDER BY stl.name`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id,done) {
  db.get().query('SELECT * FROM storagelokertype WHERE storagelokertypeId = ? AND enable = 1', id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function insert (data,done) {
  db.get().query('INSERT INTO storagelokertype SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE storagelokertype SET ? WHERE storagelokertypeId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE storagelokertype SET enable = 0 WHERE storagelokertypeId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/storagelokertypes', jwtCheck);
app.get('/api/storagelokertypes', function(req, res) {
  getAll(function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/storagelokertypes/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/storagelokertypes', function(req, res) {
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/storagelokertypes/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/storagelokertypes/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});
