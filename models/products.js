<<<<<<< HEAD
// models/products.js
const db = require('../config/db');

const Product = {};

Product.getAll = (callback) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

Product.getById = (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', id, (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results[0]);
        }
    });
};

Product.getCategories = (callback) => {
    db.query('SELECT DISTINCT category FROM products', (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

Product.create = (data, callback) => {
    db.query('INSERT INTO products SET ?', data, (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

Product.update = (id, data, callback) => {
    db.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

Product.delete = (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', id, (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

module.exports = Product;
=======
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
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
