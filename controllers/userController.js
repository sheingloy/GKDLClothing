const ph = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    shop: (req, res) => {
        res.render('shop');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    checkout: (req, res) => {
        res.render('checkout');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    }
};

module.exports = ph;
