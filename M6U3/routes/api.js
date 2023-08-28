var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy)

router.get('/novedades', async function(req, res, next) {
    var conocido = Boolean(req.session.nombre)
    var novedades = await novedadesModel.getNovedades()
  
    novedades = novedades.map(novedad =>{
      if(novedad.img_id){
          const imagen = cloudinary.image(novedad.img_id, {
              width: 960,
              height: 200,
              crop: 'fill'
          });
          return {
              ...novedad,
              imagen
          }
      } else {
          return {
              ...novedad,
              imagen: ''
          }
      }
    });
  
    res.json(novedades);
  });

  module.exports = router;