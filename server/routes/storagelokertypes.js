var express = require('express');
var router = express.Router();
var model = require('../models/storagelokertypes');

router.get('/api/storagelokertypes', function(request, response) {
  model.getAll(function(error, data) {
    response.status(200).json(data);
  });
});

router.get('/api/storagelokertype', function(request, response) {
  var id = request.query.id;
  model.getById(id,function(error, datos) {
    if (typeof data !== 'undefined' && datos.length > 0) {
      response.status(200).json(datos);
    }
    else {
      response.status(404).json({"Mensaje":"No existe"});
    }
  });
});

router.post('/api/storagelokertype', function(request, response) {
  var datosUsuario = {
      id : null,
      nombre : request.body.nombre
    };
    model.insert(datosUsuario,function(error, datos)
    {
      if(datos)
      {
        response.status(200).json({"Mensaje":"Insertado"});
      }
      else
      {
        response.status(500).json({"Mensaje":"Error"});
      }
    });
});

//Modificar un usuario
router.put('/api/storagelokertype', function(request, response) {
    var datosUsuario = {
      id:request.query.id,
      nombre : request.query.nombre
      };

    storagelokertypesModel.update(datosUsuario,function(error, datos)
    {
      //si el usuario se ha actualizado correctamente mostramos un mensaje
      if(datos && datos.mensaje)
      {
        response.status(200).json(datos);
      }
      else
      {
        response.status(500).json({"mensaje":"Error"});

      }
    });

});
//Borrar un usuario

router.delete('/api/storagelokertype', function(request, response) {
    var id = request.query.id;
    storagelokertypesModel.delete(id,function(error, datos)
    {
      if(datos && datos.mensaje === "Borrado")
      {
        response.status(200).json(datos);
      }
      else
      {
        response.status(500).json({"mensaje":"Error"});
      }
    });

});

module.exports = router;
