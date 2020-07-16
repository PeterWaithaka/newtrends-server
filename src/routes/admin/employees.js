'use strict';

var _index = require('../../app/employees/index.js');

var express = require('express');
var router = express.Router();

module.exports = function () {
	router.route('/employee').post(_index.create_employee);

	// router.route('/employee/:id')
	// 	.put(update)
	// 	.delete(remove)
	// 	.get(findById)

	return router;
};