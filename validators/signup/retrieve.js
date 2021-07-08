const Joi = require('joi');

const retrieveValidator = Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastname: Joi.number().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    date_of_birth: Joi.string().required(),
    password: Joi.string().required(),
    upload_photo: Joi.string().required(),
    marita_status: Joi.string(),
    country: Joi.string().required(),
    job: Joi.string().required(),
    gender: Joi.string().required()
})

exports.retrieveValidator = retrieveValidator
