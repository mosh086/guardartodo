var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

function insert (data,done) {
  db.get().query('INSERT INTO rentfile SET ?', data, function(err, result) {
    if(err) throw err;
    done(result)
  });
}

function getInfoById (id, done) {
  db.get().query(`SELECT *
                    FROM rentfile
                    WHERE enable = 1 AND rentfileId = ?`, id, function(err, row) {
    if(err) throw err;
    done(row[0]);
  });
}

app.use('/api/fileUpload', jwtCheck);
app.post('/api/fileUpload/:id', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  let sampleFile = req.files.file;
  let data = {
    rentId: req.params.id,
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

app.get('/api/upload/getinfo/:id', function (req, res) {
  getInfoById(parseInt(req.params.id), function(result) {
    res.status(200).send(result);
  });
});

app.use('/api/download', express.static('public'));
app.get('/api/download/:id', function(req, res){
  getInfoById(parseInt(req.params.id), function(result) {
    console.log(result)
    if (!result)
      return res.status(400).send('No files were uploaded.');

    let file = 'files/' + result.name;
    res.download(file);
  });
  
  
});
