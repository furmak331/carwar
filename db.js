// db.js

const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: '<your_database_host>',
  user: '<your_database_user>',
  password: '<your_database_password>',
  database: '<your_database_name>'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;
