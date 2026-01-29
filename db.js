const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database: 'node_machine_test',
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err.message);
  } else {
    console.log('MySQL connected');
  }
});

module.exports = db;
