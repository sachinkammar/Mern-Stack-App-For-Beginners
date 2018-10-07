var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

//var book = require('./routes/book');
var app = express();
var db = require(path.join(__dirname,'/config/mongoose'));
var userAuthRouter = require('./routes/userAuthRouter');
var bookRouter = require('./routes/bookRouter');

app.use(cors());

app.use(function(req,res,next){
  res.setHeader('Access-Control-Max-Age',0);
  res.setHeader('Cache-Control', 'max-age=0,no-cache,no-store,post-check=0,pre-check=0,must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires','-1')
  return next()
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended: true }));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

//app.use('/api/book', book);
app.use('/api/user', userAuthRouter);
app.use('/api/book', bookRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler

module.exports = app;