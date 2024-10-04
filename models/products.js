const db = require('./db');

const Products = {
  getAll: () => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      db.query('SELECT * FROM products', (err, results) => {
=======
 db.query('SELECT * FROM products', (err, results) => {
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
<<<<<<< HEAD
    }); 
=======
    });
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
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
<<<<<<< HEAD
  create: (data, callback) => {
        const sql = 'INSERT INTO products (name, details, size, price, image, category) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [data.name, data.details, data.size, data.price, data.image, data.category], callback);
=======
  create: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO products SET ?', data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
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

<<<<<<< HEAD
exports.getAll = (callback) => {
  db.query('SELECT * FROM products', callback);
};

exports.getById = (id, callback) => {
  db.query('SELECT * FROM products WHERE id = ?', [id], callback);
};


exports.update = (id, data, callback) => {
  db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
};

=======
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
module.exports = Products;