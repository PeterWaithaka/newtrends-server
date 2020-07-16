exports.findAll = findAll;
exports.pendingOrders = pendingOrders;
exports.deliveredOrders = deliveredOrders;
exports.markDelivered = markDelivered;


var Controller = require("./order.controller.js");
function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}

async function markDelivered(req, res, next) {
	const order = req.body;
	const details = {
		orderStatus: 'delivered'
	}

	try {
		var updated_order = await Controller.update(details, order._id);
		return res.send({ updated_order });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findAll(req, res, next) {
	try {
		var orders = await Controller.getAll();
		return res.send({ orders: orders });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function pendingOrders(req, res, next) {
  const query = {orderStatus: 'pending'}

	try {
		var orders = await Controller.find(query);
		return res.send({ orders });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function deliveredOrders(req, res, next) {
  const query = {orderStatus: 'delivered'}

	try {
		var orders = await Controller.find(query);
		return res.send({ orders });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function order (req, res, next) {
    const data = req.body
    try {
      const order = await Controller.create(data)
      return res.send({ state: true, order })
    } catch (err) {
      console.log(err)
      return res.send({ state: false })
    }
  }

  exports.order = order