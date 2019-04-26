var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('User',schema);

