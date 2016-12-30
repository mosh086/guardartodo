var express = require('express'),
    _       = require('lodash'),
    config  = require('../config'),
    jwt     = require('jsonwebtoken'),
    ejwt     = require('express-jwt'),
    db      = require('../db');

var app = module.exports = express.Router();

var jwtCheck = ejwt({
  secret: config.secretKey
});

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secretKey, { expiresIn: 60*60*5 });
}
function getUserDB(username, done) {
  db.get().query('SELECT * FROM user WHERE username = ? LIMIT 1', [username], function(err, rows, fields) {
    if (err) throw err;
    done(rows[0]);
  });
}
app.post('/user/create', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  getUserDB(req.body.username, function(user){
    if(!user) {
      user = {
        firstName: req.body.firstName,
        lastName: resq.body.lastName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      };
      db.get().query('INSERT INTO user SET ?', [user], function(err, result){
        if (err) throw err;
        newUser = {
          id: result.insertId,
          firstName: req.body.firstName,
          lastName: resq.body.lastName,
          username: user.username,
          password: user.password,
          email: user.email
        };
        res.status(201).send({
          id_token: createToken(newUser)
        });
      });
    }
    else res.status(400).send("A user with that username already exists");
  });
});
app.post('/user/login', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  getUserDB(req.body.username, function(user){
    if (!user) {
      return res.status(401).send("The username is not existing");
    }
    if (user.password !== req.body.password) {
      return res.status(401).send("The username or password don't match");
    }
    res.status(201).send({
      id_token: createToken(user)
    });
  });
});
app.post('/api/auth/login', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }
  getUserDB(req.body.username, function(user){
    if (!user) {
      return res.status(401).send("The username is not existing");
    }
    if (user.password !== req.body.password) {
      return res.status(401).send("The username or password don't match");
    }
    res.status(201).send({
      id_token: createToken(user)
    });
  });
});




app.get('/api/users/me', function(req, res) {
  var token;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  }

  if (token) {
    try {
      var decoded = jwt.verify(token, config.secretKey);
      //if (decoded.exp <= Date.now()) {
      //  res.end('Access token has expired', 400);
      getByUsername(decoded.username, function(result) {
        res.status(200).send(result);
      });
    } catch (err) {
      return next();
    }
  } else {
    next();
  }

});



app.get('/user/check/:username', function(req, res) {
  if (!req.params.username) {
    return res.status(400).send("You must send a username");
  }
  getUserDB(req.params.username, function(user){
    if(!user) res.status(201).send({username: "OK"});
    else res.status(400).send("A user with that username already exists");
  });
});


function getAll (done) {
  db.get().query(`SELECT CONCAT_WS(' ',firstName,lastName) as fullName, u.* FROM user u`, function(err, rows) {
    if(err) throw err;
    done(rows);
  });
}

function getById (id,done) {
  db.get().query('SELECT * FROM user WHERE userId = ?', id, function(err, row) {
    if(err) throw err;
    done(row);
  });
}

function getByUsername (id,done) {
  db.get().query('SELECT * FROM user WHERE username = ?', id, function(err, row) {
    if(err) throw err;
    done(row);
  });
}

function insert (data,done) {
  data.password = '12345';
  data.email = 'admin@guardartodo.com';
  db.get().query('INSERT INTO user SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function update (id, data, done) {
  db.get().query('UPDATE user SET ? WHERE userId = ?', [data, id], function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function remove (id, done) {
  db.get().query('DELETE FROM user WHERE userId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

function reset(id, data, done) {
  db.get().query('DELETE FROM user WHERE userId = ?', id, function(err, result) {
    if(err) throw err;
    done(result);
  });
}

app.use('/api/users', jwtCheck);
app.get('/api/users', function(req, res) {
  getAll(function(result) {
    res.status(200).send(result);
  });
});

app.get('/api/users/:id', function(req, res) {
  getById(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/users', function(req, res) {
  insert(req.body, function(result) {
    res.status(200).send(result);
  });
});

app.put('/api/users/:id', function(req, res) {
  update(req.params.id,req.body,function(result) {
    res.status(200).send(result);
  });
});

app.delete('/api/users/:id', function(req, res) {
  remove(req.params.id, function(result) {
    res.status(200).send(result);
  });
});

app.post('/api/users/reset/:username', function(req, res) {
  reset(req.params.username, req.body, function(result) {
    res.status(200).send(result);
  });
});



