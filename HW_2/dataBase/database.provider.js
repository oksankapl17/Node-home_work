let mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'qweasd82',
  database: 'lun'
});

module.exports = pool;