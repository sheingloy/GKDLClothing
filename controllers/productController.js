// controllers/productController.js
const Product = require('../models/products');

exports.addProductPage = (req, res) => {
    res.render('admin/roducts');
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

exports.getDashboard = (req, res) => {
    res.render('admin/dashboard');
};

exports.getProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('admin/products', { products });
    });
};

exports.getUpdateProduct = (req, res) => {
    const productId = req.params.id;
    Product.getById(productId, (err, product) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('admin/updateProduct', { product: JSON.stringify(product) });
    });
};


exports.updateProduct = (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    Product.update(productId, updatedData, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/admin/products');
    });
};

exports.viewProduct = (req, res) => {
    const productId = req.params.id;
    Product.getById(productId, (err, product) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('admin/viewProduct', { product });
    });
};

exports.getUpdatePage = (req, res) => {
    const productId = req.params.id;
    connection.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
        if (err) throw err;
        connection.query('SELECT DISTINCT category FROM products', (err, categories) => {
            if (err) throw err;
            res.render('admin/update', { product: results[0], categories });
        });
    });
};

exports.updateProduct = (req, res) => {
    const { id, name, category, details, size, price, image } = req.body;
    connection.query('UPDATE products SET name = ?, category = ?, details = ?, size = ?, price = ?, image = ? WHERE id = ?', 
    [name, category, details, size, price, image, id], (err) => {
        if (err) throw err;
        res.redirect('/admin/products');
    });
};

exports.findAllProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.render('admin/productView', { products: results });
    });
};


exports.updateProductById = (req, res) => {
    const { id } = req.params;
    const { name, category, details, size, price, image } = req.body;
    db.query('UPDATE products SET name = ?, category = ?, details = ?, size = ?, price = ?, image = ? WHERE id = ?', 
    [name, category, details, size, price, image, id], (err) => {
        if (err) throw err;
        res.redirect('/admin/products');
    });
};

exports.deleteProductById = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/admin/products');
    });
};
