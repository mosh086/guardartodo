var conn = require('./connection');
var mysql = require('mysql'),

connection = mysql.createConnection(conn);

var model = {};

model.getAll = function(callback) {
  if (connection) {
    connection.query('SELECT * FROM storagelokertype', function(error, rows) {
      if(error)
        throw error;
      else
        callback(null, rows);
    });
  }
}

model.getById = function(id,callback) {
  if (connection) {
    connection.query('SELECT * FROM storagelokertype WHERE storagelokertypeId = ?', id, function(error, row) {
      if(error)
        throw error;
      else
        callback(null, row);
    });
  }
}

model.insert = function(data,callback) {
  if (connection) {
    connection.query('INSERT INTO storagelokertype SET ?', data, function(error, result) {
      if(error) {
        throw error;
      }
      else {
        callback(null, result.insertId);
      }
    });
  }
}

//Actualizar un usuario
model.update = function(datosStoragelokertype, callback)
{

    if(connection)
    {
        var sql = 'UPDATE storagelokertype SET nombre = ' + connection.escape(datosUsuario.nombre)  +' WHERE id = ' + datosStoragelokertype.storagelokertypeId;
        connection.query(sql, function(error, result)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null,{"mensaje":"Actualizado"});
            }
        });
    }
}

//Eliminar un usuario por su id
model.delete = function(id, callback)
{
    if(connection)
    {
        var sql = 'DELETE FROM storagelokertype WHERE storagelokertypeId = ' + connection.escape(id);
        connection.query(sql, function(error, result)
            {
                if(error)
                    {
                        throw error;
                    }
                else
                    {
                        callback(null,{"mensaje":"Borrado"});
                    }
            });
    }

}

module.exports = model;
