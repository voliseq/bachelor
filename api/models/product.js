/**
 * Created by voliseq on 22.11.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Image = require('./image');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    product_id: {type: Number, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    images: [{type: Schema.Types.ObjectId, ref: 'Image'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Product', schema);
