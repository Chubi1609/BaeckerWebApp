var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: { type: String, required: true },
    subimage1Path: { type: String, required: false },
    subimage2Path: { type: String, required: false },
    subimage3Path: { type: String, required: false },
    subimage4Path: { type: String, required: false },
    subimage5Path: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', schema);