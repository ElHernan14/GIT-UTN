var express = require('express');
var router = express.Router();
var contactosModel = require('./../../models/contactoModel');
var cloudinary = require('cloudinary').v2;

router.get('/', async function(req, res, next) {
  var conocido = Boolean(req.session.nombre)
  var contactos = await contactosModel.getContactos()

  contactos = contactos.map(contacto =>{
    if(contacto.img_id){
        const imagen = cloudinary.image(contacto.img_id, {
            width: 150,
            height: 150,
            crop: 'fill'
        });
        return {
            ...contacto,
            imagen
        }
    } else {
        return {
            ...contacto,
            imagen: ''
        }
    }
  });

  res.render('admin/contactos/contactos',{
    layout: 'admin/layout', 
    conocido: conocido,
    usuario: req.session.nombre,
    contactos
  });
});

module.exports = router;