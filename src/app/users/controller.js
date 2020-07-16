
const  Model = require('./user.model.js');
const sharp = require('sharp');
/********************************************
******************** database calls **********/
exports.getAll = getAll;
exports.search = search;
exports.find = find;
exports.findOne = findOne;
exports.getById = getById;
exports.createRecord = createRecord;
exports.update = update;
exports.remove = remove;
exports.resize_save = resize_save;

function getAll() {
  	return	 Model.find({}).populate('shop').exec()
}

function search(query) {
	return  Model.find({'name' : new RegExp(query, 'i')}).limit(5).exec();
}

function find(query, num) {
	return  Model.find(query).sort({date: 'desc'}).limit(num).exec();
}

function findOne(query) {
	return Model.findOne(query).populate('shop').exec();
}

function getById(id) {
		return Model.findById(id).exec()
}

function createRecord(_record) {

	let newRecord= new  Model(_record);

	return	new Promise((resolve, reject)=>{

		 newRecord.save(function (err, record) {
		 	if (err) {reject(err)}
		 	resolve(record);
		 });
	})
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
