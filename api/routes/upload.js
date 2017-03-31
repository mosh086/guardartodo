var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config'),
    db      = require('../db');
var app = module.exports = express.Router();
var jwtCheck = jwt({
  secret: config.secretKey
});

//app.use('/api/upload', jwtCheck);
app.post('/api/fileUpload', function(req, res) {
  console.log(req.files)
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;
  console.log(sampleFile)
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/Source/filename.png', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});
