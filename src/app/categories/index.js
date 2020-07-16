"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findAll = findAll;
exports.findCategories = findCategories;
exports.featured = featured;
exports.create_category = create_category;
exports.selected_category = selected_category;
exports.updateCategory = updateCategory;
exports.delete_category = delete_category;
exports.deactivate = deactivate;
exports.activate = activate;

var Category = require("./category.controller.js");
var subCategory = require("../sub_categories/category.controller.js");

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
		const category = await Category.update(details, _id);
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
		const category = await Category.update(details, _id);
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
		const category = await Category.update(details, _id);
		return res.send({ state: true });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function selected_category(req, res, next) {
	const id = req.body.id;

	try {
		const category = await Category.findById(id);
		return res.send({ category: category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findAll(req, res, next) {
	try {
		const categories = [];
		var db_categories = await Category.getAll();
		for (const category of db_categories) {
			const query = { category: category._id }
			const subCategories = await subCategory.find(query);
			const sub_category = {
				category: category,
				subCategories: subCategories
			}
			categories.push(sub_category);
		}
		return res.send({ categories: categories });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findCategories(req, res, next) {
	try {
		const section = req.params.section;
		const categories = [];
		var db_categories = await Category.find({ section: section });
		for (const category of db_categories) {
			const query = { category: category._id }
			const subCategories = await subCategory.find(query);
			const sub_category = {
				category: category,
				subCategories: subCategories
			}
			categories.push(sub_category);
		}
		console.log(categories, 'cat');
		return res.send({ state: true, categories: categories });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function delete_category(req, res, next) {
	try {
		var deleted_category = await Category.remove(req.body._id);
		return res.send({ deleted_category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateCategory(req, res, next) {

	let filePath;
	let horizontal_filepath;
	let vertical_filepath;


	if (req.files && req.files.categoryImage !== null) {
		const category_file = req.files.categoryImage;
		const category_name = req.body.name + '.jpg';
		filePath = category_name;
		const category_data = { file: category_file, fileName: category_name, width: 680, height: 680, location: 'categories' };
		(async () => {
			const record = await Category.resize_save(category_data);
		})()
	} else {
		filePath = req.body.image_path;
	}


	if (req.files && req.files.horizontal_banner !== null) {
		// start of horizontal banner upload
		const horizontal_file = req.files.horizontal_banner;
		const horizontal_name = req.body.name + '-horizontal' + '.jpg';
		horizontal_filepath = horizontal_name;
		const horizontal_data = { file: horizontal_file, fileName: horizontal_name, location: 'banners' };
		(async () => {
			const record = await Category.resize_save(horizontal_data);
		})()
		// end
	} else {
		horizontal_filepath = req.body.horizontal_banner;
	}

	if (req.files && req.files.vertical_banner !== null) {
		// start of vertical banner
		const vertical_file = req.files.vertical_banner;
		const vertical_name = req.body.name + '_vertical' + '.jpg';
		vertical_filepath = vertical_name;
		const vertical_data = { file: vertical_file, fileName: vertical_name, location: 'banners' };
		(async () => {
			const record = await Category.resize_save(vertical_data);
		})()
		// end
	} else {
		vertical_filepath = req.body.vertical_banner;
	}

	try {
		const _id = req.body._id;
		const u_record = {
			name: req.body.name,
			url: req.body.url,
			icon: req.body.icon,
			horizontal_text: req.body.horizontal_text,
			horizontal_url: req.body.horizontal_url,
			button_text: req.body.button_text,
			image_path: filePath,
			vertical_banner: vertical_filepath,
			horizontal_banner: horizontal_filepath
		};
		// update the database 
		const u_category = await Category.update(u_record, _id);
		return res.send({ u_category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function create_category(req, res, next) {

	try {
		// save category and its image 
		var details = {
			name: req.body.category_name,
			url: req.body.category_url,
			section: req.body.section,
			horizontal_url: req.body.horizontal_url,
		};
		console.log(details, 'details');
		var new_category = await Category.create(details);

		// start of horizontal banner upload
		if(req.files && req.files.horizontal_banner) {
			console.log('banner is there');
			const horizontal_file = req.files.horizontal_banner;
			const horizontal_name = req.body.section + '-' +req.body.category_url + '_horizontal' + '.jpg';
			const horizontal_filepath = horizontal_name;
			const horizontal_data = { file: horizontal_file, fileName: horizontal_name, width: 1400, height: 100, location: 'banners' };
			(async () => {
				const record = await Category.resize_save(horizontal_data);
			})();

			// update banner
			const updatedImage = await Category.update({ horizontal_banner: horizontal_filepath}, new_category._id);
		}
		// end

		// loop sub categories
		const subCategories = JSON.parse(req.body.subCategories);

		for (const subcategory of subCategories) {
			const sub_details = {
				category: new_category._id,
				name: subcategory.name,
				url: subcategory.url
			}

			const sub_category = await subCategory.create(sub_details);
		}
		return res.send({ state: true, ca: new_category });
	} catch (err) {
		var msg = "failed to create category";
		return errorHandler(res, err, msg);
	}
}