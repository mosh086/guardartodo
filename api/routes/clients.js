var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function getAll (done) {
  db.get().query(`SELECT  CONCAT_WS(' ',street,town,country,state,zipcode) as address,
                          c.*
                  FROM client c
                  WHERE enable = 1`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id,done) {
  db.get().query(`SELECT CONCAT_WS(' ',street,town,country,state,zipcode) as address, c.*
                  FROM client c
                  WHERE c.clientId = ? AND c.enable = 1`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

function getValidityById(id, done) {
  db.get().query(`SELECT DATE_ADD(max(coalesce(p.date, r.startDate, now())), INTERVAL 1 MONTH) as date
                  FROM client c
                    INNER JOIN rent r ON c.clientId = r.clientId AND r.enable = 1
                    LEFT JOIN payment p ON p.rentId = r.rentId
                  WHERE c.clientId = ? and c.enable = 1`, id, function(err, row) {

    if(err) throw err;
    done(row[0]);
  })
}

function insert (data,done) {
  db.get().query('INSERT INTO client SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE client SET ? WHERE clientId = ? AND enable = 1', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('UPDATE client SET enable = 0 WHERE clientId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/clients', jwtCheck);
app.get('/api/clients', function(req, res) {
  getAll(function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/clients/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/client/:id/validity', function(req, res){
  getValidityById(req.params.id, function(result) {
    res.status(200).send(result);
  })
})

app.post('/api/clients', function(req, res) {
  delete req.body.storagelokertypename;
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/clients/:id', function(req, res) {
  delete req.body.address;
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/clients/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});
