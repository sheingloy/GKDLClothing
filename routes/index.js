const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

<<<<<<< HEAD
router.get('/cart', (req, res) => {
  res.render('cart');
});

=======
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
module.exports = router;