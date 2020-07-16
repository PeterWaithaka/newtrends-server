'use strict';
var _index = require('../../app/users/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/users', _index.findAll);
router.get('/users/wholesalers', _index.wholesalers);
router.get('/users/other/clients', _index.otherClients);
router.post('/user/insert',  _index.register);
router.post('/users/approve/wholesaler',  _index.approveWholesaler);
router.post('/users/update/wholesaler',  _index.updateWholesaler);
router.post('/users/delete/wholesaler',  _index.deleteWholesaler);
router.post('/user/edit', _index.updateUser);
router.post('/user/delete', _index.deleteUser);
router.post('/user/change/password', _index.changePassword);
router.post('/do/login',  _index.login);

module.exports = router;
