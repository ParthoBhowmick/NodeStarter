const { createPool } = require("mysql")

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
})

module.exports = pool
