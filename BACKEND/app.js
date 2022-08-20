var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const {check , validatorResult } = require('express-validator');
const session  = require('express-session');
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
// require('./confi_passport/confi_passport')(passport)
const expresshbs = require('express-handlebars');





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Products = require('./routes/product');
var Employee = require('./routes/employee');
var manger = require('./routes/manger');
var Order = require('./routes/Order');
var Source = require('./routes/Source');
var carousel = require('./routes/carousel');


var router = express.Router();

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

mongoose.connect('mongodb://localhost:27017/shopping_store',{useNewUrlparser:true},(error)=>{
  if(error){
console.log(error);
  }
  else{
console.log('its connected to database : shopping_carts');
  }
})


require('./confi_passport/confi_passport');

// view engine setup



// app.engine('.hbs',expresshbs({defaultLayout:'layout',extname:'.hbs'}))
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());

var corsOptions = {
  credentials: true,
  origin: ['http://localhost:5000', 'http://localhost:8081', 'http://localhost:8081']
}
app.use(cors(corsOptions));
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false })); // enable us to take data from user  // extanded :false  for dont take complex data like object just string and number
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(cookieParser());
app.use(session({ secret :'shoppingcart_?@', saveUninitialized:true , resave: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());





app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Products', Products);
app.use('/Employee',Employee);
app.use('/manager',manger.router);
app.use('/Order', Order);
app.use('/Source', Source);
app.use('/carousel', carousel);


// app.use('/auth',auth);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('error 404')
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
