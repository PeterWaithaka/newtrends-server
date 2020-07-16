'use strict';

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var Category = require('../categories/category.model.js');
var SubCategory = require('../sub_categories/category.model.js');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

var ProductSchema = new Schema({
  refNo: String,
  name: String,
  url: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  subcategory: { type: Schema.Types.ObjectId, ref: 'SubCategory', default: null },
  section: String,
  category_url: String,
  subcategory_url: String,
  color: String,
  brand: String,
  image_path: String,
  features: [],
  productFeatures: String,
  editorStatus: { type: Boolean, default: false },
  name: String,
  category_tag: String,
  previous_price: {type: Number, default: 0},
  unit_price: {type: Number, default: 0},
  wholesale_price: {type: Number, default: 0},
  offer_item: String,
  offer_percentage: String,
  rec_qty: Number,
  desc: String,
  size: String,
  specifications: { type:String, default: '' },
  featured:{type: String, default: 'no'},
  offer:{type: String, default: 'no'},
  cover_image: String,
  other_images: [],
  status: {type: String, default: 'active'},
  stockStatus: { type: String, default: 'inStock'},
  date: Date
}, { collection: 'products' });

module.exports = mongoose.model('Product', ProductSchema);

