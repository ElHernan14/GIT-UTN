var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var peticionRouter = require('./routes/peticion');

var app = express();
app.use(session({
  secret: 'runero1498',
  resave: false,
  saveUninitialized: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/users', function(req, res, next){
  var conocido = Boolean(req.session.nombre)
  if(!conocido){
    res.redirect('/')
  }
  next();
},usersRouter);
app.use('/peticion', peticionRouter);
app.get('/salir', function(req, res) {
  req.session.destroy();
  res.redirect('/');
})

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
