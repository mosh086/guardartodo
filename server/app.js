var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();

var storagelokers = require("./routes/storagelokers");
var storagelokertypes = require("./routes/storagelokertypes");

aplicacion.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

aplicacion.use(bodyParser.json());

aplicacion.use(storagelokers);
aplicacion.use(storagelokertypes);

aplicacion.listen(5000, function() {
console.log("Servidor iniciado");
});
