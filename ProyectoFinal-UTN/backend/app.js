var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config()

var apiRouter = require('./routes/api');
var loginRouterM5U4 = require('./routes/admin/login');
var peliculasRouter = require('./routes/admin/peliculas');
var contactosRouter = require('./routes/admin/contactos');

var app = express();
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:'/tmp/'
}));
app.use(session({
  secret: 'runero1498',
  resave: false,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

secured = async(req, res, next) =>{
  try {
    if(req.session.idUsuario){
      next();
    } else {
      res.redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
}

app.use('/', loginRouterM5U4);
app.use('/admin/peliculas', secured, peliculasRouter);
app.use('/admin/contactos', secured, contactosRouter);
app.get('/salir', function(req, res) {
  req.session.destroy();
  res.redirect('/');
})
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
