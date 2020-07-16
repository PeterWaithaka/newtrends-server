'use strict';

var _index = require('../../app/banners/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.post('/banner/main/insert', _index.createMainBanner);
router.post('/banner/insert', _index.create_banner);
router.post('/banner/update', _index.update_banner);
router.post('/main/banner/update', _index.updateMainBanner);
router.post('/banner/delete', _index.deleteBanner);
router.get('/banner/slider', _index.slider_banners);
router.get('/banner/side/one', _index.banner_one);
router.get('/banner/side/two', _index.banner_two);
router.get('/banner/main/sec', _index.main_sec_banner);

module.exports = router;
