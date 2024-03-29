var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');

router.get('/', async function(req, res, next) {
  var conocido = Boolean(req.session.nombre)
  var novedades = await novedadesModel.getNovedades()
  res.render('admin/novedades',{
    layout: 'admin/layout', 
    conocido: conocido,
    usuario: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) =>{
    var conocido = Boolean(req.session.nombre)
    res.render('admin/agregar',{
      layout: 'admin/layout', 
      conocido: conocido,
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        if(req.body.titulo != "" && req.body.subtitulo != "" && 
        req.body.cuerpo != "" ){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar',{
                layout: 'admin/layout', 
                error: true, message: "Todos los campos son requeridos.",
                conocido: conocido,
            });
        }
    } catch (error) {
        res.render('admin/agregar',{
            layout: 'admin/layout', 
            error: true, message: "No se pudo cargar la novedad",
            conocido: conocido,
        });
    }
})

router.get('/modificar/:id', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        let id = req.params.id;
        let novedad = await novedadesModel.getNovedadById(id);
        res.render('admin/modificar',{
            layout: 'admin/layout', 
            novedad,
            conocido,
        });
    } catch (error) {
        console.log(error)
    }
})

router.post('/modificar', async (req, res, next) => {
    try {
        var conocido = Boolean(req.session.nombre);
        if(req.body.titulo != "" && req.body.subtitulo != "" && 
        req.body.cuerpo != "" ){
            let obj = {
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                cuerpo: req.body.cuerpo,
            }
            await novedadesModel.modificarNovedadById(obj, req.body.id);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/modificar',{
                layout: 'admin/layout', 
                error: true, message: "Todos los campos son requeridos.",
                conocido: conocido,
            });
        }
    } catch (error) {
        res.render('admin/agregar',{
            layout: 'admin/layout', 
            error: true, message: "No se pudo modificar la novedad",
            conocido: conocido,
        });
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        await novedadesModel.deleteNovedadById(id);
        res.redirect('/admin/novedades')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;