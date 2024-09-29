const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieSession = require('cookie-session');

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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});