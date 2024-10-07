const db = require('../config/db');

const OrdersModel = {
    getAllOrders: (callback) => {
        db.query('SELECT * FROM orders', callback);
    },
    getUserOrders: (userId, callback) => {
        db.query('SELECT * FROM orders WHERE id = ?', [userId], callback);
    },
    approveOrder: (orderId, callback) => {
        // Update the order status to approved in the database
        db.query('UPDATE orders SET payment_status = ? WHERE id = ?', ['Approved', orderId], callback);
    },
    declineOrder: (orderId, callback) => {
        // Update the order status to declined in the database
        db.query('UPDATE orders SET payment_status = ? WHERE id = ?', ['Declined', orderId], callback);
    },
};

module.exports = OrdersModel;
