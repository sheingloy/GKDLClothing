// models/userModel.js
const db = require('../config/db');

const User = {
    // Find user by email
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results[0]); // Return the first result
            }
        });
    },

    // Create new user
    create: (name, email, password, user_type, callback) => {
        const query = 'INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)';
        
        // Ensure values are strings (if applicable) before executing the query
        db.query(query, [name, email, password, user_type], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = User;
