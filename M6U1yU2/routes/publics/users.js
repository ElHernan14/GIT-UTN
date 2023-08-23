var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre)

  res.render('users', { title: 'Express' , conocido: conocido});
});

module.exports = router;
