const Joi = require('joi');

const loginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string()
        .min(6)
        .max(10)
        .required(),
})

exports.loginValidator = loginValidator
