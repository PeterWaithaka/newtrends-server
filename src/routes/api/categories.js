'use strict';

var _index = require('../../app/categories/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

router.get('/categories', _index.findAll);
router.get('/categories/:section', _index.findCategories);
router.post('/selected/category', _index.selected_category);
router.post('/category/insert', _index.create_category);
router.post('/category/edit', _index.updateCategory);
router.post('/category/delete', _index.delete_category);
// router.post('/category/find', _index.findById);
router.post('/category/deactivate', _index.deactivate);
router.post('/category/activate', _index.activate);
router.post('/category/featured', _index.featured);
module.exports = router;
