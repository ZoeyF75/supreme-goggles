const Pool = require("pg").Pool;

const pool = new Pool({
  user: "shopify",
  password: "challenge",
  host: "localhost",
  port: 5432,
  database: "imagerepository"
})

module.exports = pool;