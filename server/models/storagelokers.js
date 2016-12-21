var conn = require('./connection');
var mysql = require('mysql'),

connection = mysql.createConnection(conn);

var model = {};

model.getAll = function(callback) {
  if (connection) {
    connection.query(`SELECT sl.*, slt.name, slt.size FROM guardartodo.storageloker sl
                      INNER JOIN guardartodo.storagelokertype slt ON sl.storagelokertypeid = slt.storagelokertypeid`, function(error, rows) {
      if(error)
        throw error;
      else
        callback(null, rows);
    });
  }
}

model.getById = function(id,callback) {
  if (connection) {
    connection.query('SELECT * FROM storageloker WHERE storagelokerId = ?', id, function(error, row) {
      if(error)
        throw error;
      else
        callback(null, row);
    });
  }
}

model.insert = function(data,callback) {
  if (connection) {
    connection.query('INSERT INTO storageloker SET ?', data, function(error, result) {
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
model.update = function(datosStorageloker, callback)
{

    if(connection)
    {
        var sql = 'UPDATE storageloker SET nombre = ' + connection.escape(datosUsuario.nombre)  +' WHERE id = ' + datosStorageloker.storagelokerId;
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
        var sql = 'DELETE FROM storageloker WHERE storagelokerId = ' + connection.escape(id);
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
