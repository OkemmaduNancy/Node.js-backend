const Joi = require('joi');

const createValidator = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    color: Joi.string().valid("red", "white", "blue", "orange", "black", "yellow", "green").required(),
    description: Joi.string().required(),
    imageUrl: Joi.string(),
    cart: Joi.string(),
    categories: Joi.string().valid("Accessories", "Building", "Outfits").required()
})

exports.createValidator = createValidator
