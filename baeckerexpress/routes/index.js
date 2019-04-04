var express = require('express');
var router = express.Router();
var product = require('../models/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  product.find(function(err,docs){
    var productChunck = [];
    var chunksize = 3;
    for(var i = 0; i < docs.length; i+= chunksize){
      productChunck.push(docs.slice(i,i+chunksize));
    }
    res.render('index', { title: 'Shopping Cart',products: productChunck});
  });
  
});

module.exports = router;

