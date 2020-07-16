'use strict';

var _index = require('../../app/colors/index.js');

var express = require('express');
var router = express.Router();

router.post('/color/create', _index.createData);
router.post('/color/delete', _index.deleteRecord);
router.get('/colors', _index.findAll);

module.exports = router;
