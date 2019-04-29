var express = require('express');
var router = express.Router();
var product = require('../models/product')
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var passport = require('passport');

/* GET home page. */



router.get('/', function(req, res, next) {
  product.find(function(err,docs){
    var productChunck = [];
    var chunksize = 3;
    for(var i = 0; i < docs.length; i+= chunksize){
      productChunck.push(docs.slice(i,i+chunksize));
    }
    res.render('shop/index', { title: 'Shopping Cart',products: productChunck});
  });
  
});

router.get('/user/signup',function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signup', {csrftoken:req.csrfToken(), messages: messages});
});

router.post('/user/signup',function(req, res, next){
  res.redirect('/');
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true


}));

router.get('/user/profile', function(req, res, next){
  res.render('user/profile');
}
)

module.exports = router;

