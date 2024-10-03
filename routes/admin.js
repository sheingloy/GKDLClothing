const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Orders = require('../models/orders');
const Products = require('../models/products');
const Users = require('../models/users');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

router.get('/cart', (req, res) => {
  Cart.getAll().then((results) => {
    res.render('admin/cart', { cart: results });
  });
});

router.get('/orders', (req, res) => {
  Orders.getAll().then((results) => {
    res.render('admin/orders', { orders: results });
  });
});

router.get('/products', (req, res) => {
  Products.getAll().then((results) => {
    res.render('admin/products', { products: results });
  });
});

router.get('/users', (req, res) => {
  Users.getAll().then((results) => {
    res.render('admin/users', { users: results });
  });
});

const salesData = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

router.get('/dashboard', async (req, res) => {
  const numCustomers = 1000;
  const topSales = [
    { product: 'Product A', quantity: 100 },
    { product: 'Product B', quantity: 200 },
    { product: 'Product C', quantity: 300 }
  ];
  res.render('admin/dashboard', { salesData, numCustomers, topSales });
});

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/products', productController.addProductPage);
router.post('/products', upload.single('image'), productController.addProduct);

router.get('/dashboard', productController.getDashboard);
router.get('/products', productController.getProducts);
router.get('/products/update/:id', productController.getUpdateProduct);
router.post('/products/update/:id', productController.updateProduct);
router.get('/products/view/:id', productController.viewProduct);
router.get('/update/:id', productController.getUpdatePage);
router.post('/update/:id', productController.updateProduct);

router.get('/admin/products', productController.findAllProducts);
router.post('/admin/products/update/:id', productController.updateProductById);
router.get('/admin/products/delete/:id', productController.deleteProductById);


router.get('/admin/products', productController.findAllProducts);

module.exports = router;