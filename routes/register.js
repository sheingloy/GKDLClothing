const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users');
const db = require('../config/db');


router.get('/register', (req, res) => {
  res.render('partials/register');
});

router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Log the form data
  console.log('Form Data:', req.body);

  // Basic validation
  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    return res.status(400).send('Passwords do not match');
  }

  try {
    // Log before hashing
    console.log('Hashing password:', password);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Log after hashing
    console.log('Hashed Password:', hashedPassword);

    // Create a new user
    await Users.create({ id: null, email, password: hashedPassword, user_type: 'user' });

    // Log successful creation
    console.log('User created successfully');

    res.redirect('/login');
  } catch (err) {
    console.error('Error registering user:', err); // Log the error details
    res.status(500).send('Error registering user');
  }
});

module.exports = router;
