var bCrypt = require('bcrypt-nodejs');
const jwt = require("jsonwebtoken");
const config = require('../../../config/index.js')

const User = require('./controller.js');
const { decode } = require('punycode');
const { randomString } = require('../../helpers/common');
const { SendEmail } = require('../../helpers/sendmail.js');

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
	return res.send({ state: false, err })
}


function errorHandler(res, err) {
	var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	console.log(err);
	return res.send({ state: false, err: err });
}

var isValidPassword = function (user, password) {
	return bCrypt.compareSync(password, user.password);
};

var createHash = function (password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

async function changePassword(req, res, next) {
	const password = createHash(req.body.pass);
	const details = { password: password };
	try {
		var user = await User.update(details, req.body._id);
		return res.send({ state: true });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateWholesaler(req, res, next) {
	const _id = req.body._id;
	const details = req.body;
		
	try {
		const u_record = await User.update(details, _id);
		return res.send({ u_record: u_record });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function approveWholesaler(req, res, next) {
	const user = req.body;
	const details = {
		wholesaler_status: true
	}

	try {
		var updated_user = await User.update(details, user._id);
		return res.send({ updated_user });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function deleteWholesaler(req, res, next) {
	const data = req.body;

	try {
		var user = await User.remove(data._id);
		return res.send({ user });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function wholesalers(req, res, next) {
	const query = {
		wholesaler_req: 'yes'
	}

	try {
		var users = await User.find(query);
		return res.send({ users: users });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function otherClients(req, res, next) {
	const query = {
		wholesaler_req: 'no'
	}

	try {
		var users = await User.find(query);
		return res.send({ users: users });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findAll(req, res, next) {
	const query = {
		client_type: 'admin'
	}
	try {
		var users = await User.find(query);
		return res.send({ users: users });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function createUser(user) {

	try {
		const exits = await User.findOne({ phone: user.phone });
		const _emailCheck = await User.findOne({ email: user.email });
		if (_emailCheck) {
			return { msg: 'Email already used', state: false, err: 'Email taken' };
		}
		if (exits) {
			return { msg: 'Phone already used', state: false, err: 'Phone number taken' };
		}

		const pass = user.password;
		user.password = createHash(user.password);
		const _user = await User.createRecord(user);
		return { state: true, err: null, user: _user, msg: 'success' };
	} catch (err) {
		console.log(err);
		return { state: false, err, msg: `Server error` };
	}

}

async function register(req, res, next) {
	const userData = req.body;
	const pass = userData.password;
	userData.password = 1234;

	try {
		const { user, err, state, msg } = await createUser(userData);
		if (state) {
			const { data, token } = await rawLogin(user);
			return res.send({ state: true, token, user: data, msg: 'Success' });
		}
		console.log(err, 's');
		return res.send({ msg, state: false });
	}
	catch (err) {
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
		return res.send({ u_record: u_record });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function deleteUser(req, res, next) {
	const _id = req.body._id;

	try {
		const user = await User.remove(_id);
		return res.send({ state: true });
	} catch (err) {
		return errorHandler(res, err);
	}
}


function isLogedIn(req, res, next) {
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	// console.log(token,'token')

	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res.send({ state: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes
				req.user = decoded;

				//
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
	const { email, password } = req.body;
	let reqUser = {};
	// find the user

	try {
		const user = await User.findOne({ email: email })

		if (!user) {
			//user not found
			return res.send({ state: false, msg: 'Authentication failed. User not found.' });
		} else {
			// check if password matches
			if (!isValidPassword(user, password)) {
				// password not valid
				return res.send({ state: false, msg: 'Invalid Credentials. ***' });
			} else {
				console.log(user._id, 'm role')
				const data = {
					fullName: user.fullNname,
					_id: user._id,
					approved: user.approved,
					email: user.email,
					role: user.role
				}

				console.log(data, 'auth user')

				const token = jwt.sign(data, config.secret);
				console.log('dgshgf');
				// return the information including token as JSON
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
		return res.send({ state: false, err: err })
	}
};


async function rawLogin(user) {
	try {
		const data = {
			fullName: user.fullNname,
			_id: user._id,
			approved: user.approved,
			email: user.email,
			role: user.role
		}
		const token = jwt.sign(data, config.secret);
		return { token, data };
	} catch (err) {
		throw (err);
	}
};