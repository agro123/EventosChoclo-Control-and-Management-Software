const keys = require("./keys/keys.js");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
