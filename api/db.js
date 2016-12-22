var mysql = require('mysql');
var pool  = null;
exports.connect = function() {
  pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Toolmosh_86',
    database : 'guardartododb'
  });
}
exports.get = function() {
  return pool;
}
