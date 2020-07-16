"use strict";
// exports.findAll = findAll;
exports.create_banner = create_banner;
exports.update_banner = update_banner;
exports.updateMainBanner = updateMainBanner;
exports.banner_one = banner_one;
exports.banner_two = banner_two;
exports.slider_banners = slider_banners;
exports.deleteBanner = deleteBanner;
exports.createMainBanner = createMainBanner;
exports.main_sec_banner = main_sec_banner;

var Banner = require("./banners.controller.js");
const fs = require('fs');

function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}

function randomNumber() {
	let randomNumber = Math.random().toString(36).substring(7);
	return randomNumber;
}

async function deleteBanner(req, res, next) {
	const _id = req.body._id;

	try {
		var banner = await Banner.remove(_id);
		return res.send({  banner });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function banner_one(req, res){
	const query = {
		banner_type: "slider_side",
		banner_position: "one"
	}

	var banner = await Banner.findOne(query);
	return res.send({ state: true, banner });
}

async function banner_two(req, res){
	const query = {
		banner_type: "slider_side",
		banner_position: "two"
	}
	
	var banner = await Banner.findOne(query);
	return res.send({ state: true, banner });
}


async function main_sec_banner(req, res){
	const query = {
		banner_type: "mainSection"
	}
	
	var banner = await Banner.findOne(query);
	return res.send({ state: true, banner });
}


async function slider_banners(req, res){
	const query = {
		banner_type: "slider"
	}
	
	var banners = await Banner.find(query);
	return res.send({ state: true, banners });
}


async function create_banner(req, res, next) {
	try {
		var details = {
			title: req.body.title,
			sub_title: req.body.sub_title,
			alt_tag: req.body.alt_tag,
			button_text: req.body.button_text,
			url: req.body.url,
			banner_type: req.body.banner_type,
			banner_position: req.body.banner_position
		};

		const url = req.body.title.toLowerCase().trim().split(' ').join('-');
		const imageName = url + '-' + randomNumber();
		var new_banner = await Banner.create(details);
		const banner_position = req.body.banner_position;
		const file = req.files.banner;
		const name = imageName + '.jpeg';
		const filepath = name;

		const data = { file: file, fileName: name, location: 'banners'};
			
		(async () => {
			const record = await Banner.resize_save(data);
		})();

		const _id = new_banner._id;
		const u_record = {image_path: filepath}
		const u_banner = await Banner.update(u_record, _id);

		return res.send({ state: true, u_banner });
	} catch (err) {
		var msg = "failed to create banner";
		return errorHandler(res, err, msg);
	}
}

async function update_banner(req, res, next) {
	try {

		var details = {
			title: req.body.title,
			sub_title: req.body.sub_title,
			alt_tag: req.body.alt_tag,
			button_text: req.body.button_text,
			url: req.body.url,
			banner_type: req.body.banner_type,
			banner_position: req.body.banner_position
		};

		const url = req.body.title.toLowerCase().trim().split(' ').join('-');
		const imageName = url + '-' + randomNumber();
		
		const banner_position = req.body.banner_position;

		var new_banner = await Banner.update(details, req.body._id);
		
		const file = req.files.banner;
		const name = imageName + '.jpeg';
		const filepath = name;

		const data = { file: file, fileName: name, location: 'banners'};
			
		(async () => {
			const record = await Banner.resize_save(data);
			const record_copy = await Banner.copy_images(data);
		})()

		const _id = new_banner._id;
		const u_record = {image_path: filepath}
		const u_banner = await Banner.update(u_record, _id);

		return res.send({ state: true, u_banner });
	} catch (err) {
		var msg = "failed to create banner";
		return errorHandler(res, err, msg);
	}
}



async function createMainBanner(req, res, next) {
	try {
		var details = {
			banner_type: req.body.banner_type,
			banner_position: req.body.banner_position
		};


		var new_banner = await Banner.create(details);
		const banner_position = req.body.banner_position;
		const file = req.files.banner;
		const name = 'Main_section_'+ banner_position +'.'+ file.name;
		const filepath = name;

		const data = { file: file, fileName: name, location: 'banners'};
			
		(async () => {
			const record = await Banner.resize_save(data);
			const record_copy = await Banner.copy_images(data);
		})()

		const _id = new_banner._id;
		const u_record = {image_path: filepath}
		const u_banner = await Banner.update(u_record, _id);

		return res.send({ state: true, u_banner });
	} catch (err) {
		var msg = "failed to create banner";
		return errorHandler(res, err, msg);
	}
}

async function updateMainBanner(req, res, next) {
	try {
		const banner_position = req.body.banner_position;
		const file = req.files.banner;
		const name = 'Main_section_'+ banner_position +'.'+ file.name;
		const filepath = name;

		const data = { file: file, fileName: name, location: 'banners'};
			
		(async () => {
			const record = await Banner.resize_save(data);
			const record_copy = await Banner.copy_images(data);
		})()

		const _id = req.body._id;
		const u_record = {image_path: filepath}
		const u_banner = await Banner.update(u_record, _id);

		return res.send({ state: true, u_banner });
	} catch (err) {
		var msg = "failed to create banner";
		return errorHandler(res, err, msg);
	}
}