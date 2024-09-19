const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/userModel');
const { CONSTRAINT } = require('sqlite3');


// Register a user
exports.registerUser = (req, res) => {
    const {username, email, password} = req.body;

    const hashedPassword = bycrypt.hashSync(password, 10);

    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

    db.run(query, [username, email, hashedPassword], function(err) {
        if (err) {
            return res.stutust(400).json({ error: 'User already exists' });
        }
        const token = jwt.sign({ id: this.lastID }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(201).json({ token });
    });
};

// Login a  User
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';

    db.get(query, [email], (err, user) => {
        if (!user || !bycrypt.compareSync(password, user.password)) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    });
};

