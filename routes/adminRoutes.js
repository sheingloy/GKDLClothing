const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../config/db'); // Adjust to your actual DB config path
const adminController = require('../controllers/adminController');

// Middleware to protect admin routes
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.user_type === 'admin') {
        return next(); // Proceed if user is admin
    }
    res.redirect('/login'); // Redirect to login if not an admin
}

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the filename
    }
});
const upload = multer({ storage });

// Route to display the admin dashboard
router.get('/admin', isAdmin, (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).send('Error fetching products');
        }
        res.render('admin/dashboard', { user: req.session.user, products: results });
    });
});

// Route to add a product
router.post('/admin/add', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const { name, category, details, size, price } = req.body;
    const imagePath = '/img/' + req.file.filename; // Path to the uploaded image

    db.query('INSERT INTO products (name, category, details, size, price, image) VALUES (?, ?, ?, ?, ?, ?)', 
             [name, category, details, size, price, imagePath], (err, result) => {
        if (err) {
            console.error('Database error while adding product:', err);
            return res.status(500).send('Error adding product');
        }
        res.redirect('/admin'); // Redirect back to admin dashboard after adding
    });
});

// Route to delete a product
router.post('/admin/delete/:id', (req, res) => {
    const productId = req.params.id;
    db.query('DELETE FROM products WHERE id = ?', [productId], (err) => {
        if (err) {
            console.error('Database error while deleting product:', err);
            return res.status(500).send('Error deleting product');
        }
        res.redirect('/admin'); // Redirect back to admin dashboard
    });
});

// Route to update a product
router.post('/admin/edit', upload.single('image'), (req, res) => {
    const { id, name, category, details, size, price } = req.body;
    const imagePath = req.file ? '/img/' + req.file.filename : null; // Handle the uploaded image file

    // Prepare the query to update product details
    const query = `
        UPDATE products 
        SET name = ?, category = ?, details = ?, size = ?, price = ?${imagePath ? ', image = ?' : ''}
        WHERE id = ?
    `;
    
    const params = [name, category, details, size, price];
    if (imagePath) params.push(imagePath); // Add imagePath if it exists
    params.push(id); // Add product ID to the parameters

    db.query(query, params, (error) => {
        if (error) {
            console.error('Error updating product:', error);
            return res.status(500).send('Server error');
        }
        res.redirect('/admin'); // Redirect back to the admin dashboard
    });
});

module.exports = router;
