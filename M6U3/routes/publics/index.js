var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre)

  res.render('index', { title: 'Express' , conocido: conocido});
});

module.exports = router;
