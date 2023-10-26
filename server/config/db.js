const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor", // sua senha no mysql workbench
    database: "research_db",
    port: 3306
})

module.exports = db;
