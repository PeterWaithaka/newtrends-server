'use strict';

var _index = require('../../app/sub_categories/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

router.post('/get/subcategories', _index.subCategories);
router.post('/sub/category/edit', _index.updateCategory);
router.post('/save/sub/category', _index.create_sub_category);
router.post('/sub/category/delete', _index.delete_category);
router.post('/sub/category/deactivate', _index.deactivate);
router.post('/sub/category/activate', _index.activate);
router.post('/sub/category/featured', _index.featured);

module.exports = router;
