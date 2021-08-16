const { userValidator } = require("../../validators/signup");
const User = require("../models/user.model.js");

//create a Signup
exports.createSignup = (req, res) => {
    const { error, value } = userValidator.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    signup = new User(value);

    // Save Signup in database
    signup.save()
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "error occured while creating the product.",
            });
        });
};

//Retrieve and return all signup from database.
exports.findAllSignup = (req, res) => {
    User.find()
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "error occured while gettin products.",
            });
        });
};

//Find a single signup with id
exports.findOneSignup = (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "not found with id" + req.params.id,
                });
            }
            res.send(user)
        })
        .catch((err) => {
            if (err.kind === "Objectid") {
                return res.status(404).send({
                    message: "not found with id" + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Error finding with id" + req.params.id,
            });
        });
};

// Find signup and update it with the request body
exports.updateSignup = (req, res) => {
    User.findByIdAndUpdate(req.params.id,
        {
            names: {
                firstname: req.body.firstname,
                lastname: req.body.lastname
            },
            age: req.body.age,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            upload_photo: req.body.upload_photo,
            gender: req.body.gender,
            marita_status: req.body.marita_status,
            country: req.body.country,
            job: req.body.job
        },
        { new: true }
    )
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "error finding with id " + req.params.id,
                });
            }
            res.send(signup);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: " not found with id " + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Error updating with id " + req.params.id,
            });
        });
};

// Delete a signup with the specified id in the request
exports.deleteSignup = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: " not found with id " + req.params.id,
                });
            }
            res.send({ message: " deleted successfully!" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: " not found with id " + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Could not delete with id " + req.params.id,
            });
        });
};