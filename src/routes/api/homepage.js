'use strict';

var _subHeaderIndex = require('../../app/sub_header/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

// sub header
router.get('/sub/header/records', _subHeaderIndex.findData);
router.post('/sub/header/insert', _subHeaderIndex.createRecord);
router.post('/sub/header/edit', _subHeaderIndex.updateRecord);

// side section banners

module.exports = router;
