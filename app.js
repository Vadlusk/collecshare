var createError = require('http-errors');
var express     = require('express');
var path        = require('path');
var logger      = require('morgan');
var cors        = require('cors');

var usersRouter       = require('./routes/api/v1/users');
var itemsRouter       = require('./routes/api/v1/items');
var collectionsRouter = require('./routes/api/v1/collections');

var app = express();

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb' , extended: false }));

app.use('/avatars', express.static('avatars'));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/items', itemsRouter);
app.use('/api/v1/collections', collectionsRouter);

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
