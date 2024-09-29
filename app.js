const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieSession = require('cookie-session');
const userRoutes = require('./routes/userRouter');

const port = 3003;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
const db = require('./models/db');

app.use('/', userRoutes);
app.use('/admin', require('./routes/admin'));
app.use('/authentication', require('./routes/authentication'));

// Default route
app.get('/', (req, res) => {
  res.render('index'); 
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});