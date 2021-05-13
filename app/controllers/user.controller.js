// const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model.js");

// Create and Save a new User
exports.createUser = (req, res) => {
  for (const age in req.body) {
    if (Object.hasOwnProperty.call(req.body, age)) {
      const element = req.body[age];
      if (!element) {
        return res.status(400).send({
          message: `You must provide ${age}`,
        });
      }
    }
  }

  User.find({ email: req.body.email })
  .then((result) => {
        if (result.length > 0) {
            return res.status(404).send({
                message: "email already exist",
            });
        
        } else {
            // Create a User
            user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age,
                gender: req.body.gender,
                country: req.body.country,
            })
            user.save()
            .then((data) => {
              return res.send(data);
            })
            .catch((err) => {
              return res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
              });
            });
        
        };
    
    
    });

  
};
  // Save User in the database
  

// Retrieve and return all users from the database.
exports.findAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a id
exports.findOneUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};

// Update a user identified by the id in the request
exports.updateUser = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: "User name can not be empty",
    });
  }

  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.name,
      email: req.body.email,
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.id,
      });
    });
};

// Delete a user with the specified id in the request
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with id " + req.params.user,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.id,
      });
    });
};
