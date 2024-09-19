const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


// create express app
const app = express();
app.use(cors());
app.use(express.json());


// import routes
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');
const { Console } = require('console');

// use routes
app.use('/auth', authRoutes);
app.use('/videos', videoRoutes);

// listen to port
app.listen(5000, () => {
    console.log('server running on port 5000');
});

