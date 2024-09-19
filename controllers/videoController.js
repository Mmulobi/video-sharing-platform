const cloudinary = require('cloudinary').v2;
const db = require('../models/videoModel');

// upload a video
exports.uploadVideo = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id;

    cloudinary.uploader.upload(req.file.path, { resource_type: "video" }, (error, result) => {
        if (error) return res.status(500).json({ error: 'Failed to upload video' });

        const query = `INSERT INTO videos (userId, title, description, videoUrl, thumbnailUrl) VALUES (?, ?, ?, ?, ?)`;

        db.run(query, [userId, title, description, result.url, result.secure_url], function(err) {
            if (err) return res.status(400).json({ error: "Failed to save video" });
            res.status(201).json({ message: 'Video uploaded successfully' });
        });
    });
};

// Get User Videos
exports.getUserVideos = (req, res) => {
    const userId = req.user.id;

    const query = `SELECT * FROM videos WHERE userId = ?`;
    db.all(query, [userId], (err, rows) => {
        res.status(200).json({ videos: rows });
    });
};