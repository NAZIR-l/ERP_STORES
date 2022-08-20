var express = require('express');
var router = express.Router();
const manager = require('./manger');

/* GET users listing. */
router.get('/sign' ,function(req, res, next) {
  console.log(req.session)

  res.status(200).send('respond with a resource');
});

function check_is_Login(req, res, next) {
  if (req.isAuthenticated()) {
      console.log("O KKKKKK ")
      next()
  }
  else {
      res.status(203).send("404_Not_Found")
      console.log(req.session)
      console.log(req.isAuthenticated())
      console.log("NOOtll")
  }
}

module.exports = router;
