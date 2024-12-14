const mysql = require('mysql2/promise');
const config = require('../config/config');

const pool = mysql.createPool({
  ...config.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool; 