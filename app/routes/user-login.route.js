const login = require('../controllers/user-login.controller.js');

const router = require('express').Router()

// Create a new login
router.post('/login', login.Login);

// Retrieve all login
router.get('/all', login.findAllLogin);

// Retrieve a single login by id
router.get('/:email', login.findOneLogin);

// Delete a login by id
router.delete('/del', login.findAndDeleteUserByEmail);

module.exports = router