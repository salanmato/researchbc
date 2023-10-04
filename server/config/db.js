const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "toor",
database:"research_db" 
})

module.exports = db;