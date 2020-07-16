'use strict';

var mongoose = require('mongoose');
var Category = require('../categories/category.model.js');
var Schema = mongoose.Schema;

var SubCategorySchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  name: String,
  url: String,
  image_path: String,
  status: { type: String, default: 'active' },
  featured:{ type: String, default: 'no' }
}, { collection: 'sub_categories' });

module.exports = mongoose.model('SubCategory', SubCategorySchema);

