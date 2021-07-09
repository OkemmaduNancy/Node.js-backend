const Joi = require('joi');

const userValidator = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    date_of_birth: Joi.number().required(),
    password: Joi.string()
        .min(6)
        .max(10)
        .required(),
    upload_photo: Joi.string().required(),
    marita_status: Joi.string(),
    country: Joi.string().required(),
    job: Joi.string().required(),
    gender: Joi.string().valid("Male", "Female").required()
})

exports.userValidator = userValidator
