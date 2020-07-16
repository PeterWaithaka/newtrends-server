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
var Model = require('./model.js');
exports.resize_save = resize_save;

const sharp = require('sharp');
/********************************************
******************** database calls **********/

function getAll() {
	return Model.find({}).exec();
}

function search(query) {
	return Model.find({ 'name': new RegExp(query, 'i') }).exec();
}

function find(query) {
	return Model.find(query).sort({ date: 'desc' }).exec();
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


function resize_save(data) {
    return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return  sharp(data.file.data)
        .rotate()
        .resize(data.width, data.height)
        .jpeg()
        .toFile(name)
        .then(function (info) {
            return resolve(info);
        })
        .catch(function (err) {
            return reject(err);
        });
    });
}