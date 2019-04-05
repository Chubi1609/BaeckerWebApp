var Product = require('../models/product');
var mogoose = require('mongoose');
mogoose.connect('mongodb://213.202.228.115:27017/shopping').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


var   products = [
    new Product({
        imagePath: 'https://images.ichkoche.at/data/image/variations/496x384/2/5-minuten-brot-rezept-img-19002.jpg',
        title: 'Brot',
        description: 'lorem',
        price: 10
    }),
    new Product({
      imagePath: 'https://www.gutekueche.at/img/rezept/33932/salzstangerl.jpg',
      title: 'Salzstangerl',
      description: 'lorem',
      price: 5
    }),
    new Product({
      imagePath: 'https://images.lecker.de/,id=8ca90253,b=lecker,w=610,cg=c.jpg',
      title: 'Kuchen',
      description: 'lorem',
      price: 10
    }),
    new Product({
      imagePath: 'https://thebusybaker.ca/wp-content/uploads/2018/08/best-ever-greek-yogurt-chocolate-chip-muffins-fbig3.jpg',
      title: 'Muffin',
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


