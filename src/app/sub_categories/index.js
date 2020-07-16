"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.create_sub_category = create_sub_category;
exports.updateCategory = updateCategory;
exports.delete_category = delete_category;
exports.subCategories = subCategories;
exports.activate = activate;
exports.deactivate = deactivate;
exports.featured = featured;

var SubCategory = require("./category.controller.js");
var Category = require("../categories/category.controller.js");

function errorHandler(res, err) {
	var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	return res.send({ state: false, err: err });
}


async function featured(req, res, next) {
	const _id = req.body._id;
	var details = {
		featured: req.body.featured
	};

	try {
		const category = await SubCategory.update(details, _id);
		return res.send({ state: true, category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function deactivate(req, res, next) {
	const _id = req.body._id;
	var details = {
		status: 'inactive'
	};

	try {
		const category = await SubCategory.update(details, _id);
		return res.send({ state: true });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function activate(req, res, next) {
	const _id = req.body._id;
	var details = {
		status: 'active'
	};

	try {
		const category = await SubCategory.update(details, _id);
		return res.send({ state: true });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function subCategories(req, res, next) {

	try {
		const selectedCategory = await Category.findById(req.body.id);
		const subCategories = await SubCategory.find({ category: req.body.id });
		return res.send({ subCategories, selectedCategory });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function delete_category(req, res, next) {
	try {
		var deleted_sub_category = await SubCategory.remove(req.body._id);
		return res.send({ deleted_sub_category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateCategory(req, res, next) {
	try {
		const _id = req.body._id;
	if (req.files && req.files['subCategoryImage']) {
		const image_file = req.files.subCategoryImage;
		const file_name = req.body.category + '_' + req.body.name + '.jpg';
		const filepath = file_name;
		const file_data = { file: image_file, fileName: file_name, width: 680, height: 680, location: 'sub_categories' };
		(async () => {
			const record = await SubCategory.resize_save(file_data);
		})()
		const u_record = { name: req.body.name, url: req.body.url, image_path: filepath };
		const u_sub_category = await SubCategory.update(u_record, _id);
		return res.send({ u_sub_category });
	}else {
		const u_record = { name: req.body.name, url: req.body.url };
		const u_sub_category = await SubCategory.update(u_record, _id);
		return res.send({ u_sub_category });
	}

	
	// update the database 
	
		
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function create_sub_category(req, res, next) {
	const category = JSON.parse(req.body.category);
	const subcategory = JSON.parse(req.body.subcategory);
	let filepath;
	if (req.files && req.files['subCategoryImage']) {
	const image_file = req.files.subCategoryImage;
	const file_name = category.url + '_' + subcategory.url + '.jpg';
	filepath = file_name;

	const file_data = { file: image_file, fileName: file_name, width: 680, height: 680, location: 'sub_categories' };
	(async () => {
		const record = await Category.resize_save(file_data);
	})()
    }

	//  const info = { category }
	const details = {
		category: category._id,
		name: subcategory.name,
		url: subcategory.url,
		image_path: filepath
	};

	try {
		var new_category = await SubCategory.create(details);
		return res.send({ state: true, ca: new_category });
	} catch (err) {
		var msg = "failed to create category";
		return errorHandler(res, err, msg);
	}
}