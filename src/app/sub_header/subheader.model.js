'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SubHeaderSchema = new Schema({
  sec_one: String,
  sec_two: String,
  sec_three: String,
  status: {type: String, default: 'active'}
}, { collection: 'sub_header' });

module.exports = mongoose.model('SubHeader', SubHeaderSchema);

