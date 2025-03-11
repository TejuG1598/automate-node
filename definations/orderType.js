const Ipayment = require('./paymentType');

const IOrder = {
    id: Number,
    name: String,
    description: String,
    createdDate: String,
    status: String,
    carModel: String,
    section: String,
    serviceId: Number,
    complete: Boolean,
    payment: Ipayment
}

module.exports = IOrder;