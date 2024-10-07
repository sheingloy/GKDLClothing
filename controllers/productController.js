const Product = require('../models/productModel'); // Import the Product model

// Function to render the shop page
const renderShopPage = (req, res) => {
    Product.getAllProducts((err, results) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).send('Error retrieving products');
        }
        console.log('Products:', results); // Log products for debugging
        res.render('shop', { user: req.session.user, products: results }); // Pass products to the view
    });
};

module.exports = {
    renderShopPage,
};
