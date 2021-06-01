const users = require('../controllers/user.controller.js');

const router = require('express').Router()

    // Create a new user
router.post('/create', users.createUser);

    // Retrieve all users
router.get('/all', users.findAllUsers);

    // Retrieve a single user by id
router.get('/:id', users.findOneUser);

    // Update a User with id
router.put('/:id', users.updateUser);

    // Delete a User by id
router.delete('/:id', users.deleteUser);

module.exports = router