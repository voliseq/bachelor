/**
 * Created by voliseq on 26.10.2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    start: {type: Date}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
