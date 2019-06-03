var Product = require('../models/product');
var mogoose = require('mongoose');
mogoose.connect('mongodb://localhost/shopping').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


var   products = [
    new Product({
        imagePath: 'https://images.ichkoche.at/data/image/variations/496x384/2/5-minuten-brot-rezept-img-19002.jpg',
        title: 'Brot',
        description: 'lorem',
        price: 10,
        category: 'back'
    }),
    new Product({
      imagePath: 'https://www.gutekueche.at/img/rezept/33932/salzstangerl.jpg',
      title: 'Salzstangerl',
      description: 'lorem',
      price: 5,
      category: 'back'
    }),
    new Product({
      imagePath: 'https://images.lecker.de/,id=8ca90253,b=lecker,w=610,cg=c.jpg',
      title: 'Kuchen',
      description: 'lorem',
      price: 10,
      category: 'sues'
    }),
    new Product({
      imagePath: 'https://thebusybaker.ca/wp-content/uploads/2018/08/best-ever-greek-yogurt-chocolate-chip-muffins-fbig3.jpg',
      title: 'Muffin',
      description: 'lorem',
      price: 10,
      category: 'sues'
    }),
    new Product({
      imagePath: 'https://thebusybaker.ca/wp-content/uploads/2018/08/best-ever-greek-yogurt-chocolate-chip-muffins-fbig3.jpg',
      title: 'Keks',
      description: 'lorem',
      price: 10,
      category: 'sues'
    })
];


var done = 0;
for(var i = 0; i < products.length; i++){
  console.log("done");
      products[i].save(function(err,result){
        console.log(err + " " + result);
          done++;

        if(done===products.lenght){
            mogoose.disconnect();
            exit();

            }  
        });

    }


