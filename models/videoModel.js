const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite3');

// create video table
db.run(`CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT,
    description TEXT,
    videoUrl TEXT,
    thunbnailUrl TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) REFERENCES users(id)
    )`);


// post table
module.exports = db;