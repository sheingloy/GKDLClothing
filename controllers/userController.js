// controllers/userController.js
const CartModel = require('../models/cartModel');
const User = require('../models/userModel'); // Import the userModel for database interaction
const bcrypt = require('bcrypt'); // Optional, only if you're hashing passwords

const userController = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    shop: (req, res) => {
        res.render('shop');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    cart: (req, res) => {
        const user_id = req.session.user ? req.session.user.id : null; // Get user ID from session

        // Check if user is logged in
        if (!user_id) {
            return res.redirect('/login'); // Redirect to login if not logged in
        }

        // Retrieve cart items for the logged-in user
        CartModel.getCartItems(user_id, (err, cartItems) => {
            if (err) {
                console.error(err);
                return res.render('cart', { error: 'Error retrieving cart items' });
            }

            // Render the cart view with cart items
            res.render('cart', { cartItems });
        });
    },
    checkout: (req, res) => {
        res.render('checkout');
    },

    // Registration GET and POST logic
register: (req, res) => {
    if (req.method === 'GET') {
        res.render('register');
    } else if (req.method === 'POST') {
        const { name, email, password, confirmPassword } = req.body; // Added name to destructure
        const user_type = 'user'; // Default user type is 'user'

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.render('register', { error: 'Passwords do not match' });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Use the userModel to create a new user
        User.create(name, email, hashedPassword, user_type, (err, result) => { // Pass name as the first parameter
            if (err) {
                console.error(err);
                return res.render('register', { error: 'Error creating user' });
            }
            res.redirect('/login'); // Redirect to login page after registration
        });
    }
},

    // Login logic
    login: (req, res) => {
        if (req.method === 'GET') {
            res.render('login'); // Render the login page
        } else if (req.method === 'POST') {
            const { email, password } = req.body;

            User.findByEmail(email, (err, user) => {
                if (err) {
                    console.error(err);
                    return res.render('login', { error: 'Error during login' });
                }

                if (user) {
                    // Compare password with the hashed password
                    if (bcrypt.compareSync(password, user.password)) {
                        req.session.user = user; // Store user info in session

                        // Check user type to determine redirect
                        if (user.user_type === 'admin') {
                            return res.redirect('/admin'); // Redirect to admin dashboard
                        } else {
                            return res.redirect('/'); // Redirect to homepage for regular users
                        }
                    } else {
                        return res.render('login', { error: 'Invalid password' });
                    }
                } else {
                    return res.render('login', { error: 'User not found' });
                }
            });
        }
    }
};

module.exports = userController;
