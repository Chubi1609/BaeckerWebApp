var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var indexRouter = require('./routes/index');
var expresshandebelbars = require('express-handlebars');
var mogoose = require('mongoose');
var session = require('express-session');
var app = express();
var flash = require('connect-flash');


mogoose.connect('mongodb://213.202.228.115:27017/shopping').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

require('./config/passport'); //only loading


// view engine setup
app.use(flash());
app.engine('.hbs',expresshandebelbars({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine', '.hbs');
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'secret',resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);


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
