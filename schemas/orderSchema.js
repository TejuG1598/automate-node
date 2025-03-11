const IOrder = require('../definations/orderType');
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(IOrder);

module.exports = mongoose.model('orders', OrderSchema);