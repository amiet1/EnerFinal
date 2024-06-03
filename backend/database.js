require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://marcy@localhost/ener',
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
