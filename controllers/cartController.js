const CartModel = require('../models/cartModel'); // Import the CartModel

const cartController = {
    // Render the cart page
    viewCart: (req, res) => {
        const userId = req.session.user.id; // Get user ID from session
        CartModel.getCartItems(userId, (err, cartItems) => {
            if (err) {
                console.error('Error fetching cart items:', err);
                return res.status(500).send('Error fetching cart items');
            }
            res.render('cart', { cartItems }); // Render the cart view with items
        });
    },

    addToCart: (req, res) => {
        const user_id = req.session.user ? req.session.user.id : null; // Get the user ID from the session
        if (!user_id) {
            return res.redirect('/login'); // Redirect to login if not logged in
        }

        const { productId, productName, productPrice, size } = req.body;

        // Optionally, set the quantity to 1 if you don't want to allow custom quantities at this stage
        const quantity = 1; 
        const image = "path_to_product_image"; // Add a real image path if you have it.

        // Call the CartModel to add the item to the cart
        CartModel.addToCart(user_id, productId, productName, size, productPrice, quantity, image, (err) => {
            if (err) {
                console.error(err);
                return res.redirect('/shop'); // Redirect back to the shop on error
            }
            res.redirect('/cart'); // Redirect to the cart after adding the item
        });
    },

    // Update cart item quantity
    updateCart: (req, res) => {
        const { cart_id, quantity } = req.body;
        CartModel.updateCartItem(cart_id, quantity, (err) => {
            if (err) {
                console.error('Error updating cart item:', err);
                return res.status(500).send('Error updating cart item');
            }
            res.redirect('/cart'); // Redirect to cart page after updating
        });
    },

    // Remove item from the cart
    removeFromCart: (req, res) => {
        const cartId = req.params.id; // Assuming the ID is sent in the URL
        CartModel.removeCartItem(cartId, (err) => {
            if (err) {
                console.error('Error removing cart item:', err);
                return res.status(500).send('Error removing cart item');
            }
            res.json({ success: true }); // Respond with JSON for successful removal
        });
    }    
};

module.exports = cartController;
