// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const userController = require('../controllers/userController');

// Existing routes
router.get('/', userController.index);
router.get('/about', userController.about);
router.get('/contact', userController.contact);
router.get('/cart', userController.cart);
router.get('/checkout', userController.checkout);
router.get('/login', userController.login);
router.post('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', userController.register);

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.redirect('/shop');
        }
        res.redirect('/login'); // Redirect to login after logout
    });
});

// Route to display the shop page
router.get('/shop', (req, res) => {
    // Fetch products from the database
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).send('Error retrieving products'); // Handle errors gracefully
        }

        // Pass products to the shop view
        res.render('shop', { user: req.session.user, products: results }); // Ensure `products` is included
    });
});

module.exports = router;
