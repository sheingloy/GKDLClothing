const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); // Import the cart controller

// Define routes for cart operations
router.get('/cart', cartController.viewCart); // View cart
router.post('/cart/add', cartController.addToCart); // Add to cart
router.post('/cart/update', cartController.updateCart); // Update cart item
router.post('/cart/remove/:id', cartController.removeFromCart); // Remove item from cart

module.exports = router;
