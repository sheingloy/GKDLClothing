const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieSession = require('cookie-session');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
const multer = require('multer');
const path = require('path');
const userRoutes = require('./routes/userRouter');
const Product = require('./models/products');

<<<<<<< HEAD
const port = 3002;
=======
const port = 3003;
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/*app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));*/

app.set('view engine', 'ejs');
app.use(express.static('public'));
const db = require('./config/db');

app.use('/', userRoutes);
app.use('/admin', require('./routes/admin'));
app.use('/authentication', require('./routes/authentication'));


const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const registerRoute = require('./routes/register');
app.use('/', registerRoute);
const loginRoute = require('./routes/login');
app.use('/', loginRoute);
app.get('/admin/products', (req, res) => {
  res.render('product');
});
app.get('/admin/products/view', (req, res) => {
  res.render('admin/productView');
});




// Default route
app.get('/', (req, res) => {
  res.render('index'); 
});


<<<<<<< HEAD
=======
=======

const port = 3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.set('view engine', 'ejs');

const db = require('./models/db');

app.use('/admin', require('./routes/admin'));
app.use('/authentication', require('./routes/authentication'));

>>>>>>> c85231272cc110049d7fbe01948b9e743d077750
>>>>>>> 18b7917c18baef235069b58d4d908207b254f0f7
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});