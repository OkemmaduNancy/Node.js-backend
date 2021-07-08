const signup = require('../controllers/signup.controller.js');

const router = require('express').Router()

// Create a new Product
router.post('/create', signup.createSignup);

// Retrieve all products
router.get('/all', signup.findAllSignup);

// Retrieve a single product by id
router.get('/:id', signup.findOneSignup);

// Update a Product 
router.put('/:id', signup.updateSignup);

// Delete a Product by id
router.delete('/:id', signup.deleteSignup);

module.exports = router