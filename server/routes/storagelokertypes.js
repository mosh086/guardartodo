var express = require('express');
var router = express.Router();
var model = require('../models/storagelokertypes');

router.get('/api/storagelokertypes', function(request, response) {
  model.getAll(function(error, data) {
    response.status(200).json(data);
  });
});

router.get('/api/storagelokertypes/:id', function(request, response) {
  var id = request.params.id;
  model.getById(id,function(error, data) {
    if (typeof data !== 'undefined' && data.length > 0) {
      response.status(200).json(data);
    }
    else {
      response.status(404).json({"Mensaje":"No existe"});
    }
  });
});

router.post('/api/storagelokertypes', function(request, response) {
  model.insert(request.body,function(error, data) {
    if(data) {
      response.status(200).json({"Mensaje":"Insertado"});
    }
    else {
      response.status(500).json({"Mensaje":"Error"});
    }
  });
});

router.put('/api/storagelokertypes/:id', function(request, response) {
  var id = request.params.id;
  model.update(id, request.body, function(error, data) {
    if(data && data.mensaje) {
      response.status(200).json(data);
    }
    else {
      response.status(500).json({"mensaje":"Error"});
    }
  });
});

router.delete('/api/storagelokertypes/:id', function(request, response) {
  var id = request.params.id;
  model.delete(id,function(error, data) {
    if(data && data.mensaje === "Borrado") {
      response.status(200).json(data);
    }
    else {
      response.status(500).json({"mensaje":"Error"});
    }
  });
});

module.exports = router;
