var express = require('express');
var router = express.Router();
var product = require('../models/product')
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
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
  res.render('user/signup', {csrftoken:req.csrfToken()});
});

router.post('/user/signup',function(req, res, next){
  res.redirect('/');
});

module.exports = router;

