const db = require('./db');

const Cart = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cart', (err, results) => {
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
      db.query('SELECT * FROM cart WHERE id = ?', id, (err, results) => {
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
      db.query('INSERT INTO cart SET ?', data, (err, results) => {
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
      db.query('UPDATE cart SET ? WHERE id = ?', [data, id], (err, results) => {
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
      db.query('DELETE FROM cart WHERE id = ?', id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};

module.exports = Cart;