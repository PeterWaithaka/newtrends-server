"use strict";

exports.findAll = findAll;
exports.categoryProducts = categoryProducts;
exports.subCategoryProducts = subCategoryProducts;
exports.update_images = update_images;
exports.create_product = create_product;
exports.selected_product = selected_product;
exports.updateProduct = updateProduct;
exports.outOfStock = outOfStock;
exports.inStock = inStock;
exports.edit_offer = edit_offer;
exports.edit_featured = edit_featured;
exports.updateQty = updateQty;
exports.updateFeature = updateFeature;
exports.deleteProduct = deleteProduct;
exports.saveFeature = saveFeature;
// products queries
exports.offerProducts = offerProducts;
exports.featuredProducts = featuredProducts;
exports.updateMainImage = updateMainImage;
exports.deleteFeature = deleteFeature;
exports.deactivate = deactivate;
exports.activate = activate;

var Product = require("./product.controller.js");
var Category = require("../categories/category.controller.js");
var SubCategory = require("../sub_categories/category.controller.js");
const fs = require('fs');

function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}

function randomNumber() {
	let randomNumber = Math.random().toString(36).substring(7);
	return randomNumber;
}

async function findAll(req, res, next) {
	try {
		var products = await Product.getAll();
		return res.send({ products: products });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function categoryProducts(req, res, next) {
	const id = req.params.id;
	const query = { category: id };
	try {
		var products = await Product.find(query);
		return res.send({ state: true, products });
	} catch (err) {
		console.log(err, 'e');
		return errorHandler(res, err);
	}
}

async function subCategoryProducts(req, res, next) {
	const id = req.params.id;
	const query = { subcategory: id };
	try {
		var products = await Product.find(query);
		return res.send({ state: true, products });
	} catch (err) {
		console.log(err, 'e');
		return errorHandler(res, err);
	}
}

async function offerProducts(req, res, next) {
	const query = { offer: 'yes' }

	try {
		var products = await Product.find(query);
		return res.send({ products: products });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function deleteProduct(req, res, next) {
	const delProduct = req.body;

	try {
		var product = await Product.remove(delProduct._id);
		return res.send({ product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function deleteFeature(req, res, next) {
	try {
		const _id = req.body.selectedProduct._id;
		const c_feature = req.body.feature;
		const features = req.body.selectedProduct.features;
		const feature = features.find(feature => {
			return feature.name === c_feature.name;
		});

		const pos = features.indexOf(feature)
		if (pos === -1) {
			return;
		}
		features.splice(pos, 1)
		const details = {
			features: features
		}

		var product = await Product.update(details, _id);
		return res.send({ product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function featuredProducts(req, res, next) {
	const query = { featured: 'yes' }

	try {
		var products = await Product.find(query);
		return res.send({ products: products });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function edit_featured(req, res, next) {

	const _id = req.body._id;
	var details = {
		featured: req.body.featured_status
	};

	try {
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function outOfStock(req, res, next) {
	const _id = req.body._id;
	var details = {
		stockStatus: 'outOfStock'
	};

	try {
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function inStock(req, res, next) {
	const _id = req.body._id;
	var details = {
		stockStatus: 'inStock'
	};

	try {
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function edit_offer(req, res, next) {
	const _id = req.body._id;
	var details = {
		offer: req.body.offer_status
	};

	try {
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
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
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
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
		const product = await Product.update(details, _id);
		return res.send({ state: true, product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function selected_product(req, res, next) {
	const id = req.body.id;

	try {
		const product = await Product.findById(id);
		return res.send({ product: product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateMainImage(req, res) {
	const productId = req.params.id;

	const file = req.files.productMainImage;
	try {
		const product = await Product.findOne({ _id: productId });
		const name = productId + '_' + file.name;
		const data = { file: file, fileName: name, width: 680, height: 680, location: 'products' };
		await Product.resize_save(data);

		// update image 
		const filepath = name;
		const u_record = { cover_image: filepath }
		const u_product = await Product.update(u_record, product._id);
		// end 

		return res.send({ state: true, u_product })
	}
	catch (err) {
		handleErr(res, err)
	}
}
async function updateProduct(req, res, next) {
	const _id = req.body._id;
	var details = {
		category: req.body.category,
		subcategory: req.body.subcategory,
		subcategory_url: req.body.subcategory_url,
		name: req.body.name,
		offer_item: req.body.offer_item,
		previous_price: req.body.previous_price,
		unit_price: req.body.unit_price,
		wholesale_price: req.body.wholesale_price,
		desc: req.body.desc
	};

	// update the database 
	try {
		const u_product = await Product.update(details, _id);
		return res.send({ u_product: u_product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function saveFeature(req, res, next) {
	console.log(req.body, 'rq');
	try {
		const selectedProduct = req.body.selectedProduct;
		const features = selectedProduct.features;
		if (req.body.newFeature) {
			features.push(req.body.newFeature);
			const details = { features: features }
			const updated_product = await Product.update(details, selectedProduct._id);
		}
		return res.send({ state: true })
	}
	catch (err) {
		return errorHandler(res, err);
	}
}

async function updateFeature(req, res, next) {
	try {
		const features = req.body.selectedProduct.features;
		const featureItem = req.body.featureItem;
		const feature = features.find(record => {
			return record.name == req.body.currentFeature.name;
		})

		const pos = features.indexOf(feature)
		if (pos === -1) {
			return;
		}

		feature.name = featureItem.name;
		features[pos] = feature;
		const details = {
			features: features
		}
		const u_product = await Product.update(details, req.body.selectedProduct._id);
		return res.send({ u_product: u_product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateQty(req, res, next) {
	const _id = req.body._id;
	var details = {
		available_qty: req.body.available_qty,
	};

	// update the database 
	try {
		const u_product = await Product.update(details, _id);
		return res.send({ u_product: u_product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function update_images(req, res, next) {
	try {
		const product = await Product.findById(req.body.product_id);

		const files = req.files;
		const file_paths = []
		Object.keys(files).forEach(key => {
			const file = files[key];
			const timestamp = new Date().getTime();
			const name = product.name + '_' + file.name;
			const filepath = name;
			file_paths.push(filepath);
			const data = { file: file, fileName: name, width: 680, height: 680, location: 'products' };

			(async () => {
				const record = await Product.resize_save(data);
			})()
		})

		const _id = req.body.product_id;
		const u_record = { other_images: file_paths }
		const u_product = await Product.update(u_record, _id);

		return res.send({ state: true, product: u_product });
	} catch (err) {
		var msg = "failed to create product";
		return errorHandler(res, err, msg);
	}
}

async function create_product(req, res, next) {
	try {
		//get the category
		const productData = JSON.parse(req.body.product);
		const category = await Category.findById(productData.category);
		const subcategory = await SubCategory.findById(productData.subcategory);
		const productUrl = productData.name.toLowerCase().replace(/[^\w\s]/gi, '').trim().split(' ').join('-');
		const timestmp = new Date().getTime();
		const url = productUrl + '-' + timestmp;
		let details = {
			name: productData.name,
			category: category._id,
			subcategory: subcategory._id,
			category_url: category.url,
			subcategory_url: subcategory.url,
			features: productData.features,
			specifications: productData.specifications,
			productFeatures: productData.productFeatures,
			editorStatus: productData.editorStatus,
			name: productData.name,
			previous_price: productData.previous_price,
			unit_price: productData.unit_price,
			offer_item: productData.offer_item,
			offer_percentage: productData.offer_percentage,
			desc: productData.desc,
			size: productData.size,
			brand: productData.brand,
			color: productData.color,
			section: productData.section,
			date: new Date()
		};

		// create logic without images
		if (productData.actionStatus == 'create') {
			details.url = url;
			const new_product = await Product.create(details);
			return res.send({ state: true, product: new_product });
		}
		// end

		// update flow with images logic
		if (productData.actionStatus == 'edit') {
			const id = productData._id;
			// check cover image
			// cover image
			let coverImageName;
			if (req.files && req.files['coverImage']) {
				const file = req.files['coverImage'];
				const name = category.url + '-' + productData.url + '-cover-' + randomNumber() + '.jpg';
				const filepath = name;
				coverImageName = name;
				// update query
				details = { ...details, cover_image: coverImageName };
				// update query
				const data = { file: file, fileName: name, width: 680, height: 680, location: 'products' };
				(async () => {
					const record = await Product.resize_save(data);
				})()
			} else {
				coverImageName = productData.cover_image;
			}
			// end of cover image check

			// other images 
			if (req.files && req.files['otherImages']) {
				const otherImages = req.files.otherImages;
				const file_paths = [];
				if (typeof (otherImages.name) !== 'undefined') {
					const file = otherImages;
					const name = category.url + '-' + productData.url + '-' + randomNumber() + '.jpg';
					const filepath = name;
					file_paths.push(filepath);
					const data = { file: file, fileName: name, width: 680, height: 680, location: 'products' };
					(async () => {
						const record = await Product.resize_save(data);
					})()
				} else {
					for (const file of otherImages) {
						const name = category.url + '-' + productData.url + '-' + randomNumber() + '.jpg';
						const filepath = name;
						file_paths.push(filepath);
						const data = { file: file, fileName: name, width: 680, height: 680, location: 'products' };
						(async () => {
							const record = await Product.resize_save(data);
						})()
					};
				}

				// add cover image
				file_paths.unshift(coverImageName);

				details = { ...details, other_images: file_paths };
			}
			// end of other images

			const updated_product = await Product.update(details, id);
			return res.send({ state: true, product: updated_product });
		}
		// end
	} catch (err) {
		console.log(err, 'e');
		var msg = "failed to create product";
		return errorHandler(res, err, msg);
	}
}