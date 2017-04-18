var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
const fileUpload = require('express-fileupload');

var index = require('./routes/index');
var users = require('./routes/users');
var quotes = require('./routes/quotes');
var clients = require('./routes/clients');
var storagelokers = require('./routes/storagelokers');
var storagelokertypes = require('./routes/storagelokertypes');
var rents = require('./routes/rents');
var promotions = require('./routes/promotions');
var promotiontypes = require('./routes/promotiontypes');
var payments = require('./routes/payments');
var upload = require('./routes/upload');
var dashboard = require('./routes/dashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use(users);
app.use(quotes);
app.use(clients);
app.use(storagelokers);
app.use(storagelokertypes);
app.use(rents);
app.use(promotions);
app.use(promotiontypes);
app.use(payments);
app.use(upload);
app.use(dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
