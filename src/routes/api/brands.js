'use strict';

var _index = require('../../app/brands/index.js');

var express = require('express');
var router = express.Router();

router.post('/brand/create', _index.createData);
router.post('/brand/delete', _index.deleteRecord);
router.get('/brands', _index.findAll);

module.exports = router;
