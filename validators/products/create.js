const Joi = require('joi');

const createValidator = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    // .message("You must provide a name without num"),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    color: Joi.string().valid("red", "white", "blue", "orange", "black", "yellow", "green").required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required(),
    categories: Joi.string().valid("accesories", "building", "outfits").required()
})

exports.createValidator = createValidator
