// controllers/productController.js
const Product = require('../models/products');

exports.addProductPage = (req, res) => {
<<<<<<< HEAD
    res.render('admin/products');
=======
    res.render('admin/roducts');
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
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

<<<<<<< HEAD
=======
exports.getDashboard = (req, res) => {
    res.render('admin/dashboard');
};

>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
exports.getProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) {
            return res.status(500).send(err);
        }
<<<<<<< HEAD
        res.render('admin/productView', { products });
=======
        res.render('admin/products', { products });
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
    });
};

exports.getUpdateProduct = (req, res) => {
    const productId = req.params.id;
    Product.getById(productId, (err, product) => {
        if (err) {
            return res.status(500).send(err);
        }
<<<<<<< HEAD
        Product.getCategories((err, categories) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('admin/update', { product, categories });
=======
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
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        });
    });
};

exports.updateProduct = (req, res) => {
<<<<<<< HEAD
    const productId = req.params.id;
    const { name, details, size, price, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const productData = { name, details, size, price, image, category };
    Product.update(productId, productData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
=======
    const { id, name, category, details, size, price, image } = req.body;
    connection.query('UPDATE products SET name = ?, category = ?, details = ?, size = ?, price = ?, image = ? WHERE id = ?', 
    [name, category, details, size, price, image, id], (err) => {
        if (err) throw err;
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        res.redirect('/admin/products');
    });
};

<<<<<<< HEAD
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    Product.delete(productId, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
=======
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
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
        res.redirect('/admin/products');
    });
};

<<<<<<< HEAD
=======
exports.deleteProductById = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/admin/products');
    });
};
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
