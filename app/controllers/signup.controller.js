const { updateValidator, createValidator, retrieveValidator } = require("../../validators/signup");
const Signup = require("../models/signup.model.js");

//create a Product
exports.createSignup = (req, res) => {
    const { error, value } = createValidator.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    signup = new Signup(value);

    // Save Product in database
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

//Retrieve and return all product from database.
exports.findAllSignup = (req, res) => {
    Signup.find()
        .then((signup) => {
            res.send(signup);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "error occured while gettin products.",
            });
        });
};

//Find a single products with id
exports.findOneSignup = (req, res) => {
    if (error) {
        return res.status(400).send(error.details)
    }
    Signup.findById(req.params.id)
        .then((signup) => {
            if (!signup) {
                return res.status(404).send({
                    message: "not found with id" + req.params.id,
                });
            }
            res.send(signup)
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

// Updated a product identified by the id in the request
exports.updateSignup = (req, res) => {
    if (error) {
        return res.status(400).send(error.details)
    }
    if (!req.body.name) {
        return res.status(400).send({
            message: "names can not be empty",
        });
    }
    // Find product and update it with the request body
    Signup.findByIdAndUpdate(req.params.id,
        {
            firstname: req.body.name,
            lastname: req.body.quantity,
            age: req.body.color,
            email: req.body.price,
            date_of_birth: req.body.categories,
            upload_photo: req.body.imageUrl,
            gender: req.body.cart,
            marita_status: req.body.description,
            country: req.body.description,
            job: req.body.description
        },
        { new: true }
    )
        .then((signup) => {
            if (!signup) {
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

// Delete a product with the specified id in the request
exports.deleteSignup = (req, res) => {
    Signup.findByIdAndRemove(req.params.id)
        .then((signup) => {
            if (!signup) {
                return res.status(404).send({
                    message: " not found with id " + req.params.id,
                });
            }
            res.send({ message: " deleted successfully!" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: " not found with id " + req.params.user,
                });
            }
            return res.status(500).send({
                message: "Could not delete with id " + req.params.id,
            });
        });
};