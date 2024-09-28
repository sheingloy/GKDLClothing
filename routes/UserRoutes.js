const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

router.get('/', (req, res) => {
    res.render('login'); 
});


router.get('/admin', (req, res) => {
    if (req.session.user && req.session.user.role === 'admin') {
        res.render('admin'); 
    } else {
        res.status(403).send('Forbidden: You are not an admin.'); 
    }
});

router.get('/home', (req, res) => {
    if (req.session.user && req.session.user.role === 'user') {
        res.render('home'); 
    } else {
        res.status(403).send('Forbidden: You are not a user.');
    }
});


module.exports = router;
