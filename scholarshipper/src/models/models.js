const { Pool } = require('pg');
require('dotenv').config();

const POSTGRES = process.env.PG_URI;

const pool = new Pool({
  connectionString: POSTGRES
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
