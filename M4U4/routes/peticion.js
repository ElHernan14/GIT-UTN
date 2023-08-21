var express = require('express');
var router = express.Router();

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

  console.log(req.body.nombre)
  res.redirect('/');
});

module.exports = router;
