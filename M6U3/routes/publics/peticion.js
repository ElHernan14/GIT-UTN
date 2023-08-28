var express = require('express');
var router = express.Router();
var pool = require('../database/bd');

router.post('/', function(req, res, next) {
  var nombre = req.body.nombre || '';
  var email = req.body.email || '';
  var telefono = req.body.telefono || '';
  var mensaje = req.body.mensaje || '';

  if (nombre != '') {
    req.session.nombre = nombre
    req.session.email = email
    req.session.telefono = telefono
    req.session.mensaje = mensaje
  }

  //GUARDO DATOS DE FORMULARIO EN BASE DE DATOS
  var obj = {
    nombre: nombre,
    mail: email
  }
  pool.query("insert into empleados set ?",[obj]).then(function(res){
    console.log("res"+res);
  })

  res.redirect('/');
});

module.exports = router;
