var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre)
  var nombre = req.session.nombre || '';
  var email = req.session.email || '';
  var telefono = req.session.telefono || '';
  var mensaje = req.session.mensaje || '';
  var saludo = ''

  if (nombre != '') {
    saludo = 'Hola '+ nombre + ', ha hecho correctamente petición para iniciar sesión.'
  }

  res.render('contacto', 
  { title: 'Express' ,
    conocido: conocido,
    saludoPeticion: saludo,
    email: email,
    telefono: telefono,
    mensaje: mensaje
  });
});

module.exports = router;
