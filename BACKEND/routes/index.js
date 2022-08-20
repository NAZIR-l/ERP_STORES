var express = require('express');
const passport = require('passport')
const Customer = require('../model/Customer')
const Resource = require('../model/Source')
const Delivery = require('../model/Delivery')

const Employees = require('../model/DBemployee')
const LocalStorage = require('passport-local').Strategy
const { showuser, createusers, deleteUser , showProfile } = require('../Controller/Customer/customer')
var router = express.Router();
const manager = require('./manger')



router.get('/', function (req, res, next) {

  console.log("the is id  " + req.isAuthenticated())
  // res.status(206)
    var massag = req.user;
  console.log(massag.id)
  if(massag.id == "62d43a78e795a963500d59a2"){
    res.status(200).send('ADMIN')
  }
  else{
    Employees.findById(massag.id, (err, user) => {               
      if(user){
        res.status(202).send('employee')
      }
      else{ 
        Customer.findById(massag.id, (err,users)=>{
          if(users){
            res.status(200).send('USER')  
          }
          else{
            Resource.findById(massag.id, (err,Resource)=>{
            if(Resource){
              res.status(202).send('Resource')  
            }
            else{
              Delivery.findById(massag.id, (err,Delivery)=>{
                
              res.status(202).send('Delivery')  

              });
            }

            })
          }
        })
      }
    })
   

  }
});


router.get('/logins', function (req, res, next) {
  var massagError = req.flash('signinError');
  console.log(massagError)
  console.log("massagError")
  res.status(203).send(massagError)

});
router.get('/logout',manager.check_is_Login ,(req,res,next)=>{
  req.session.destroy()
  console.log(req.session)
  res.status(203).send("logout")
})

router.get('/login/get',manager.sign_User,(req,res, next)=>{
  res.status(200).send("login")
})

router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/',
 failureRedirect: '/logins',
  failureFlash: true,
}))


router.post('/signup', function (req, res, next) {
  email = req.body.Email,
    password = req.body.passwords

  Customer.findOne({ Email: email }, function (err, doc) {
    if (err) { res.status(200).send('error occured') }
    else {
      if (doc) {
        res.status(200).send('eamil already exists')
      }
      else {
      Employees.findOne({Email: email}, function (err, docs) {
        if(docs){
          res.status(200).send('eamil already exists')
        }
        else{
          var record = new Customer()
          record.Email = email,
            record.passwords = record.hashPassword(password),
            record.First_name = req.body.First_name,
            record.Last_name = req.body.Last_name,
            record.Address = req.body.Address
            record.Street = req.body.Street
            record.Phone = req.body.Phone
          console.log(record.password)
          record.save(function (err, user) {
            if (err) { res.status(200).send("ERROR") }
            else { res.status(201).send("Success") }
          })
        }
      });
      
      }
    }
  })
});




router.get('/signup', showuser);
router.get('/Profile', manager.sign_User ,showProfile);


router.delete('/signup/:id', deleteUser);

router.get('/signin', function (req, res, next) {
  console.log('signin')
});

router.get('/signupTEST',manager.check_is_Login ,(req, res, next) => {  
  res.status(200).send("SignIn")
});


module.exports = router;
