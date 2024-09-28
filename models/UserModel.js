const db = require('../config/db');
const bcrypt = require('bcrypt');

const UserModel = {
    createUser: (newUser, callback) => {
        const { username, email, password } = newUser;
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return callback(err);
            db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hash], callback);
        });
    },

    findUserByEmailAndPassword: (email, password, callback) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                return callback(err);
            }
            const user = results.length > 0 ? results[0] : null;

            if (user) {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return callback(err);
                    callback(null, isMatch ? user : null);
                });
            } else {
                callback(null, null);
            }
        });
    },

};

module.exports = UserModel;
