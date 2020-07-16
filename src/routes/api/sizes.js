'use strict';

var _index = require('../../app/sizes/index.js');

var express = require('express');
var router = express.Router();

router.post('/size/create', _index.createData);
router.post('/size/filter', _index.filterSizes);
router.post('/size/delete', _index.deleteRecord);
router.get('/sizes', _index.findAll);

module.exports = router;
