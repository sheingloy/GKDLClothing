<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
const db = require('../config/db');

const Users = {
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]); // Ensure it returns the first result
        }
      });
    });
  },
<<<<<<< HEAD
=======
=======
const db = require('./db');

const Users = {
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  getById: (id) => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
=======
<<<<<<< HEAD
      db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
=======
      db.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  create: (data) => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      const { id, email, password, user_type } = data;
      db.query('INSERT INTO users (id, email, password, user_type) VALUES (?, ?, ?, ?)', [id, email, password, user_type], (err, results) => {
=======
<<<<<<< HEAD
      const { id, email, password, user_type } = data;
      db.query('INSERT INTO users (id, email, password, user_type) VALUES (?, ?, ?, ?)', [id, email, password, user_type], (err, results) => {
=======
      db.query('INSERT INTO users SET ?', data, (err, results) => {
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
=======
<<<<<<< HEAD
      db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
=======
      db.query('DELETE FROM users WHERE id = ?', id, (err, results) => {
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};

<<<<<<< HEAD
module.exports = Users;
=======
<<<<<<< HEAD
module.exports = Users;
=======
module.exports = Users;
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
