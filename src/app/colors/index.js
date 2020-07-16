"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.findAll = findAll;
exports.deleteRecord = deleteRecord;
exports.createData = createData;

var Controller = require("./controller");

function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}

async function findAll(req, res, next) {
	try {
		const colors = await Controller.getAll();
		return res.send({ state: true, colors });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function deleteRecord(req, res, next) {
	try {
		var deletedRecord = await Controller.remove(req.body._id);
		return res.send({ state: true, deletedRecord });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function createData(req, res, next) {
	const data = req.body;
	const url = req.body.name.toLowerCase();
	const details = {
		name: data.name, 
		url: url
	};

	try {
		var color = await Controller.create(details);
		return res.send({ state: true, color });
	} catch (err) {
		var msg = "failed to create color";
		return errorHandler(res, err, msg);
	}
}