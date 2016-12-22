var conn = require('./connection');
var mysql = require('mysql'),

connection = mysql.createConnection(conn);

var model = {};

model.getAll = function(callback) {
  if (connection) {
    connection.query(`SELECT  CONCAT_WS(' ',firstName,lastName) as fullName,
        CONCAT_WS(' ',street,town,country,state,zipcode) as address, c.* FROM client c`, function(error, rows) {
      if(error)
        throw error;
      else
        callback(null, rows);
    });
  }
}

model.getById = function(id,callback) {
  if (connection) {
    connection.query('SELECT * FROM guardartodo.client WHERE clientId = ?', id, function(error, row) {
      if(error)
        throw error;
      else
        callback(null, row);
    });
  }
}


model.insert = function(data,callback) {
  if (connection) {
    connection.query('INSERT INTO client SET ?', data, function(error, result) {
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
  if(connection) {
    connection.query('UPDATE client SET ? WHERE clientId = ?', [data, id], function(error, result) {
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
    connection.query('DELETE FROM client WHERE clientId = ?', id, function(error, result) {
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
