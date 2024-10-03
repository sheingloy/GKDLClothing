const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users');

router.get('/login', (req, res) => {
  res.render('partials/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Log the form data
  console.log('Login Form Data:', req.body);

  try {
    // Find the user by email
    const user = await Users.getByEmail(email);
    console.log('User found:', user); // Log the user data

    if (!user) {
      console.log('User not found');
      return res.status(400).send('User not found');
    }

    // Compare the password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('Incorrect password');
      return res.status(400).send('Incorrect password');
    }

    // Check if the user is an admin
    if (email === 'admin@gmail.com' && password === 'admin') {
      console.log('Admin logged in successfully');
      return res.redirect('/admin/dashboard');
    }

    // Successful login for regular users
    console.log('User logged in successfully');
    res.redirect('/dashboard');
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
