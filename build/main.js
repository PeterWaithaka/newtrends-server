require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  secret: 'sdgjfskdfskdfskfy7wywfsdukjfhks6aDFGHJ6j234'
};

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const fileUpload = __webpack_require__(/*! express-fileupload */ "express-fileupload");

const path = __webpack_require__(/*! path */ "path");

const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

const http = __webpack_require__(/*! http */ "http");

const passport = __webpack_require__(/*! passport */ "passport");

const moment = __webpack_require__(/*! moment */ "moment");

var cors = __webpack_require__(/*! cors */ "cors"); // mongoose stuffs


const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

mongoose.connect('mongodb://localhost/nrbcloset', {
  useCreateIndex: true,
  useNewUrlParser: true
});
const app = express();
app.use(fileUpload());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return next();
}); // app.use(cors({
//   origin: 'http://localhost:8080'
// }));

app.set('view engine', 'ejs'); //admin routes

__webpack_require__(/*! ./src/routes/api */ "./src/routes/api/index.js")(app);

app.get('*', function (req, res, next) {
  const url = req.url;

  if (url === '/api') {
    return next();
  }

  console.log(url);
  return res.render('index', {});
}); // set port

const port = process.env.PORT || '4500';
app.set('port', port); // create a http server

const server = http.createServer(app);
const mymessage = 'Running on port: ' + port;
server.listen(port, () => console.log(mymessage));

/***/ }),

/***/ "./src/app sync recursive ^\\.\\/.*\\/model\\.js$":
/*!******************************************!*\
  !*** ./src/app sync ^\.\/.*\/model\.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brands/model.js": "./src/app/brands/model.js",
	"./colors/model.js": "./src/app/colors/model.js",
	"./data/brands/model.js": "./src/app/data/brands/model.js",
	"./data/pages/model.js": "./src/app/data/pages/model.js",
	"./data/product-categories/model.js": "./src/app/data/product-categories/model.js",
	"./seo/model.js": "./src/app/seo/model.js",
	"./sizes/model.js": "./src/app/sizes/model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app sync recursive ^\\.\\/.*\\/model\\.js$";

/***/ }),

/***/ "./src/app/banners/banners.controller.js":
/*!***********************************************!*\
  !*** ./src/app/banners/banners.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const sharp = __webpack_require__(/*! sharp */ "sharp");

exports.getAll = getAll;
exports.search = search;
exports.find = find;
exports.findOne = findOne;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.findInArray = findInArray;
exports.resize_save = resize_save;
exports.copy_images = copy_images;

var Model = __webpack_require__(/*! ./banners.model.js */ "./src/app/banners/banners.model.js");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).populate('category').sort({
    date: 'desc'
  }).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return Model.find(query).populate('category').sort({
    date: 'desc'
  }).limit(num).exec();
}

function findOne(query) {
  return Model.findOne(query).exec();
}

