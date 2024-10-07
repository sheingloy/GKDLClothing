const db = require('../config/db');

const CartModel = {
    // Add a product to the cart
    addToCart: (user_id, product_id, name, size, price, quantity, image, callback) => {
        const query = 'INSERT INTO cart (user_id, pid, name, size, price, quantity, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [user_id, product_id, name, size, price, quantity, image], (err, result) => {
            if (err) {
                return callback(err); // Pass error to the callback
            }
            callback(null, result); // Pass result to the callback
        });
    },

    // Get all products in the cart for a specific user
    getCartItems: (user_id, callback) => {
        const query = 'SELECT * FROM cart WHERE user_id = ?';
        db.query(query, [user_id], (err, results) => {
            if (err) {
                return callback(err); // Pass error to the callback
            }
            callback(null, results); // Pass results to the callback
        });
    },

    // Update quantity of a specific cart item
    updateCartItem: (cart_id, quantity, callback) => {
        const query = 'UPDATE cart SET quantity = ? WHERE id = ?';
        db.query(query, [quantity, cart_id], (err, result) => {
            if (err) {
                return callback(err); // Pass error to the callback
            }
            callback(null, result); // Pass result to the callback
        });
    },

    // Remove an item from the cart
    removeCartItem: (cart_id, callback) => {
        const query = 'DELETE FROM cart WHERE id = ?';
        db.query(query, [cart_id], (err, result) => {
            if (err) {
                return callback(err); // Pass error to the callback
            }
            callback(null, result); // Pass result to the callback
        });
    }
};

module.exports = CartModel;
