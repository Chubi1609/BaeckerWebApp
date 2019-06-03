var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    stair: { type: Number, required: false },
    door: { type: Number, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);