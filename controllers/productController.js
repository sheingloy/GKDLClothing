// controllers/productController.js
const Product = require('../models/products');

exports.addProductPage = (req, res) => {
    res.render('admin/products');
};

exports.addProduct = (req, res) => {
    const { name, details, size, price, category } = req.body;
    const image = req.file.filename;

    const productData = { name, details, size, price, image, category };
    Product.create(productData, (err, result) => {
        if (err) throw err;
        res.redirect('/admin/products');
    });
};

exports.getProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('admin/productView', { products });
    });
};

exports.getUpdateProduct = (req, res) => {
    const productId = req.params.id;
    Product.getById(productId, (err, product) => {
        if (err) {
            return res.status(500).send(err);
        }
        Product.getCategories((err, categories) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('admin/update', { product, categories });
        });
    });
};

exports.updateProduct = (req, res) => {
    const productId = req.params.id;
    const { name, details, size, price, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const productData = { name, details, size, price, image, category };
    Product.update(productId, productData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/admin/products');
    });
};

exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    Product.delete(productId, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/admin/products');
    });
};

