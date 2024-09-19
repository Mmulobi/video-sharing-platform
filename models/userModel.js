const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite3');

// create User Table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    )`);


// create post table    
module.exports = db;