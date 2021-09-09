const { loginValidator } = require("../../validators/login");
const User = require("../models/user.model.js");

//create a Login
exports.Login = (req, res) => {
    const e = req.headers.email
    const { error, value } = loginValidator.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    user = new User(value);
    // Save Login in database
    user.save()
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message,
            });
        });
};

//Retrieve and return all login from database.
exports.findAllLogin = (req, res) => {
    User.find()
        .then((login) => {
            res.send(login);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};
//Find login with email
exports.findOneLogin = (req, res) => {
    User.findOne({ email: req.params.email })
        .then((email) => {
            res.send(email);
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error getting email"
            })
        })

};

// Delete a login with the specified id in the request
exports.findAndDeleteUserByEmail = (req, res) => {
    const user = { email: req.body.email };
    User.deleteOne(user)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error getting email"
            })
        })
};