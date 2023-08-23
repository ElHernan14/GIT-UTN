var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre)

  res.render('admin/login',{
    layout: 'admin/layout', 
    conocido: conocido,
  });
});

router.post('/', async(req, res, next) =>{
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    console.log("dato "+data);
    if(data != undefined){
      req.session.idUsuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/users');
    } else {
      res.render('admin/login',{
        layout: 'admin/layout', 
        error:true
      }); 
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;