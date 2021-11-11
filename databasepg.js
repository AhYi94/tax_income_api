
require('dotenv').config()
const { Pool } = require('pg');

// const pool = new Pool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     port: process.env.DBPORT,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     ssl: { rejectUnauthorized: false }

// });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
module.exports = pool;