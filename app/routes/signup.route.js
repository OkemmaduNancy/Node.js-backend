const signup = require('../controllers/signup.controller.js');

const router = require('express').Router()

// Create a new signup
router.post('/create', signup.createSignup);

// Retrieve all signup
router.get('/all', signup.findAllSignup);

// Retrieve a single signup by id
router.get('/:id', signup.findOneSignup);

// Update a signup 
router.put('/:id', signup.updateSignup);

// Delete a signup by id
router.delete('/:id', signup.deleteSignup);

module.exports = router