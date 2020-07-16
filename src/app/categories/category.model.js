'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  section: String,
  url: String,
  image_path: String,
  horizontal_banner: String,
  horizontal_url: String,
  status: { type: String, default: 'active' },
  featured:{type: String, default: 'no'},
  icon: String,
}, { collection: 'categories' });

module.exports = mongoose.model('Category', CategorySchema);

