const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
const shopRoutes = require('./routes/shopRoutes'); // Import shop routes
const cartRoutes = require('./routes/cartRoutes'); // Import cart routes
const checkoutRoutes = require('./routes/checkout'); // Import checkout routes
const ordersRoutes = require('./routes/ordersRoutes');
const db = require('./config/db');

const app = express();
const port = 3005;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Middleware to set session data to locals
app.use((req, res, next) => {
    res.locals.session = req.session; // Make the session available in all EJS views
    next();
});

// Use user, admin, shop, cart, checkout, and orders routes
app.use('/', userRoutes);
app.use('/', adminRoutes);
app.use('/', shopRoutes); 
app.use('/', cartRoutes);
app.use('/', checkoutRoutes); // Add checkout routes
app.use('/', ordersRoutes); 

// Default route
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
