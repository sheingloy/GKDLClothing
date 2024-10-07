// ordersRouter.js (or similar)
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Your MySQL connection

// Route to create order
router.post('/checkout/create-order', (req, res) => {
    const { name, number, method, address, total_products, total_price } = req.body;

    if (!name || !number || !method || !address || !total_products || !total_price) {
        return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // SQL query to insert the order into the database
    const sql = `INSERT INTO orders (name, number, method, address, total_products, total_price, placed_on, payment_status)
                 VALUES (?, ?, ?, ?, ?, ?, NOW(), 'Pending')`;

    db.query(sql, [name, number, method, address, total_products, total_price], (err, result) => {
        if (err) {
            console.error('Error saving order:', err);
            return res.status(500).json({ message: 'Error saving order' });
        }

        // Return the order ID for the receipt modal
        res.status(200).json({ message: 'Order placed successfully!', orderId: result.insertId });
    });
});

module.exports = router;
