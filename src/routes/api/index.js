'use strict';
const SEORoutes = require('../../app/seo/seo.router.js');
const AppDataRoutes = require('../../app/data/router.js');

module.exports = function (app) {
	app.use('/api', require('./categories'));
	app.use('/api', require('./sub_category'));
	app.use('/api', require('./products'));
	app.use('/api', require('./banners'));
	app.use('/api', require('./homepage'));
	app.use('/api', require('./user'));
	app.use('/api', require('./sizes'));
	app.use('/api', require('./brands'));
	app.use('/api', require('./colors'));
	app.use('/api', require('./orders'));
	app.use('/api/admin/seo', SEORoutes);
	app.use('/api/admin/data', AppDataRoutes);
};






