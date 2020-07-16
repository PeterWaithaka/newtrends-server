'use strict';

var _index = require('../../app/order/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/orders', _index.findAll);
router.get('/orders/pending', _index.pendingOrders);
router.get('/orders/delivered', _index.deliveredOrders);
router.post('/orders/mark/delivered',  _index.markDelivered);
module.exports = router;
