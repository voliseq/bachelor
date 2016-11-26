/**
 * Created by voliseq on 22.11.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: string, required: true},
    quantity: {type: number, required: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Product', schema);
