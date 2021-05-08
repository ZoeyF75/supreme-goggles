const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "newPassword",
  host: "localhost",
  port: 5432,
  database: "imagerepository"
})

module.exports = pool;