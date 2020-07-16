'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = new Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('Color', ColorSchema);

