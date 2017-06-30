var mysql = require('mysql');
var pool  = null;
exports.connect = function() {
  pool = mysql.createPool({
    host     : 'localhost',
    //user     : 'acanijo',
    //password : 'M3gamente',
    user     : 'root',
    password : 'Toolmosh_86',
    database : 'guardartododb',
    dateStrings:true
  });
}
exports.get = function() {
  return pool;
}
