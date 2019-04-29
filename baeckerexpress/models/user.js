var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require ('bcrypt-nodejs'); 



var userschç = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hash: String,
    salt: String
  });

userschç.methods.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);

};

userschç.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User',schema);

