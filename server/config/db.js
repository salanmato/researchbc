const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "research_db",
    port: 3306
})

module.exports = db;