function findById(id) {
  return Model.findById(id).populate('category').exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function copy_images(data) {
  return new Promise(function (resolve, reject) {
    const name = `./images/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/banners/banners.model.js":
/*!******************************************!*\
  !*** ./src/app/banners/banners.model.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var BannerSchema = new Schema({
  title: String,
  sub_title: String,
  alt_tag: String,
  button_text: String,
  url: String,
  banner_type: String,
  banner_position: String,
  image_path: {
    type: String,
    default: null
  },
  status: {
    type: String,
    default: 'active'
  }
}, {
  collection: 'banners'
});
module.exports = mongoose.model('Banner', BannerSchema);

/***/ }),

/***/ "./src/app/banners/index.js":
/*!**********************************!*\
  !*** ./src/app/banners/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var Banner = __webpack_require__(/*! ./banners.controller.js */ "./src/app/banners/banners.controller.js");

const fs = __webpack_require__(/*! fs */ "fs");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

function randomNumber() {
  let randomNumber = Math.random().toString(36).substring(7);
  return randomNumber;
}

async function deleteBanner(req, res, next) {
  const _id = req.body._id;

  try {
    var banner = await Banner.remove(_id);
    return res.send({
      banner
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function banner_one(req, res) {
  const query = {
    banner_type: "slider_side",
    banner_position: "one"
  };
  var banner = await Banner.findOne(query);
  return res.send({
    state: true,
    banner
  });
}

async function banner_two(req, res) {
  const query = {
    banner_type: "slider_side",
    banner_position: "two"
  };
  var banner = await Banner.findOne(query);
  return res.send({
    state: true,
    banner
  });
}

async function main_sec_banner(req, res) {
  const query = {
    banner_type: "mainSection"
  };
  var banner = await Banner.findOne(query);
  return res.send({
    state: true,
    banner
  });
}

async function slider_banners(req, res) {
  const query = {
    banner_type: "slider"
  };
  var banners = await Banner.find(query);
  return res.send({
    state: true,
    banners
  });
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
    const data = {
      file: file,
      fileName: name,
      location: 'banners'
    };

    (async () => {
      const record = await Banner.resize_save(data);
    })();

    const _id = new_banner._id;
    const u_record = {
      image_path: filepath
    };
    const u_banner = await Banner.update(u_record, _id);
    return res.send({
      state: true,
      u_banner
    });
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
    const data = {
      file: file,
      fileName: name,
      location: 'banners'
    };

    (async () => {
      const record = await Banner.resize_save(data);
      const record_copy = await Banner.copy_images(data);
    })();

    const _id = new_banner._id;
    const u_record = {
      image_path: filepath
    };
    const u_banner = await Banner.update(u_record, _id);
    return res.send({
      state: true,
      u_banner
    });
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
    const name = 'Main_section_' + banner_position + '.' + file.name;
    const filepath = name;
    const data = {
      file: file,
      fileName: name,
      location: 'banners'
    };

    (async () => {
      const record = await Banner.resize_save(data);
      const record_copy = await Banner.copy_images(data);
    })();

    const _id = new_banner._id;
    const u_record = {
      image_path: filepath
    };
    const u_banner = await Banner.update(u_record, _id);
    return res.send({
      state: true,
      u_banner
    });
  } catch (err) {
    var msg = "failed to create banner";
    return errorHandler(res, err, msg);
  }
}

async function updateMainBanner(req, res, next) {
  try {
    const banner_position = req.body.banner_position;
    const file = req.files.banner;
    const name = 'Main_section_' + banner_position + '.' + file.name;
    const filepath = name;
    const data = {
      file: file,
      fileName: name,
      location: 'banners'
    };

    (async () => {
      const record = await Banner.resize_save(data);
      const record_copy = await Banner.copy_images(data);
    })();

    const _id = req.body._id;
    const u_record = {
      image_path: filepath
    };
    const u_banner = await Banner.update(u_record, _id);
    return res.send({
      state: true,
      u_banner
    });
  } catch (err) {
    var msg = "failed to create banner";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/brands/controller.js":
/*!**************************************!*\
  !*** ./src/app/brands/controller.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var Model = __webpack_require__(/*! ./model.js */ "./src/app/brands/model.js");

exports.resize_save = resize_save;

const sharp = __webpack_require__(/*! sharp */ "sharp");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  return Model.find(query).sort({
    date: 'desc'
  }).exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/brands/index.js":
/*!*********************************!*\
  !*** ./src/app/brands/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.deleteRecord = deleteRecord;
exports.createData = createData;

var Controller = __webpack_require__(/*! ./controller */ "./src/app/brands/controller.js");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

async function findAll(req, res, next) {
  try {
    const brands = await Controller.getAll();
    return res.send({
      state: true,
      brands
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteRecord(req, res, next) {
  try {
    var deletedRecord = await Controller.remove(req.body._id);
    return res.send({
      state: true,
      deletedRecord
    });
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
    return res.send({
      state: true,
      brand
    });
  } catch (err) {
    var msg = "failed to create size";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/brands/model.js":
/*!*********************************!*\
  !*** ./src/app/brands/model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var BrandSchema = new Schema({
  name: String
});
module.exports = mongoose.model('Brand', BrandSchema);

/***/ }),

/***/ "./src/app/categories/category.controller.js":
/*!***************************************************!*\
  !*** ./src/app/categories/category.controller.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
exports.resize_save = resize_save;

var Model = __webpack_require__(/*! ./category.model.js */ "./src/app/categories/category.model.js");

const sharp = __webpack_require__(/*! sharp */ "sharp");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return Model.find(query).sort({
    date: 'desc'
  }).limit(num).exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/categories/category.model.js":
/*!**********************************************!*\
  !*** ./src/app/categories/category.model.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var CategorySchema = new Schema({
  name: String,
  section: String,
  url: String,
  image_path: String,
  horizontal_banner: String,
  horizontal_url: String,
  status: {
    type: String,
    default: 'active'
  },
  featured: {
    type: String,
    default: 'no'
  },
  icon: String
}, {
  collection: 'categories'
});
module.exports = mongoose.model('Category', CategorySchema);

/***/ }),

/***/ "./src/app/categories/index.js":
/*!*************************************!*\
  !*** ./src/app/categories/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var Category = __webpack_require__(/*! ./category.controller.js */ "./src/app/categories/category.controller.js");

var subCategory = __webpack_require__(/*! ../sub_categories/category.controller.js */ "./src/app/sub_categories/category.controller.js");

function errorHandler(res, err) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return res.send({
    state: false,
    err: err
  });
}

async function featured(req, res, next) {
  const _id = req.body._id;
  var details = {
    featured: req.body.featured
  };

  try {
    const category = await Category.update(details, _id);
    return res.send({
      state: true,
      category
    });
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
    return res.send({
      state: true
    });
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
    return res.send({
      state: true
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function selected_category(req, res, next) {
  const id = req.body.id;

  try {
    const category = await Category.findById(id);
    return res.send({
      category: category
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function findAll(req, res, next) {
  try {
    const categories = [];
    var db_categories = await Category.getAll();

    for (const category of db_categories) {
      const query = {
        category: category._id
      };
      const subCategories = await subCategory.find(query);
      const sub_category = {
        category: category,
        subCategories: subCategories
      };
      categories.push(sub_category);
    }

    return res.send({
      categories: categories
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function findCategories(req, res, next) {
  try {
    const section = req.params.section;
    const categories = [];
    var db_categories = await Category.find({
      section: section
    });

    for (const category of db_categories) {
      const query = {
        category: category._id
      };
      const subCategories = await subCategory.find(query);
      const sub_category = {
        category: category,
        subCategories: subCategories
      };
      categories.push(sub_category);
    }

    console.log(categories, 'cat');
    return res.send({
      state: true,
      categories: categories
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function delete_category(req, res, next) {
  try {
    var deleted_category = await Category.remove(req.body._id);
    return res.send({
      deleted_category
    });
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
    const category_data = {
      file: category_file,
      fileName: category_name,
      width: 680,
      height: 680,
      location: 'categories'
    };

    (async () => {
      const record = await Category.resize_save(category_data);
    })();
  } else {
    filePath = req.body.image_path;
  }

  if (req.files && req.files.horizontal_banner !== null) {
    // start of horizontal banner upload
    const horizontal_file = req.files.horizontal_banner;
    const horizontal_name = req.body.name + '-horizontal' + '.jpg';
    horizontal_filepath = horizontal_name;
    const horizontal_data = {
      file: horizontal_file,
      fileName: horizontal_name,
      location: 'banners'
    };

    (async () => {
      const record = await Category.resize_save(horizontal_data);
    })(); // end

  } else {
    horizontal_filepath = req.body.horizontal_banner;
  }

  if (req.files && req.files.vertical_banner !== null) {
    // start of vertical banner
    const vertical_file = req.files.vertical_banner;
    const vertical_name = req.body.name + '_vertical' + '.jpg';
    vertical_filepath = vertical_name;
    const vertical_data = {
      file: vertical_file,
      fileName: vertical_name,
      location: 'banners'
    };

    (async () => {
      const record = await Category.resize_save(vertical_data);
    })(); // end

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
    }; // update the database 

    const u_category = await Category.update(u_record, _id);
    return res.send({
      u_category
    });
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
      horizontal_url: req.body.horizontal_url
    };
    console.log(details, 'details');
    var new_category = await Category.create(details); // start of horizontal banner upload

    if (req.files && req.files.horizontal_banner) {
      console.log('banner is there');
      const horizontal_file = req.files.horizontal_banner;
      const horizontal_name = req.body.section + '-' + req.body.category_url + '_horizontal' + '.jpg';
      const horizontal_filepath = horizontal_name;
      const horizontal_data = {
        file: horizontal_file,
        fileName: horizontal_name,
        width: 1400,
        height: 100,
        location: 'banners'
      };

      (async () => {
        const record = await Category.resize_save(horizontal_data);
      })(); // update banner


      const updatedImage = await Category.update({
        horizontal_banner: horizontal_filepath
      }, new_category._id);
    } // end
    // loop sub categories


    const subCategories = JSON.parse(req.body.subCategories);

    for (const subcategory of subCategories) {
      const sub_details = {
        category: new_category._id,
        name: subcategory.name,
        url: subcategory.url
      };
      const sub_category = await subCategory.create(sub_details);
    }

    return res.send({
      state: true,
      ca: new_category
    });
  } catch (err) {
    var msg = "failed to create category";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/colors/controller.js":
/*!**************************************!*\
  !*** ./src/app/colors/controller.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var Model = __webpack_require__(/*! ./model.js */ "./src/app/colors/model.js");

exports.resize_save = resize_save;

const sharp = __webpack_require__(/*! sharp */ "sharp");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  return Model.find(query).sort({
    date: 'desc'
  }).exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/colors/index.js":
/*!*********************************!*\
  !*** ./src/app/colors/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.deleteRecord = deleteRecord;
exports.createData = createData;

var Controller = __webpack_require__(/*! ./controller */ "./src/app/colors/controller.js");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

async function findAll(req, res, next) {
  try {
    const colors = await Controller.getAll();
    return res.send({
      state: true,
      colors
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteRecord(req, res, next) {
  try {
    var deletedRecord = await Controller.remove(req.body._id);
    return res.send({
      state: true,
      deletedRecord
    });
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
    return res.send({
      state: true,
      color
    });
  } catch (err) {
    var msg = "failed to create color";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/colors/model.js":
/*!*********************************!*\
  !*** ./src/app/colors/model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var ColorSchema = new Schema({
  name: String,
  url: String
});
module.exports = mongoose.model('Color', ColorSchema);

/***/ }),

/***/ "./src/app/controller.js":
/*!*******************************!*\
  !*** ./src/app/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (modelName) {
  const Model = __webpack_require__("./src/app sync recursive ^\\.\\/.*\\/model\\.js$")(`./${modelName}/model.js`);

  return {
    getSome() {},

    search(query) {
      return Model.find(query).populate('company').limit(6).exec();
    },

    getAll() {
      return Model.find({}).exec();
    },

    findListings(query, num) {
      return Model.find(query).populate('owner').sort({
        created: 'desc'
      }).limit(num).exec();
    },

    find(query, num) {
      return Model.find(query).sort({
        created: 'desc'
      }).limit(num).exec();
    },

    findOne(query) {
      return Model.findOne(query).exec();
    },

    findById(id) {
      return Model.findById(id).exec();
    },

    create(_record) {
      let newRecord = new Model(_record);
      return new Promise((resolve, reject) => {
        newRecord.save(function (err, record) {
          if (err) {
            reject(err);
          }

          resolve(record);
        });
      });
    },

    update(record, id) {
      const query = {
        _id: id
      };
      const update = record;
      const options = {
        new: true
      };
      return Model.findOneAndUpdate(query, update, options).exec();
    },

    updateArray(query, id) {
      return Model.findByIdAndUpdate(id, query, {
        safe: true,
        upsert: true
      }).exec();
    },

    remove(id) {
      return Model.findByIdAndRemove(id).exec();
    },

    removeMany(query) {
      return Model.deleteMany(query).exec();
    },

    findInArray(field, item, limit) {
      //  console.log(field, item, limit);

      /* find a record with $item in $field array */
      return Model.find({
        [field]: {
          '$in': [item]
        }
      }).limit(limit).exec();
    },

    productAds(query, limit) {
      // fetch ads
      return Model.find(query).limit(limit).exec();
    },

    findProduct(query, num = 100) {
      return Model.find(query).populate({
        path: 'company',
        select: 'name owner url location verified phone website'
      }).limit(num).exec();
    },

    productById(query) {
      return Model.findOne(query).populate({
        path: 'company',
        select: 'name owner url county location verified phone website'
      }).exec();
    },

    findPaginate(query, {
      page,
      limit
    }) {
      const sort = {
        category: -1,
        subcategory: 1
      };
      const options = {
        populate: [{
          path: 'company',
          select: 'name url location county verified phone website owner'
        }],
        page: page,
        limit: limit,
        sort
      };
      return Model.paginate(query, options);
    }

  };
});

/***/ }),

/***/ "./src/app/data/brands/index.js":
/*!**************************************!*\
  !*** ./src/app/data/brands/index.js ***!
  \**************************************/
/*! exports provided: brands, findAll, findOne, search, create, remove, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brands", function() { return brands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOne", function() { return findOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller.js */ "./src/app/controller.js");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/index */ "./src/helpers/index.js");


const Controller = Object(_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"])('data/brands');

 //  const Industry = require('../controller.js')('industries');

async function brands() {
  try {
    const brands = await Controller.find({});
    return brands;
  } catch (err) {
    return [];
  }
}
async function findAll(req, res) {
  try {
    const brands = await Controller.find({});
    return res.send({
      state: true,
      brands
    });
  } catch (err) {
    return res.send({
      state: false,
      err
    });
  }
}
async function findOne(req, res) {
  const id = req.params.id;

  try {
    const brand = await Controller.findOne({
      _id: id
    });
    return res.send({
      state: true,
      brand
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}
async function search(req, res) {
  const query = req.params.query;

  try {
    let brands;

    if (query == 'all') {
      brands = await Controller.find({});
    } else {
      const searchQuery = {
        $or: [{
          name: new RegExp(query, 'i')
        }]
      };
      brands = await Controller.search(searchQuery);
    } //  console.log('ind', industries);


    return res.send({
      state: true,
      brands
    });
  } catch (err) {
    return res.send({
      state: false,
      err
    });
  }
}
async function create(req, res) {
  try {
    const brand = await Controller.create(req.body);
    return res.send({
      state: true,
      brand
    });
  } catch (err) {
    return res.send({
      state: false,
      err
    });
  }
}
async function remove(req, res) {
  try {
    const brand = await Controller.remove(req.params.id);
    return res.send({
      state: true,
      brand
    });
  } catch (err) {
    return res.send({
      state: false,
      err
    });
  }
}
async function update(req, res) {
  try {
    const brand = await Controller.update(req.body, req.params.id);
    return res.send({
      state: true,
      brand
    });
  } catch (err) {
    return res.send({
      state: false,
      err
    });
  }
}

/***/ }),

/***/ "./src/app/data/brands/model.js":
/*!**************************************!*\
  !*** ./src/app/data/brands/model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose"); //  var ObjectId = mongoose.Schema.ObjectId ;


var BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  metaTitle: {
    type: String
  },
  models: [],
  metaDescription: {
    type: String,
    default: ''
  },
  footerContent: {
    type: String
  },
  highlight: {
    type: String
  },
  h1: {
    type: String
  },
  image: {
    type: String
  },
  related: []
});
module.exports = mongoose.model('brand', BrandSchema);

/***/ }),

/***/ "./src/app/data/pages/index.js":
/*!*************************************!*\
  !*** ./src/app/data/pages/index.js ***!
  \*************************************/
/*! exports provided: create, update, remove, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller.js */ "./src/app/controller.js");
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/index.js */ "./src/helpers/index.js");



const Controller = Object(_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"])('data/pages');

async function create(req, res) {
  const _data = req.body;
  const website = req.headers['website'] || '';

  try {
    _data.uid = website + '_' + _data.url;
    const data = await Controller.create(_data);
    return res.send({
      state: true,
      page: data
    });
  } catch (err) {
    Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err, 'Failed');
  }
}
async function update(req, res) {
  const _data = req.body;

  try {
    const data = await Controller.create(_data);
    return res.send({
      state: true,
      data
    });
  } catch (err) {
    Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err, 'Failed');
  }
}
async function remove(req, res) {
  const id = req.params.id;

  try {
    const data = await Controller.remove(id);
    return res.send({
      state: true,
      data
    });
  } catch (err) {
    Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err, 'Failed');
  }
}
async function get(req, res) {
  try {
    const data = await Controller.find({});
    return res.send({
      state: true,
      data
    });
  } catch (err) {
    //  console.log(err, 'Error');
    Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err, 'Failed');
  }
}

/***/ }),

/***/ "./src/app/data/pages/model.js":
/*!*************************************!*\
  !*** ./src/app/data/pages/model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const PageSchema = new mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String,
    index: true
  },
  subPages: [{
    name: String,
    url: String
  }],
  uid: {
    type: String,
    unique: true
  },
  website: {
    type: String
  },
  parent: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('page', PageSchema);

/***/ }),

/***/ "./src/app/data/product-categories/model.js":
/*!**************************************************!*\
  !*** ./src/app/data/product-categories/model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose"); //  var ObjectId = mongoose.Schema.ObjectId ;


var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  title: {
    type: String
  },
  metaDescription: {
    type: String
  },
  image: {
    type: String
  },
  subcategories: [{
    name: String,
    title: String,
    categories: [],
    url: {
      type: String
    }
  }],
  abr: {
    type: String
  }
});
module.exports = mongoose.model('ProductCategory', CategorySchema);

/***/ }),

/***/ "./src/app/data/router.js":
/*!********************************!*\
  !*** ./src/app/data/router.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Brand = __webpack_require__(/*! ./brands/index.js */ "./src/app/data/brands/index.js");

const Page = __webpack_require__(/*! ./pages/index.js */ "./src/app/data/pages/index.js");

const router = __webpack_require__(/*! express */ "express").Router(); // export consclientRouter = require('express').Router();
// pages


router.route('/page').get(Page.get).post(Page.create);
router.route('/page/:id').put(Page.update).delete(Page.remove); // ********** brands *********** //

router.route('/brands').post(Brand.create).get(Brand.findAll);
router.route('/brands/:id').get(Brand.findOne).put(Brand.update).delete(Brand.remove);
router.get('/brands/search/:query', Brand.search); // ********** brands end *********** //

module.exports = router;

/***/ }),

/***/ "./src/app/order/index.js":
/*!********************************!*\
  !*** ./src/app/order/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.findAll = findAll;
exports.pendingOrders = pendingOrders;
exports.deliveredOrders = deliveredOrders;
exports.markDelivered = markDelivered;

var Controller = __webpack_require__(/*! ./order.controller.js */ "./src/app/order/order.controller.js");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

async function markDelivered(req, res, next) {
  const order = req.body;
  const details = {
    orderStatus: 'delivered'
  };

  try {
    var updated_order = await Controller.update(details, order._id);
    return res.send({
      updated_order
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function findAll(req, res, next) {
  try {
    var orders = await Controller.getAll();
    return res.send({
      orders: orders
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function pendingOrders(req, res, next) {
  const query = {
    orderStatus: 'pending'
  };

  try {
    var orders = await Controller.find(query);
    return res.send({
      orders
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deliveredOrders(req, res, next) {
  const query = {
    orderStatus: 'delivered'
  };

  try {
    var orders = await Controller.find(query);
    return res.send({
      orders
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function order(req, res, next) {
  const data = req.body;

  try {
    const order = await Controller.create(data);
    return res.send({
      state: true,
      order
    });
  } catch (err) {
    console.log(err);
    return res.send({
      state: false
    });
  }
}

exports.order = order;

/***/ }),

/***/ "./src/app/order/order.controller.js":
/*!*******************************************!*\
  !*** ./src/app/order/order.controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const sharp = __webpack_require__(/*! sharp */ "sharp");

exports.getAll = getAll;
exports.search = search;
exports.find = find;
exports.findOne = findOne;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.findInArray = findInArray;
exports.resize_save = resize_save;

var Model = __webpack_require__(/*! ./order.model.js */ "./src/app/order/order.model.js");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).populate('category').sort({
    date: 'desc'
  }).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return Model.find(query).populate('category').sort({
    date: 'desc'
  }).limit(num).exec();
}

function findOne(query) {
  return Model.findOne(query).exec();
}

function findById(id) {
  return Model.findById(id).populate('category').exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/order/order.model.js":
/*!**************************************!*\
  !*** ./src/app/order/order.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var User = __webpack_require__(/*! ../users/user.model.js */ "./src/app/users/user.model.js");

var Product = __webpack_require__(/*! ../products/product.model.js */ "./src/app/products/product.model.js");

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  location: {
    type: String
  },
  total: {
    type: Number,
    default: 0
  },
  size: {
    type: String
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      default: null
    },
    productName: String,
    quantity: Number,
    price: Number
  }],
  orderStatus: {
    type: String,
    default: 'pending'
  },
  placedOn: {
    type: Date,
    default: Date.now
  },
  deliveryDate: {
    type: Date,
    default: null
  }
}, {
  collection: 'orders'
});
module.exports = mongoose.model('Order', OrderSchema);

/***/ }),

/***/ "./src/app/products/index.js":
/*!***********************************!*\
  !*** ./src/app/products/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
exports.saveFeature = saveFeature; // products queries

exports.offerProducts = offerProducts;
exports.featuredProducts = featuredProducts;
exports.updateMainImage = updateMainImage;
exports.deleteFeature = deleteFeature;
exports.deactivate = deactivate;
exports.activate = activate;

var Product = __webpack_require__(/*! ./product.controller.js */ "./src/app/products/product.controller.js");

var Category = __webpack_require__(/*! ../categories/category.controller.js */ "./src/app/categories/category.controller.js");

var SubCategory = __webpack_require__(/*! ../sub_categories/category.controller.js */ "./src/app/sub_categories/category.controller.js");

const fs = __webpack_require__(/*! fs */ "fs");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

function randomNumber() {
  let randomNumber = Math.random().toString(36).substring(7);
  return randomNumber;
}

async function findAll(req, res, next) {
  try {
    var products = await Product.getAll();
    return res.send({
      products: products
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function categoryProducts(req, res, next) {
  const id = req.params.id;
  const query = {
    category: id
  };

  try {
    var products = await Product.find(query);
    return res.send({
      state: true,
      products
    });
  } catch (err) {
    console.log(err, 'e');
    return errorHandler(res, err);
  }
}

async function subCategoryProducts(req, res, next) {
  const id = req.params.id;
  const query = {
    subcategory: id
  };

  try {
    var products = await Product.find(query);
    return res.send({
      state: true,
      products
    });
  } catch (err) {
    console.log(err, 'e');
    return errorHandler(res, err);
  }
}

async function offerProducts(req, res, next) {
  const query = {
    offer: 'yes'
  };

  try {
    var products = await Product.find(query);
    return res.send({
      products: products
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteProduct(req, res, next) {
  const delProduct = req.body;

  try {
    var product = await Product.remove(delProduct._id);
    return res.send({
      product
    });
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
    const pos = features.indexOf(feature);

    if (pos === -1) {
      return;
    }

    features.splice(pos, 1);
    const details = {
      features: features
    };
    var product = await Product.update(details, _id);
    return res.send({
      product
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function featuredProducts(req, res, next) {
  const query = {
    featured: 'yes'
  };

  try {
    var products = await Product.find(query);
    return res.send({
      products: products
    });
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
    return res.send({
      state: true,
      product
    });
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
    return res.send({
      state: true,
      product
    });
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
    return res.send({
      state: true,
      product
    });
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
    return res.send({
      state: true,
      product
    });
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
    return res.send({
      state: true,
      product
    });
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
    return res.send({
      state: true,
      product
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function selected_product(req, res, next) {
  const id = req.body.id;

  try {
    const product = await Product.findById(id);
    return res.send({
      product: product
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function updateMainImage(req, res) {
  const productId = req.params.id;
  const file = req.files.productMainImage;

  try {
    const product = await Product.findOne({
      _id: productId
    });
    const name = productId + '_' + file.name;
    const data = {
      file: file,
      fileName: name,
      width: 680,
      height: 680,
      location: 'products'
    };
    await Product.resize_save(data); // update image 

    const filepath = name;
    const u_record = {
      cover_image: filepath
    };
    const u_product = await Product.update(u_record, product._id); // end 

    return res.send({
      state: true,
      u_product
    });
  } catch (err) {
    handleErr(res, err);
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
  }; // update the database 

  try {
    const u_product = await Product.update(details, _id);
    return res.send({
      u_product: u_product
    });
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
      const details = {
        features: features
      };
      const updated_product = await Product.update(details, selectedProduct._id);
    }

    return res.send({
      state: true
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function updateFeature(req, res, next) {
  try {
    const features = req.body.selectedProduct.features;
    const featureItem = req.body.featureItem;
    const feature = features.find(record => {
      return record.name == req.body.currentFeature.name;
    });
    const pos = features.indexOf(feature);

    if (pos === -1) {
      return;
    }

    feature.name = featureItem.name;
    features[pos] = feature;
    const details = {
      features: features
    };
    const u_product = await Product.update(details, req.body.selectedProduct._id);
    return res.send({
      u_product: u_product
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function updateQty(req, res, next) {
  const _id = req.body._id;
  var details = {
    available_qty: req.body.available_qty
  }; // update the database 

  try {
    const u_product = await Product.update(details, _id);
    return res.send({
      u_product: u_product
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function update_images(req, res, next) {
  try {
    const product = await Product.findById(req.body.product_id);
    const files = req.files;
    const file_paths = [];
    Object.keys(files).forEach(key => {
      const file = files[key];
      const timestamp = new Date().getTime();
      const name = product.name + '_' + file.name;
      const filepath = name;
      file_paths.push(filepath);
      const data = {
        file: file,
        fileName: name,
        width: 680,
        height: 680,
        location: 'products'
      };

      (async () => {
        const record = await Product.resize_save(data);
      })();
    });
    const _id = req.body.product_id;
    const u_record = {
      other_images: file_paths
    };
    const u_product = await Product.update(u_record, _id);
    return res.send({
      state: true,
      product: u_product
    });
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
    }; // create logic without images

    if (productData.actionStatus == 'create') {
      details.url = url;
      const new_product = await Product.create(details);
      return res.send({
        state: true,
        product: new_product
      });
    } // end
    // update flow with images logic


    if (productData.actionStatus == 'edit') {
      const id = productData._id; // check cover image
      // cover image

      let coverImageName;

      if (req.files && req.files['coverImage']) {
        const file = req.files['coverImage'];
        const name = category.url + '-' + productData.url + '-cover-' + randomNumber() + '.jpg';
        const filepath = name;
        coverImageName = name; // update query

        details = _objectSpread({}, details, {
          cover_image: coverImageName
        }); // update query

        const data = {
          file: file,
          fileName: name,
          width: 680,
          height: 680,
          location: 'products'
        };

        (async () => {
          const record = await Product.resize_save(data);
        })();
      } else {
        coverImageName = productData.cover_image;
      } // end of cover image check
      // other images 


      if (req.files && req.files['otherImages']) {
        const otherImages = req.files.otherImages;
        const file_paths = [];

        if (typeof otherImages.name !== 'undefined') {
          const file = otherImages;
          const name = category.url + '-' + productData.url + '-' + randomNumber() + '.jpg';
          const filepath = name;
          file_paths.push(filepath);
          const data = {
            file: file,
            fileName: name,
            width: 680,
            height: 680,
            location: 'products'
          };

          (async () => {
            const record = await Product.resize_save(data);
          })();
        } else {
          for (const file of otherImages) {
            const name = category.url + '-' + productData.url + '-' + randomNumber() + '.jpg';
            const filepath = name;
            file_paths.push(filepath);
            const data = {
              file: file,
              fileName: name,
              width: 680,
              height: 680,
              location: 'products'
            };

            (async () => {
              const record = await Product.resize_save(data);
            })();
          }

          ;
        } // add cover image


        file_paths.unshift(coverImageName);
        details = _objectSpread({}, details, {
          other_images: file_paths
        });
      } // end of other images


      const updated_product = await Product.update(details, id);
      return res.send({
        state: true,
        product: updated_product
      });
    } // end

  } catch (err) {
    console.log(err, 'e');
    var msg = "failed to create product";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/products/product.controller.js":
/*!************************************************!*\
  !*** ./src/app/products/product.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const sharp = __webpack_require__(/*! sharp */ "sharp");

exports.getAll = getAll;
exports.search = search;
exports.find = find;
exports.findOne = findOne;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.findInArray = findInArray;
exports.resize_save = resize_save;
exports.copy_images = copy_images;

var Model = __webpack_require__(/*! ./product.model.js */ "./src/app/products/product.model.js");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).populate('category').populate('subcategory').sort({
    unit_price: -1
  }).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  return Model.find(query).populate('category').populate('subcategory').sort({
    unit_price: -1
  }).exec();
}

function findOne(query) {
  return Model.findOne(query).populate('subcategory').exec();
}

function findById(id) {
  return Model.findById(id).populate('category').populate('subcategory').exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function copy_images(data) {
  return new Promise(function (resolve, reject) {
    const name = `./images/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/products/product.model.js":
/*!*******************************************!*\
  !*** ./src/app/products/product.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

__webpack_require__(/*! mongoose-double */ "mongoose-double")(mongoose);

var Category = __webpack_require__(/*! ../categories/category.model.js */ "./src/app/categories/category.model.js");

var SubCategory = __webpack_require__(/*! ../sub_categories/category.model.js */ "./src/app/sub_categories/category.model.js");

var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
var ProductSchema = new Schema({
  refNo: String,
  name: String,
  url: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    default: null
  },
  section: String,
  category_url: String,
  subcategory_url: String,
  color: String,
  brand: String,
  image_path: String,
  features: [],
  productFeatures: String,
  editorStatus: {
    type: Boolean,
    default: false
  },
  name: String,
  category_tag: String,
  previous_price: {
    type: Number,
    default: 0
  },
  unit_price: {
    type: Number,
    default: 0
  },
  wholesale_price: {
    type: Number,
    default: 0
  },
  offer_item: String,
  offer_percentage: String,
  rec_qty: Number,
  desc: String,
  size: String,
  specifications: {
    type: String,
    default: ''
  },
  featured: {
    type: String,
    default: 'no'
  },
  offer: {
    type: String,
    default: 'no'
  },
  cover_image: String,
  other_images: [],
  status: {
    type: String,
    default: 'active'
  },
  stockStatus: {
    type: String,
    default: 'inStock'
  },
  date: Date
}, {
  collection: 'products'
});
module.exports = mongoose.model('Product', ProductSchema);

/***/ }),

