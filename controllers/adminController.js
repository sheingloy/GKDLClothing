const adminController = {
    // Function to render the admin dashboard
    dashboard: (req, res) => {
        res.render('admin/dashboard', { user: req.session.user }); // Render admin dashboard
    }
};

module.exports = adminController;
