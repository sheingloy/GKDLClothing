const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
router.get('/cart', (req, res) => {
  res.render('cart');
});

<<<<<<< HEAD
=======
=======
>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
module.exports = router;