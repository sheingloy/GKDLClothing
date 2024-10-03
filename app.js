const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieSession = require('cookie-session');
const multer = require('multer');
const path = require('path');
const userRoutes = require('./routes/userRouter');
const Product = require('./models/products');

const port = 3003;

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


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});