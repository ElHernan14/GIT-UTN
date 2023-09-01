var express = require('express');
const nodemailer = require("nodemailer");
var router = express.Router();
var peliculasModel = require('../models/peliculasModel');
var contactosModel = require('../models/contactoModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy)

function ApiResponse(status = 200, success = true, data = null, message = "") {
    var ApiResponse = {
        status: status,
        success: success,
        data: data,
        message: message
    };
    return ApiResponse;   
}

//API - Peliculas
router.get('/getPelicula', async (req, res, next) => {
    try {
        let id = req.query.id;
        let pelicula = await peliculasModel.getPeliculaById(id);
        if(pelicula.img_id){
            const imagen = cloudinary.url(pelicula.img_id, {
                width: 400,
                height: 500,
            });
            pelicula.imagen = imagen;
        }
        res.json(ApiResponse(200, true, pelicula,""));
    } catch (error) {
        res.json(ApiResponse(500, false, null, "No se pudo buscar la pelicula"));
    }
})

router.get('/peliculas', async function(req, res, next) {
    var peliculas = await peliculasModel.getPeliculas()
    peliculas = peliculas.map(pelicula =>{
      if(pelicula.img_id){
          const imagen = cloudinary.url(pelicula.img_id, {
              width: 380,
              height: 500,
          });
          return {
              ...pelicula,
              imagen
          }
      } else {
          return {
              ...pelicula,
              imagen: ''
          }
      }
    });
    res.json(ApiResponse(200, true, peliculas,""));
});

router.get('/filtroPeliculas', async function(req, res, next) {
    try {
        var peliculas = await peliculasModel.getPeliculasFiltered(req.query?.buscador,
            req.query?.ano, req.query?.genero, req.query?.calificacion, req.query?.pageNumber);
        peliculas = peliculas.map(pelicula =>{
          if(pelicula.img_id){
              const imagen = cloudinary.url(pelicula.img_id, {
                  width: 380,
                  height: 500,
              });
              return {
                  ...pelicula,
                  imagen
              }
          } else {
              return {
                  ...pelicula,
                  imagen: ''
              }
          }
        });
        res.json(ApiResponse(200, true, peliculas,""));   
    } catch (error) {
        res.json(ApiResponse(500, false, null, "No se pudieron filtrar las peliculas"+error));
    }
});

//API - Contactos
router.post('/contactos/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        let imagen;
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if(req.body.nombre != "" && req.body.email != "" && 
        req.body.comentario != ""  ){
            const mail = {
                from: "hernanbonne98@gmail.com",
                to: req.body.email,
                subject: "Contacto web",
                html: "Usted "+req.body.nombre+" se contacto a traves de "+
                "la web y agradecemos por contactarnos y dejarnos tu comentario: "+
                "<br>Además, hizo el siquiente comentario: "+req.body.comentario+".",
            }
            console.log(req.body.email)
            const transport = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            }); // Cierra transp
            await transport.sendMail(mail);
            let obj = {
                nombre: req.body.nombre,
                email: req.body.email,
                comentario: req.body.comentario,
                img_id
            }
            const contacto = await contactosModel.insertContacto(obj);
            res.json(ApiResponse(200, true, contacto,""));
        } else {
            res.json(ApiResponse(400, false, null, "Todos los campos son requeridos."));
        }
    } catch (error) {
        console.log("Error: "+error)
        res.json(ApiResponse(500, false, null, "No se pudo cargar el contacto"));
    }
});

module.exports = router;