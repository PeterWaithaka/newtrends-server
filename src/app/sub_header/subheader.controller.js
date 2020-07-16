'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAll = getAll;
exports.search = search;
exports.find = find;
exports.findOne = findOne;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.findInArray = findInArray;
var Model = require('./subheader.model.js');

/********************************************
******************** database calls **********/

function getAll() {

	return Model.find({}).exec();
}

function search(query) {
	return Model.find({ 'name': new RegExp(query, 'i') }).exec();
}

function find(query) {
	var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

	return Model.find(query).sort({ date: 'desc' }).limit(num).exec();
}

function findOne(query) {
	return Model.findOne(query).exec();
}

function findById(id) {

	return Model.findById(id).exec();
}

function create(_record) {

	var newRecord = new Model(_record);

	return new Promise(function (resolve, reject) {

		newRecord.save(function (err, record) {

			if (err) {
				reject(err);
			}

			resolve(record);
		});
	});
}

function update(record, id) {

	var query = { _id: id };
	var update = record;
	var options = { new: true };

	return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {

	return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {

	/* find a record with $item in $field array */
	return Model.find({ field: { "$in": [item] } }).exec();
}