/***/ "./src/app/seo/index.js":
/*!******************************!*\
  !*** ./src/app/seo/index.js ***!
  \******************************/
/*! exports provided: findAll, findByUrl, getMeta, createMeta, editMeta, removeMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByUrl", function() { return findByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMeta", function() { return createMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editMeta", function() { return editMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMeta", function() { return removeMeta; });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller.js */ "./src/app/controller.js");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/index */ "./src/helpers/index.js");


const Controller = Object(_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"])('seo'); // default meta

const globalMeta = {
  url: '',
  metaTitle: '',
  headerOne: '',
  headerTwo: '',
  pageDescription: '',
  metaDescription: '',
  pageContent: '',
  footerContent: '',
  carouselImages: [],
  image: '',
  keywords: []
};
async function findAll(req, res) {
  try {
    const metas = await Controller.find({});
    return res.send({
      metas,
      state: true
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}
async function findByUrl(req, res) {
  const url = req.params.id;

  try {
    const meta = await Controller.findOne({
      url
    });

    if (meta) {
      return res.send({
        meta
      });
    }

    return res.send({
      meta: globalMeta
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}
async function getMeta(url) {
  try {
    const meta = await Controller.find({
      url
    });

    if (meta) {
      return meta;
    } else {
      return globalMeta;
    }
  } catch (err) {
    return globalMeta;
  }
}
async function createMeta(req, res) {
  //  console.log('body', req.body);
  const _meta = JSON.parse(req.body.meta);

  const images = req.files;

  try {
    const meta = await Controller.create(_meta);

    if (images && images.banner) {
      //  measurement 1360 X 250
      Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["resize_save"])({
        file: images.banner,
        fileName: meta._id,
        width: 1360,
        height: 250
      }, 'uploads/banners');
    }

    const updated = await Controller.update({
      banner: `${meta._id}.webp`
    }, meta._id);
    return res.send({
      meta: updated,
      state: true
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}
async function editMeta(req, res) {
  const id = req.params.id;
  const images = req.files;

  const _meta = JSON.parse(req.body.meta);

  try {
    if (images && images.banner) {
      //  measurement 1360 X 250
      _meta.banner = `${id}.webp`;
      Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["resize_save"])({
        file: images.banner,
        fileName: id,
        width: 1360,
        height: 250
      }, 'uploads/banners');
    }

    const meta = await Controller.update(_meta, id);
    return res.send({
      meta,
      state: true
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}
async function removeMeta(req, res) {
  const id = req.params.id;

  try {
    const meta = await Controller.remove(id);
    return res.send({
      meta,
      state: true
    });
  } catch (err) {
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["handleErr"])(res, err);
  }
}

/***/ }),

/***/ "./src/app/seo/model.js":
/*!******************************!*\
  !*** ./src/app/seo/model.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var MetaSchema = new mongoose.Schema({
  metaTitle: {
    type: String
  },
  h1: {
    type: String
  },
  h2: {
    type: String
  },
  actionUrl: {
    type: String
  },
  highlight: {
    type: String
  },
  pageDescription: {
    type: String
  },
  metaDescription: {
    type: String
  },
  pageContent: {
    type: String
  },
  footerContent: {
    type: String
  },
  carouselImages: [],
  banner: {
    type: String,
    default: 'default.jpg'
  },
  image: {
    type: String
  },
  keywords: [],
  url: {
    type: String,
    unique: true,
    required: true
  }
});
module.exports = mongoose.model('Meta', MetaSchema);

/***/ }),

/***/ "./src/app/seo/seo.router.js":
/*!***********************************!*\
  !*** ./src/app/seo/seo.router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  findAll,
  findByUrl,
  removeMeta,
  createMeta,
  editMeta
} = __webpack_require__(/*! ./index.js */ "./src/app/seo/index.js");

const router = __webpack_require__(/*! express */ "express").Router();

router.route('/').get(findAll).post(createMeta);
router.route('/:id').put(editMeta).delete(removeMeta).get(findByUrl);
router.route('/edit/:id').put(editMeta);
module.exports = router;

/***/ }),

/***/ "./src/app/sizes/controller.js":
/*!*************************************!*\
  !*** ./src/app/sizes/controller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var Model = __webpack_require__(/*! ./model.js */ "./src/app/sizes/model.js");

exports.resize_save = resize_save;

const sharp = __webpack_require__(/*! sharp */ "sharp");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  return Model.find(query).sort({
    date: 'desc'
  }).exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/sizes/index.js":
/*!********************************!*\
  !*** ./src/app/sizes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAll = findAll;
exports.filterSizes = filterSizes;
exports.deleteRecord = deleteRecord;
exports.createData = createData;

var Controller = __webpack_require__(/*! ./controller */ "./src/app/sizes/controller.js");

function errorHandler(res, err) {
  return res.send({
    state: false,
    err: err
  });
}

async function findAll(req, res, next) {
  try {
    const sizes = await Controller.getAll();
    return res.send({
      state: true,
      sizes
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function filterSizes(req, res, next) {
  const query = {
    category: req.body.url
  };

  try {
    const sizes = await Controller.find(query);
    return res.send({
      state: true,
      sizes
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteRecord(req, res, next) {
  try {
    var deletedRecord = await Controller.remove(req.body._id);
    return res.send({
      state: true,
      deletedRecord
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function createData(req, res, next) {
  const data = req.body;
  const details = {
    size: data.size
  };

  try {
    var size = await Controller.create(details);
    return res.send({
      state: true,
      size
    });
  } catch (err) {
    var msg = "failed to create size";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/sizes/model.js":
/*!********************************!*\
  !*** ./src/app/sizes/model.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var ProductSizeSchema = new Schema({
  size: String
});
module.exports = mongoose.model('ProductSize', ProductSizeSchema);

/***/ }),

/***/ "./src/app/sub_categories/category.controller.js":
/*!*******************************************************!*\
  !*** ./src/app/sub_categories/category.controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var Model = __webpack_require__(/*! ./category.model.js */ "./src/app/sub_categories/category.model.js");

exports.resize_save = resize_save;

const sharp = __webpack_require__(/*! sharp */ "sharp");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).populate('category').exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return Model.find(query).populate('category').sort({
    date: 'desc'
  }).limit(num).exec();
}

function findOne(query) {
  return Model.findOne(query).populate('category').exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/sub_categories/category.model.js":
/*!**************************************************!*\
  !*** ./src/app/sub_categories/category.model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Category = __webpack_require__(/*! ../categories/category.model.js */ "./src/app/categories/category.model.js");

var Schema = mongoose.Schema;
var SubCategorySchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  name: String,
  url: String,
  image_path: String,
  status: {
    type: String,
    default: 'active'
  },
  featured: {
    type: String,
    default: 'no'
  }
}, {
  collection: 'sub_categories'
});
module.exports = mongoose.model('SubCategory', SubCategorySchema);

/***/ }),

/***/ "./src/app/sub_categories/index.js":
/*!*****************************************!*\
  !*** ./src/app/sub_categories/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var SubCategory = __webpack_require__(/*! ./category.controller.js */ "./src/app/sub_categories/category.controller.js");

var Category = __webpack_require__(/*! ../categories/category.controller.js */ "./src/app/categories/category.controller.js");

function errorHandler(res, err) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return res.send({
    state: false,
    err: err
  });
}

async function featured(req, res, next) {
  const _id = req.body._id;
  var details = {
    featured: req.body.featured
  };

  try {
    const category = await SubCategory.update(details, _id);
    return res.send({
      state: true,
      category
    });
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
    return res.send({
      state: true
    });
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
    return res.send({
      state: true
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function subCategories(req, res, next) {
  try {
    const selectedCategory = await Category.findById(req.body.id);
    const subCategories = await SubCategory.find({
      category: req.body.id
    });
    return res.send({
      subCategories,
      selectedCategory
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function delete_category(req, res, next) {
  try {
    var deleted_sub_category = await SubCategory.remove(req.body._id);
    return res.send({
      deleted_sub_category
    });
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
      const file_data = {
        file: image_file,
        fileName: file_name,
        width: 680,
        height: 680,
        location: 'sub_categories'
      };

      (async () => {
        const record = await SubCategory.resize_save(file_data);
      })();

      const u_record = {
        name: req.body.name,
        url: req.body.url,
        image_path: filepath
      };
      const u_sub_category = await SubCategory.update(u_record, _id);
      return res.send({
        u_sub_category
      });
    } else {
      const u_record = {
        name: req.body.name,
        url: req.body.url
      };
      const u_sub_category = await SubCategory.update(u_record, _id);
      return res.send({
        u_sub_category
      });
    } // update the database 

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
    const file_data = {
      file: image_file,
      fileName: file_name,
      width: 680,
      height: 680,
      location: 'sub_categories'
    };

    (async () => {
      const record = await Category.resize_save(file_data);
    })();
  } //  const info = { category }


  const details = {
    category: category._id,
    name: subcategory.name,
    url: subcategory.url,
    image_path: filepath
  };

  try {
    var new_category = await SubCategory.create(details);
    return res.send({
      state: true,
      ca: new_category
    });
  } catch (err) {
    var msg = "failed to create category";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/sub_header/index.js":
/*!*************************************!*\
  !*** ./src/app/sub_header/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findData = findData;
exports.createRecord = createRecord;
exports.updateRecord = updateRecord;

var SubHeader = __webpack_require__(/*! ./subheader.controller.js */ "./src/app/sub_header/subheader.controller.js");

function errorHandler(res, err) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return res.send({
    state: false,
    err: err
  });
}

async function findData(req, res, next) {
  try {
    var records = await SubHeader.getAll();
    return res.send({
      records: records
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function updateRecord(req, res, next) {
  const _id = req.body._id;
  const u_record = {
    sec_one: req.body.sec_one,
    sec_two: req.body.sec_two,
    sec_three: req.body.sec_three
  }; // update the database 

  try {
    const u_sub_header = await SubHeader.update(u_record, _id);
    return res.send({
      u_sub_header: u_sub_header
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function createRecord(req, res, next) {
  console.log(req.body, 'bd');
  var details = {
    sec_one: req.body.sec_one,
    sec_two: req.body.sec_two,
    sec_three: req.body.sec_three
  };

  try {
    var new_record = await SubHeader.create(details);
    return res.send({
      state: true,
      new_record: new_record
    });
  } catch (err) {
    var msg = "failed to create record";
    return errorHandler(res, err, msg);
  }
}

/***/ }),

/***/ "./src/app/sub_header/subheader.controller.js":
/*!****************************************************!*\
  !*** ./src/app/sub_header/subheader.controller.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var Model = __webpack_require__(/*! ./subheader.model.js */ "./src/app/sub_header/subheader.model.js");
/********************************************
******************** database calls **********/


function getAll() {
  return Model.find({}).exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).exec();
}

function find(query) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return Model.find(query).sort({
    date: 'desc'
  }).limit(num).exec();
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
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function findInArray(field, item) {
  /* find a record with $item in $field array */
  return Model.find({
    field: {
      "$in": [item]
    }
  }).exec();
}

/***/ }),

/***/ "./src/app/sub_header/subheader.model.js":
/*!***********************************************!*\
  !*** ./src/app/sub_header/subheader.model.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Schema = mongoose.Schema;
var SubHeaderSchema = new Schema({
  sec_one: String,
  sec_two: String,
  sec_three: String,
  status: {
    type: String,
    default: 'active'
  }
}, {
  collection: 'sub_header'
});
module.exports = mongoose.model('SubHeader', SubHeaderSchema);

/***/ }),

/***/ "./src/app/users/controller.js":
/*!*************************************!*\
  !*** ./src/app/users/controller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Model = __webpack_require__(/*! ./user.model.js */ "./src/app/users/user.model.js");

const sharp = __webpack_require__(/*! sharp */ "sharp");
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
  return Model.find({}).populate('shop').exec();
}

function search(query) {
  return Model.find({
    'name': new RegExp(query, 'i')
  }).limit(5).exec();
}

function find(query, num) {
  return Model.find(query).sort({
    date: 'desc'
  }).limit(num).exec();
}

function findOne(query) {
  return Model.findOne(query).populate('shop').exec();
}

function getById(id) {
  return Model.findById(id).exec();
}

function createRecord(_record) {
  let newRecord = new Model(_record);
  return new Promise((resolve, reject) => {
    newRecord.save(function (err, record) {
      if (err) {
        reject(err);
      }

      resolve(record);
    });
  });
}

function update(record, id) {
  var query = {
    _id: id
  };
  var update = record;
  var options = {
    new: true
  };
  return Model.findOneAndUpdate(query, update, options).exec();
}

function remove(id) {
  return Model.findByIdAndRemove(id).exec();
}

function resize_save(data) {
  return new Promise(function (resolve, reject) {
    const name = `./public/${data.location}/${data.fileName}`;
    return sharp(data.file.data).rotate().resize(data.width, data.height).jpeg().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/app/users/index.js":
/*!********************************!*\
  !*** ./src/app/users/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bCrypt = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const config = __webpack_require__(/*! ../../../config/index.js */ "./config/index.js");

const User = __webpack_require__(/*! ./controller.js */ "./src/app/users/controller.js");

const {
  decode
} = __webpack_require__(/*! punycode */ "punycode");

const {
  randomString
} = __webpack_require__(/*! ../../helpers/common */ "./src/helpers/common.js");

const {
  SendEmail
} = __webpack_require__(/*! ../../helpers/sendmail.js */ "./src/helpers/sendmail.js");

exports.findAll = findAll;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.changePassword = changePassword;
exports.register = register;
exports.isLogedIn = isLogedIn;
exports.login = login;
exports.createUser = createUser;
exports.wholesalers = wholesalers;
exports.otherClients = otherClients;
exports.approveWholesaler = approveWholesaler;
exports.updateWholesaler = updateWholesaler;
exports.deleteWholesaler = deleteWholesaler;

function catchError(res, err) {
  console.log(err);
  return res.send({
    state: false,
    err
  });
}

function errorHandler(res, err) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  console.log(err);
  return res.send({
    state: false,
    err: err
  });
}

var isValidPassword = function (user, password) {
  return bCrypt.compareSync(password, user.password);
};

var createHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

async function changePassword(req, res, next) {
  const password = createHash(req.body.pass);
  const details = {
    password: password
  };

  try {
    var user = await User.update(details, req.body._id);
    return res.send({
      state: true
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function updateWholesaler(req, res, next) {
  const _id = req.body._id;
  const details = req.body;

  try {
    const u_record = await User.update(details, _id);
    return res.send({
      u_record: u_record
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function approveWholesaler(req, res, next) {
  const user = req.body;
  const details = {
    wholesaler_status: true
  };

  try {
    var updated_user = await User.update(details, user._id);
    return res.send({
      updated_user
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteWholesaler(req, res, next) {
  const data = req.body;

  try {
    var user = await User.remove(data._id);
    return res.send({
      user
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function wholesalers(req, res, next) {
  const query = {
    wholesaler_req: 'yes'
  };

  try {
    var users = await User.find(query);
    return res.send({
      users: users
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function otherClients(req, res, next) {
  const query = {
    wholesaler_req: 'no'
  };

  try {
    var users = await User.find(query);
    return res.send({
      users: users
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function findAll(req, res, next) {
  const query = {
    client_type: 'admin'
  };

  try {
    var users = await User.find(query);
    return res.send({
      users: users
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function createUser(user) {
  try {
    const exits = await User.findOne({
      phone: user.phone
    });

    const _emailCheck = await User.findOne({
      email: user.email
    });

    if (_emailCheck) {
      return {
        msg: 'Email already used',
        state: false,
        err: 'Email taken'
      };
    }

    if (exits) {
      return {
        msg: 'Phone already used',
        state: false,
        err: 'Phone number taken'
      };
    }

    const pass = user.password;
    user.password = createHash(user.password);

    const _user = await User.createRecord(user);

    return {
      state: true,
      err: null,
      user: _user,
      msg: 'success'
    };
  } catch (err) {
    console.log(err);
    return {
      state: false,
      err,
      msg: `Server error`
    };
  }
}

async function register(req, res, next) {
  const userData = req.body;
  const pass = userData.password;
  userData.password = 1234;

  try {
    const {
      user,
      err,
      state,
      msg
    } = await createUser(userData);

    if (state) {
      const {
        data,
        token
      } = await rawLogin(user);
      return res.send({
        state: true,
        token,
        user: data,
        msg: 'Success'
      });
    }

    console.log(err, 's');
    return res.send({
      msg,
      state: false
    });
  } catch (err) {
    return catchError(res, err);
  }
}

async function updateUser(req, res, next) {
  const _id = req.body._id;
  var details = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    role: req.body.role,
    password: createHash(req.body.password)
  };

  try {
    const u_record = await User.update(details, _id);
    return res.send({
      u_record: u_record
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

async function deleteUser(req, res, next) {
  const _id = req.body._id;

  try {
    const user = await User.remove(_id);
    return res.send({
      state: true
    });
  } catch (err) {
    return errorHandler(res, err);
  }
}

function isLogedIn(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token']; // console.log(token,'token')
  // decode token

  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.send({
          state: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.user = decoded; //
        // console.log('pass', decoded)   

        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      state: false,
      message: 'No token provided.'
    });
  }
}

async function login(req, res) {
  const userData = req.body;
  const {
    email,
    password
  } = req.body;
  let reqUser = {}; // find the user

  try {
    const user = await User.findOne({
      email: email
    });

    if (!user) {
      //user not found
      return res.send({
        state: false,
        msg: 'Authentication failed. User not found.'
      });
    } else {
      // check if password matches
      if (!isValidPassword(user, password)) {
        // password not valid
        return res.send({
          state: false,
          msg: 'Invalid Credentials. ***'
        });
      } else {
        console.log(user._id, 'm role');
        const data = {
          fullName: user.fullNname,
          _id: user._id,
          approved: user.approved,
          email: user.email,
          role: user.role
        };
        console.log(data, 'auth user');
        const token = jwt.sign(data, config.secret);
        console.log('dgshgf'); // return the information including token as JSON

        return res.send({
          state: true,
          msg: 'success',
          token: token,
          user: data
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.send({
      state: false,
      err: err
    });
  }
}

;

async function rawLogin(user) {
  try {
    const data = {
      fullName: user.fullNname,
      _id: user._id,
      approved: user.approved,
      email: user.email,
      role: user.role
    };
    const token = jwt.sign(data, config.secret);
    return {
      token,
      data
    };
  } catch (err) {
    throw err;
  }
}

;

/***/ }),

/***/ "./src/app/users/user.model.js":
/*!*************************************!*\
  !*** ./src/app/users/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var ObjectId = mongoose.Schema.ObjectId;
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String
  },
  password: {
    type: String,
    required: true,
    default: "secret",
    trim: true
  },
  username: {
    type: String
  },
  shopName: String,
  ownerName: String,
  manager: String,
  opposite: String,
  placeNear: String,
  kraPin: String,
  bankAccount: String,
  location: {
    type: String
  },
  street: {
    type: String
  },
  house: {
    type: String
  },
  landmark: {
    type: String
  },
  other_details: {
    type: String
  },
  otp: {
    type: String
  },
  rawPhone: {
    type: String
  },
  approved: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  ban: {
    type: Boolean,
    default: false
  },
  wholesaler_status: {
    type: Boolean,
    default: false
  },
  wholesaler_req: {
    type: String
  },
  client_type: {
    type: String
  },
  idOne: String,
  idTwo: String,
  shopImages: [],
  recoveryData: {
    type: String
  },
  temporaryPassword: {
    date: Date,
    value: String
  },
  recovery: {
    confirmed: {
      type: Boolean,
      default: false
    },
    when: {
      type: Date
    }
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  listings: [{
    type: ObjectId,
    ref: 'Business'
  }]
});
module.exports = mongoose.model('User', UserSchema);

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/*! exports provided: handleErr, distanceCalculator, generateOTP, sendSms, randomString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErr", function() { return handleErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceCalculator", function() { return distanceCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOTP", function() { return generateOTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSms", function() { return sendSms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomString", function() { return randomString; });
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");

function handleErr(res, err, msg) {
  console.log(err);
  return res.send({
    state: false,
    err,
    msg
  });
}
function distanceCalculator() {}
function generateOTP() {
  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}
function sendSms(data) {
  const headers = {
    'Content-Type': 'application/json',
    'ApiKey': 'f8f48fe90952455ab0a653fbf96d82eb'
  };
  return fetch('http://api.sematime.com/v1/1559206271538/messages', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => response.json()).catch(error => console.error('Error:', error)).then(response => console.log('Success:', JSON.stringify(response)));
}
function randomString(length) {
  const digits = '0123456789';
  let pass = '';

  for (let i = 0; i < 5; i++) {
    pass += digits[Math.floor(Math.random() * 10)];
  }

  return pass;
}

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: handleErr, resize_save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErr", function() { return handleErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize_save", function() { return resize_save; });
const handleErr = function (res, err, msg = 'Server error: Failed') {
  return res.send({
    err,
    state: false,
    msg
  });
};
function resize_save(data = {
  file: null,
  fileName: '',
  width: 530,
  height: 600
}, location = 'uploads') {
  return new Promise(function (resolve, reject) {
    //  console.log(data, 'is image data');
    const name = `./public/${location}/${data.fileName}.webp`; //console.log(data.file);

    return sharp(data.file.data).rotate().resize(data.width, data.height).webp().toFile(name).then(function (info) {
      return resolve(info);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

/***/ }),

/***/ "./src/helpers/sendmail.js":
/*!*********************************!*\
  !*** ./src/helpers/sendmail.js ***!
  \*********************************/
/*! exports provided: SendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmail", function() { return SendEmail; });
const ejs = __webpack_require__(/*! ejs */ "ejs");

const path = __webpack_require__(/*! path */ "path");

const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer"); //  const senderEmail = 'info@apnest.net';


const emailUser = 'info@softcloudtech.co.ke';
const emailPass = 'petero7346@newt';
function SendEmail(data) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    // use SSL
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  console.log(data, 'd');
  const mainOptions = {
    from: `"${data.title}" ${emailUser}`,
    to: data.recipient,
    subject: data.subject,
    text: data.content
  }; //  console.log('html data ======================>', mainOptions.html)

  transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
;

/***/ }),

/***/ "./src/routes/api/banners.js":
/*!***********************************!*\
  !*** ./src/routes/api/banners.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/banners/index.js */ "./src/app/banners/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();
router.post('/banner/main/insert', _index.createMainBanner);
router.post('/banner/insert', _index.create_banner);
router.post('/banner/update', _index.update_banner);
router.post('/main/banner/update', _index.updateMainBanner);
router.post('/banner/delete', _index.deleteBanner);
router.get('/banner/slider', _index.slider_banners);
router.get('/banner/side/one', _index.banner_one);
router.get('/banner/side/two', _index.banner_two);
router.get('/banner/main/sec', _index.main_sec_banner);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/brands.js":
/*!**********************************!*\
  !*** ./src/routes/api/brands.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/brands/index.js */ "./src/app/brands/index.js");

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();
router.post('/brand/create', _index.createData);
router.post('/brand/delete', _index.deleteRecord);
router.get('/brands', _index.findAll);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/categories.js":
/*!**************************************!*\
  !*** ./src/routes/api/categories.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/categories/index.js */ "./src/app/categories/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();

var multer = __webpack_require__(/*! multer */ "multer");

var upload = multer();
router.get('/categories', _index.findAll);
router.get('/categories/:section', _index.findCategories);
router.post('/selected/category', _index.selected_category);
router.post('/category/insert', _index.create_category);
router.post('/category/edit', _index.updateCategory);
router.post('/category/delete', _index.delete_category); // router.post('/category/find', _index.findById);

router.post('/category/deactivate', _index.deactivate);
router.post('/category/activate', _index.activate);
router.post('/category/featured', _index.featured);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/colors.js":
/*!**********************************!*\
  !*** ./src/routes/api/colors.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/colors/index.js */ "./src/app/colors/index.js");

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();
router.post('/color/create', _index.createData);
router.post('/color/delete', _index.deleteRecord);
router.get('/colors', _index.findAll);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/homepage.js":
/*!************************************!*\
  !*** ./src/routes/api/homepage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _subHeaderIndex = __webpack_require__(/*! ../../app/sub_header/index.js */ "./src/app/sub_header/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();

var multer = __webpack_require__(/*! multer */ "multer");

var upload = multer(); // sub header

router.get('/sub/header/records', _subHeaderIndex.findData);
router.post('/sub/header/insert', _subHeaderIndex.createRecord);
router.post('/sub/header/edit', _subHeaderIndex.updateRecord); // side section banners

module.exports = router;

/***/ }),

/***/ "./src/routes/api/index.js":
/*!*********************************!*\
  !*** ./src/routes/api/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const SEORoutes = __webpack_require__(/*! ../../app/seo/seo.router.js */ "./src/app/seo/seo.router.js");

const AppDataRoutes = __webpack_require__(/*! ../../app/data/router.js */ "./src/app/data/router.js");

module.exports = function (app) {
  app.use('/api', __webpack_require__(/*! ./categories */ "./src/routes/api/categories.js"));
  app.use('/api', __webpack_require__(/*! ./sub_category */ "./src/routes/api/sub_category.js"));
  app.use('/api', __webpack_require__(/*! ./products */ "./src/routes/api/products.js"));
  app.use('/api', __webpack_require__(/*! ./banners */ "./src/routes/api/banners.js"));
  app.use('/api', __webpack_require__(/*! ./homepage */ "./src/routes/api/homepage.js"));
  app.use('/api', __webpack_require__(/*! ./user */ "./src/routes/api/user.js"));
  app.use('/api', __webpack_require__(/*! ./sizes */ "./src/routes/api/sizes.js"));
  app.use('/api', __webpack_require__(/*! ./brands */ "./src/routes/api/brands.js"));
  app.use('/api', __webpack_require__(/*! ./colors */ "./src/routes/api/colors.js"));
  app.use('/api', __webpack_require__(/*! ./orders */ "./src/routes/api/orders.js"));
  app.use('/api/admin/seo', SEORoutes);
  app.use('/api/admin/data', AppDataRoutes);
};

/***/ }),

/***/ "./src/routes/api/orders.js":
/*!**********************************!*\
  !*** ./src/routes/api/orders.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/order/index.js */ "./src/app/order/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();
router.get('/orders', _index.findAll);
router.get('/orders/pending', _index.pendingOrders);
router.get('/orders/delivered', _index.deliveredOrders);
router.post('/orders/mark/delivered', _index.markDelivered);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/products.js":
/*!************************************!*\
  !*** ./src/routes/api/products.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/products/index.js */ "./src/app/products/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();
router.get('/products', _index.findAll);
router.get('/products/category/:id', _index.categoryProducts);
router.get('/products/sub/category/:id', _index.subCategoryProducts);
router.get('/offer/products', _index.offerProducts);
router.get('/featured/products', _index.featuredProducts);
router.post('/selected/product', _index.selected_product);
router.post('/products/update/images', _index.update_images);
router.post('/products/edit/offer', _index.edit_offer);
router.post('/products/edit/featured', _index.edit_featured);
router.post('/product/insert', _index.create_product);
router.post('/product/edit', _index.updateProduct);
router.post('/products/delete', _index.deleteProduct);
router.post('/product/edit/feature', _index.updateFeature);
router.post('/product/save/feature', _index.saveFeature);
router.post('/product/qty/edit', _index.updateQty);
router.post('/product/update/main/:id', _index.updateMainImage);
router.post('/products/out/of/stock', _index.outOfStock);
router.post('/products/in/stock', _index.inStock);
router.post('/products/delete/feature', _index.deleteFeature);
router.post('/products/deactivate', _index.deactivate);
router.post('/products/activate', _index.activate);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/sizes.js":
/*!*********************************!*\
  !*** ./src/routes/api/sizes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/sizes/index.js */ "./src/app/sizes/index.js");

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();
router.post('/size/create', _index.createData);
router.post('/size/filter', _index.filterSizes);
router.post('/size/delete', _index.deleteRecord);
router.get('/sizes', _index.findAll);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/sub_category.js":
/*!****************************************!*\
  !*** ./src/routes/api/sub_category.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/sub_categories/index.js */ "./src/app/sub_categories/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();

var multer = __webpack_require__(/*! multer */ "multer");

var upload = multer();
router.post('/get/subcategories', _index.subCategories);
router.post('/sub/category/edit', _index.updateCategory);
router.post('/save/sub/category', _index.create_sub_category);
router.post('/sub/category/delete', _index.delete_category);
router.post('/sub/category/deactivate', _index.deactivate);
router.post('/sub/category/activate', _index.activate);
router.post('/sub/category/featured', _index.featured);
module.exports = router;

/***/ }),

/***/ "./src/routes/api/user.js":
/*!********************************!*\
  !*** ./src/routes/api/user.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../../app/users/index.js */ "./src/app/users/index.js");

var express = __webpack_require__(/*! express */ "express");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var router = express.Router();

const passport = __webpack_require__(/*! passport */ "passport");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

router.get('/users', _index.findAll);
router.get('/users/wholesalers', _index.wholesalers);
router.get('/users/other/clients', _index.otherClients);
router.post('/user/insert', _index.register);
router.post('/users/approve/wholesaler', _index.approveWholesaler);
router.post('/users/update/wholesaler', _index.updateWholesaler);
router.post('/users/delete/wholesaler', _index.deleteWholesaler);
router.post('/user/edit', _index.updateUser);
router.post('/user/delete', _index.deleteUser);
router.post('/user/change/password', _index.changePassword);
router.post('/do/login', _index.login);
module.exports = router;

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./server.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server.js */"./server.js");


/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-double":
/*!**********************************!*\
  !*** external "mongoose-double" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-double");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("punycode");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ })

/******/ });
//# sourceMappingURL=main.map