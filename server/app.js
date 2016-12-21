var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();


var clients = require("./routes/clients");
var storagelokers = require("./routes/storagelokers");
var storagelokertypes = require("./routes/storagelokertypes");
var users = require("./routes/users");

aplicacion.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

aplicacion.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

aplicacion.use(bodyParser.json());

aplicacion.use(clients);
aplicacion.use(storagelokers);
aplicacion.use(storagelokertypes);
aplicacion.use(users);

aplicacion.listen(5000, function() {
console.log("Servidor iniciado");
});
