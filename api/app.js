var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var io = require('./sockets');

var userRoutes = require('./routes/user');
var productRoutes = require('./routes/product');
var fileRoutes = require('./routes/fileUpload');
var app = express();
mongoose.connect('localhost:27017/auction-system');

var http = require('http');
var server = http.createServer(app);
io.listen(server);
server.listen('3000', function(){
  console.log('listening on 3000');
})

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE'),
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept' );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/file', fileRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
