const db = require('./db');

const Products = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products', (err, results) => {
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
      db.query('SELECT * FROM products WHERE id = ?', id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  create: (data, callback) => {
        const sql = 'INSERT INTO products (name, details, size, price, image, category) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [data.name, data.details, data.size, data.price, data.image, data.category], callback);
  },
  update: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, results) => {
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
      db.query('DELETE FROM products WHERE id = ?', id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};

exports.getAll = (callback) => {
  db.query('SELECT * FROM products', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM products WHERE id = ?', [id], callback);
};


exports.update = (id, data, callback) => {
  db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
};

module.exports = Products;