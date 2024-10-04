const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gkdl_db'

});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySql Database');
});

module.exports = db;