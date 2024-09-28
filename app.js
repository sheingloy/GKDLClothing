const express = require('express');
const session = require('express-session');
const path = require('path');
const UserRoutes = require('./routes/UserRoutes');
const app = express();


app.use(express.urlencoded({ extended: true })); 
app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', UserRoutes);


app.listen(3000, () => {
    console.log('Server initialized on http://localhost:3000');
});
