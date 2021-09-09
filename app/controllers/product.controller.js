const { updateValidator, createValidator, retrieveValidator } = require("../../validators/products");
const User = require("../models/user.model.js");

//create a Product
exports.createProduct = (req, res) => {
    const { error, value } = createValidator.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    product = new User(value);

    // Save Product in database
    product.save()
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
exports.findAllProducts = (req, res) => {
    User.find()
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "error occured while getting products.",
            });
        });
};

//Find a single products with id
exports.findOneProduct = (req, res) => {
    const { error, value } = retrieveValidator.validate(req.body)

    if (error) {
        return res.status(400).send(error.details)
    }
    User.findById(req.params.id)

        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "Product not found with id" + req.params.id,
                });
            }
            res.send(product)
        })
        .catch((err) => {
            if (err.kind === "Objectid") {
                return res.status(404).send({
                    message: "Product not found with id" + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Error finding product with id" + req.params.id,
            });
        });
};

// Updated a product identified by the id in the request
exports.updateProduct = (req, res) => {
    const { error, value } = updateValidator.validate(req.body)

    if (error) {
        return res.status(400).send(error.details)
    }
    if (!req.body.name) {
        return res.status(400).send({
            message: "Product name can not be empty",
        });
    }
    // Find product and update it with the request body
    User.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            quantity: req.body.quantity,
            color: req.body.color,
            price: req.body.price,
            categories: req.body.categories,
            imageUrl: req.body.imageUrl,
            cart: req.body.cart,
            description: req.body.description
        },
        { new: true }
    )
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                });
            }
            res.send(product);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Error updating product with id " + req.params.id,
            });
        });
};

// Delete a product with the specified id in the request
exports.deleteProduct = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                });
            }
            res.send({ message: "Product deleted successfully!" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                });
            }
            return res.status(500).send({
                message: "Could not delete product with id " + req.params.id,
            });
        });
};