const express = require('express');
const router = express.Router();
const ph = require('../controllers/userController');

router.get('/', ph.index);
router.get('/about', ph.about);
router.get('/shop', ph.shop);
router.get('/contact', ph.contact);
router.get('/cart', ph.cart);
router.get('/checkout', ph.checkout);
router.get('/login', ph.login);
router.get('/register', ph.register);

module.exports = router; 