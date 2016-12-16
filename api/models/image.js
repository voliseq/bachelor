/**
 * Created by voliseq on 16.12.2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Product = require('./product');

var schema = new Schema({
    name: {type: String, required: true},
    extension: {type: String, required: true},
    product: {type: Schema.Types.ObjectId, ref: 'Product'}
});
module.exports = mongoose.model('Image', schema);
