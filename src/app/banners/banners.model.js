'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BannerSchema = new Schema({
  title: String,
  sub_title: String,
  alt_tag: String,
  button_text: String,
  url: String,
  banner_type: String,
  banner_position: String,
  image_path: {type: String, default: null},
  status: {type: String, default: 'active'}
}, { collection: 'banners' });

module.exports = mongoose.model('Banner', BannerSchema);

