'use strict';

var _index = require('./app/employees/index.js');

var express = require('express');
var router = express.Router();

module.exports = function () {
	router.route('/employee').post(_index.create_employee);

	router.route('/employee/:id').put(_index.update).delete(_index.remove).get(_index.findById);

	return router;
};