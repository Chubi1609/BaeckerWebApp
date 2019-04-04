var Product = require('../models/product');
var mogoose = require('mongoose');
mogoose.connect('mongodb://localhost:27017/shopping');

var   products = [
    new Product({
        imagePath: 'https://images.ichkoche.at/data/image/variations/496x384/2/5-minuten-brot-rezept-img-19002.jpg',
        title: 'Brot',
        description: 'lorem',
        price: 10
    })
];


var done = 0;
for(var i = 0; i < products.length; i++){

      products[i].save(function(err,result){
        console.log(err + " " + result);
          done++;

        if(done===products.lenght){
            mogoose.disconnect();
            exit();

            }  
        });

    }


