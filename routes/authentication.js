const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Users.getById(email).then((user) => {
    if (!user) {
      res.status(401).send({ message: 'Invalid email or password' });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Internal server error' });
        } else if (!result) {
          res.status(401).send({ message: 'Invalid email or password' });
        } else {
          req.session.user = user;
          res.redirect('/admin');
        }
      });
    }
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

module.exports = router;