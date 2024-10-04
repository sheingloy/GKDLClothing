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