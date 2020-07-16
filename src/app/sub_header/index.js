"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.findData = findData;
exports.createRecord = createRecord;
exports.updateRecord = updateRecord;

var SubHeader = require("./subheader.controller.js");

function errorHandler(res, err) {
	var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	return res.send({ state: false, err: err });
}

async function findData(req, res, next) {

	try {
		var records = await SubHeader.getAll();
		return res.send({ records: records });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateRecord(req, res, next) {

	const _id = req.body._id;
	const u_record = { 
		 sec_one: req.body.sec_one,
		 sec_two: req.body.sec_two, 
		 sec_three: req.body.sec_three };
	// update the database 
	try {
		const u_sub_header = await SubHeader.update(u_record, _id);
		return res.send({ u_sub_header: u_sub_header });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function createRecord(req, res, next) {
	console.log(req.body, 'bd')
	var details = {
		sec_one: req.body.sec_one,
		sec_two: req.body.sec_two,
		sec_three: req.body.sec_three,
	};

	try {
		var new_record = await SubHeader.create(details);
		return res.send({ state: true, new_record: new_record });
	} catch (err) {
		var msg = "failed to create record";
		return errorHandler(res, err, msg);
	}
}