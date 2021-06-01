const Joi = require('joi');

const retrieveValidator = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    // .message("You must provide a name without num"),
    quantity: Joi.number(),
    email: Joi.string().email(),
    price: Joi.number(),
    color: Joi.string().valid("red", "white", "blue", "orange", "black", "yellow", "green"),
    description: Joi.string(),
    imageUrl: Joi.string(),
    categories: Joi.string().valid("accesories", "building", "outfits"),
})

exports.retrieveValidator = retrieveValidator
