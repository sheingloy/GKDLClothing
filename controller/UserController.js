const UserModel = require('../models/UserModel');

const UserController = {
    signup: (req, res) => {
        const { username, email, password } = req.body;
        const newUser = { username, email, password };

        console.log('Data being inserted:', newUser);

        UserModel.createUser(newUser, (err, result) => {
            if (err) {
                console.error('Error signing up the user:', err);
                return res.status(500).send('Error signing up the user: ' + err.message);
            }
            res.redirect('/'); 
        });
    },

    login: (req, res) => {
        const { email, password } = req.body;

   
        if (email === 'admin@gmail.com' && password === 'admin') {
            req.session.user = { email, role: 'admin' }; 
            return res.redirect('/admin'); 
        }

        UserModel.findUserByEmailAndPassword(email, password, (err, user) => {
            if (err) {
                return res.status(500).send('Error during login: ' + err.message);
            }
            if (user) {
                req.session.user = { email: user.email, role: 'user' }; 
                return res.redirect('/home'); 
            }
            return res.status(401).send('Invalid credentials'); 
        });
    },

    
};

module.exports = UserController;
