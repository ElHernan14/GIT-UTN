var express = require('express');
var router = express.Router();
var peliculasModel = require('./../../models/peliculasModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy)
const puntuacion = [{"n": 1},{"n": 1.5},{"n": 2},{"n": 2.5},{"n": 3},{"n": 3.5},{"n": 4},{"n": 4.5},{"n": 5}
,{"n": 5.5},{"n": 6}, {"n": 6.5}, {"n": 7}, {"n": 7.5}, {"n": 8}, {"n": 8.5}, {"n": 9}, {"n": 9.5}, {"n": 10}].reverse();

router.get('/', async function(req, res, next) {
  var conocido = Boolean(req.session.nombre)
  var peliculas = await peliculasModel.getPeliculas()

  peliculas = peliculas.map(pelicula =>{
    if(pelicula.img_id){
        const imagen = cloudinary.image(pelicula.img_id, {
            width: 100,
            height: 100,
            crop: 'fill'
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

  res.render('admin/peliculas/peliculas',{
    layout: 'admin/layout', 
    conocido: conocido,
    usuario: req.session.nombre,
    peliculas
  });
});

router.post('/filtroPeliculas', async function(req, res, next) {
    var conocido = Boolean(req.session.nombre)
    var peliculas = await peliculasModel.getPeliculasFiltered(req.body?.buscador,"", "", "", "");
    peliculas = peliculas.map(pelicula =>{
      if(pelicula.img_id){
          const imagen = cloudinary.image(pelicula.img_id, {
              width: 100,
              height: 100,
              crop: 'fill'
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
  
    res.render('admin/peliculas/peliculas',{
      layout: 'admin/layout', 
      conocido: conocido,
      usuario: req.session.nombre,
      peliculas
    });
});

router.get('/agregar', (req, res, next) =>{
    var conocido = Boolean(req.session.nombre)
    res.render('admin/peliculas/agregar',{
      layout: 'admin/layout', 
      conocido: conocido,
      puntuacion: puntuacion
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        var img_id = '';
        let imagen;
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.titulo != "" && req.body.sinopsis != "" && 
        req.body.reparto != "" && req.body.director != "" && req.body.ano != "" 
        && req.body.genero != "" && req.body.calificacion != "" && req.body.link != ""){
            let link = req.body.link;
            let linkFinal = "";
            if(link.includes("watch?v=")){
                let arr = link.split('watch?v=', 2);
                linkFinal = arr[0]+ "embed/" +arr[1];
            }
            let obj = {
                titulo: req.body.titulo,
                sinopsis: req.body.sinopsis,
                reparto: req.body.reparto,
                director: req.body.director,
                año: req.body.ano,
                genero: req.body.genero,
                calificacion: req.body.calificacion,
                link: linkFinal != "" ? linkFinal : req.body.link,
                img_id
            }
            await peliculasModel.insertPelicula(obj);
            res.redirect('/admin/peliculas')
        } else {
            res.render('admin/peliculas/agregar',{
                layout: 'admin/layout', 
                error: true, message: "Todos los campos son requeridos.",
                conocido: conocido,
                puntuacion: puntuacion
            });
        }
    } catch (error) {
        res.render('admin/peliculas/agregar',{
            layout: 'admin/layout', 
            error: true, message: "No se pudo cargar la pelicula",
            conocido: conocido,
            puntuacion: puntuacion
        });
    }
})

router.get('/modificar/:id', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        let id = req.params.id;
        let pelicula = await peliculasModel.getPeliculaById(id);
        let year = pelicula.año
        res.render('admin/peliculas/modificar',{
            layout: 'admin/layout', 
            pelicula,
            conocido,
            year,
            puntuacion: puntuacion
        });
    } catch (error) {
        console.log(error)
    }
})

router.post('/modificar', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }
        if(borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }

        if(req.body.titulo != "" && req.body.sinopsis != "" && 
        req.body.reparto != "" && req.body.director != "" && req.body.ano != "" 
        && req.body.genero != "" && req.body.calificacion != "" && req.body.link != ""){
            let link = req.body.link;
            let linkFinal = "";
            if(link.includes("watch?v=")){
                let arr = link.split('watch?v=', 2);
                linkFinal = arr[0]+ "embed/" +arr[1];
            }
            let obj = {
                titulo: req.body.titulo,
                sinopsis: req.body.sinopsis,
                reparto: req.body.reparto,
                director: req.body.director,
                año: req.body.ano,
                genero: req.body.genero,
                calificacion: req.body.calificacion,
                link: linkFinal != "" ? linkFinal : req.body.link,
                img_id
            };
            await peliculasModel.modificarPeliculaById(obj, req.body.id);
            res.redirect('/admin/peliculas')
        } else {
            res.render('admin/peliculas/modificar',{
                layout: 'admin/layout', 
                error: true, message: "Todos los campos son requeridos.",
                conocido: conocido,
                puntuacion: puntuacion
            });
        }
    } catch (error) {
        res.render('admin/peliculas/modificar',{
            layout: 'admin/layout', 
            error: true, message: "No se pudo modificar la pelicula",
            conocido: conocido,
        });
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        //Busco la pelicula para comprobar si tiene imagen
        let pelicula = await peliculasModel.getPeliculaById(id);
        if(pelicula.img_id) {
            await (destroy(pelicula.img_id));
        }
        await peliculasModel.deletePeliculaById(id);
        res.redirect('/admin/peliculas')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;