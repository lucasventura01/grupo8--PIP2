var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// app.listen(3000, () => console.log('esto fue exitoso'));

let rutasMain = require('./myapp/routes/main.js');
let rutasUsers = require('./myapp/routes/users.js');
let rutasProductos = require('./myapp/routes/productos.js')
let rutasRegistro = require('./myapp/routes/registro.js')
let rutasLogin = require('./myapp/routes/login.js')

app.use('/productos', rutasProductos);
app.use('/registro', rutasRegistro);
app.use('/login', rutasLogin);
app.use('/main', rutasMain);
app.use('/users', rutasUsers);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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
