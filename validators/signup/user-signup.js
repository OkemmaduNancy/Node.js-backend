const Joi = require('joi');

const userValidator = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    date_of_birth: Joi.date().required(),
    password: Joi.string()
        .min(6)
        .max(10)
        .required().required(),
    upload_photo: Joi.string(),
    marita_status: Joi.string(),
    country: Joi.string(),
    job: Joi.string(),
    gender: Joi.string()
})

exports.userValidator = userValidator
