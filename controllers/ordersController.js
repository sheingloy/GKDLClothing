const OrdersModel = require('../models/ordersModel');

const OrdersController = {
    viewOrders: (req, res) => {
        OrdersModel.getAllOrders((err, results) => {
            if (err) {
                console.error('Error fetching orders:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.render('orders', { orders: results, user: req.session.user });
        });
    },
    approveOrder: (req, res) => {
        const orderId = req.params.id; // Get the order ID from route parameters
        OrdersModel.approveOrder(orderId, (err, result) => {
            if (err) {
                console.error('Error approving order:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.redirect('/orders'); // Redirect back to the orders page
        });
    },
    declineOrder: (req, res) => {
        const orderId = req.params.id; // Get the order ID from route parameters
        OrdersModel.declineOrder(orderId, (err, result) => {
            if (err) {
                console.error('Error declining order:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.redirect('/orders'); // Redirect back to the orders page
        });
    },
    viewUserOrders: (req, res) => {
        const userId = req.params.id; // Get user ID from route parameters
        OrdersModel.getUserOrders(userId, (err, results) => {
            if (err) {
                console.error('Error fetching user orders:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.render('userOrders', { orders: results, user: req.session.user });
        });
    },
};

module.exports = OrdersController;
