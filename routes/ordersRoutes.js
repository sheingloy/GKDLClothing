const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/ordersController');

// Define routes
router.get('/orders', OrdersController.viewOrders);
router.post('/orders/approve/:id', OrdersController.approveOrder); // Correct route definition
router.post('/orders/decline/:id', OrdersController.declineOrder); // Correct route definition
router.get('/userOrders/:id', OrdersController.viewUserOrders); // This route should be defined

module.exports = router;
