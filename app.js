var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var app = express();


let rutasMain = require('./myapp/routes/main.js');
let rutasPerfil = require('./myapp/routes/perfil.js');
let rutasProductos = require('./myapp/routes/productos.js')
let rutasUsers = require('./myapp/routes/users.js');



// view engine setup
app.set('views', path.join(__dirname, 'myapp', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'myapp', 'public')));
app.use(express.static(path.join(__dirname, 'maquetaProg2_2025S2')));


// middleware configuracion de session 
app.use(session({
  secret: "myapp",
  resave: false,
  saveUninitialized: true
}))

// middleware de session hacia Vistas
app.use(function(req, res, next) {
  if (req.session.user != undefined) { // logueado
    res.locals.user = req.session.user;
  }
  return next();
})


// middleware de Cookies hacia Vistas
app.use(function(req, res, next) {

  console.log(req.cookies.user);
  
  
  if (req.cookies.user != undefined && req.session.user == undefined) {
    res.locals.user = req.cookies.user;   // uno lo envia a las vistas (partials)
    req.session.user = req.cookies.user;  // otro lo vuelve a poner en session
  }

  return next();
})

app.use('/productos', rutasProductos);
app.use('/', rutasMain);
app.use('/users', rutasUsers);
app.use('/perfil', rutasPerfil);


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
app.listen(3000, function() {
    console.log('esto fue exitoso')});

