'use strict';

module.exports = function (app) {

	//  verify rights
	//app.use('/admin/quotations', require('./quotations.js')() )

	//
	app.use('/admin', require('./employees')());

	// verify
	//app.use('/admin/manage', require('./employees')() )
};