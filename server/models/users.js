var conn = require('./connection');
var mysql = require('mysql'),

connection = mysql.createConnection(conn);

var model = {};

model.getAll = function(callback) {
  if (connection) {
    connection.query(`SELECT CONCAT_WS(' ',firstName,lastName) as fullName, u.* FROM user u`, function(error, rows) {
      if(error)
        throw error;
      else
        callback(null, rows);
    });
  }
}

model.getById = function(id,callback) {
  if (connection) {
    connection.query('SELECT * FROM user WHERE userId = ?', id, function(error, row) {
      if(error)
        throw error;
      else
        callback(null, row);
    });
  }
}


model.insert = function(data,callback) {
  if (connection) {
    connection.query('INSERT INTO user SET ?', data, function(error, result) {
      if(error) {
        throw error;
      }
      else {
        callback(null, result.insertId);
      }
    });
  }
}

model.update = function(id, data, callback) {
  console.log(JSON.stringify(data));
  if(connection) {
    connection.query('UPDATE user SET ? WHERE userId = ?', [data, id], function(error, result) {
      if(error) {
        throw error;
      }
      else {
        callback(null,{"mensaje":"Actualizado"});
      }
    });
  }
}

model.delete = function(id, callback){
  if(connection) {
    connection.query('DELETE FROM user WHERE userId = ?', id, function(error, result) {
      if(error) {
        throw error;
      }
      else {
        callback(null,{"mensaje":"Borrado"});
      }
    });
  }
}

module.exports = model;
