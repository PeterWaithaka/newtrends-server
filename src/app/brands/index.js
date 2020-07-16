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
		const brands = await Controller.getAll();
		return res.send({ state: true, brands });
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
	const details = {
		name: data.name
	};

	try {
		var brand = await Controller.create(details);
		return res.send({ state: true, brand });
	} catch (err) {
		var msg = "failed to create size";
		return errorHandler(res, err, msg);
	}
}