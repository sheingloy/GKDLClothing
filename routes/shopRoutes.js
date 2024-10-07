const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Ensure the path to your db configuration is correct

// Route to display the shop page
router.get('/shop', (req, res) => {
    // Fetch products from the database
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).send('Error retrieving products'); // Handle errors gracefully
        }
        
        console.log('Fetched Products:', results); // Log fetched products for debugging

        // Pass products to the view
        res.render('shop', { user: req.session.user, products: results }); // Ensure `products` is included
    });
});

module.exports = router;
