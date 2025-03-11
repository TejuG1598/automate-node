const Joi = require("joi");


const orderSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    createdDate: Joi.string().required(),
    status: Joi.string().required(),
    carModel: Joi.string().required(),
    section: Joi.string().required(),
    serviceId: Joi.number().required(),
    complete: Joi.boolean().required(),
    "payment": {
        id: Joi.number(),
        name: Joi.string().required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
        card: Joi.string().required(),
        cvv: Joi.number().min(100).max(999).required(),
        expiry: Joi.string().required()
    }
})

module.exports = orderSchema;