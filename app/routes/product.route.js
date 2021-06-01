const products = require('../controllers/product.controller.js');

const router = require('express').Router()

// Create a new Product
router.post('/create', products.createProduct);

// Retrieve all products
router.get('/all', products.findAllProducts);

// Retrieve a single product by id
router.get('/:id', products.findOneProduct);

// Update a Product 
router.put('/:id', products.updateProduct);

// Delete a Product by id
router.delete('/:id', products.deleteProduct);

module.exports = router