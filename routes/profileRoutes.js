const express = require("express");
const router = express.Router();
const {
    uploadImageController,
    uploadVideoController,
} = require("../controllers/profileController");

const {
    uploadImage,
    uploadVideo,
} = require("../middlewares/upload");

// Route for image upload
router.post("/upload-image", (req, res) => {
    uploadImage(req, res, function (err) {
        if (err) return res.status(400).json({ error: err.message });
        return uploadImageController(req, res);
    });
});

// Route for video upload
router.post("/upload-video", (req, res) => {
    uploadVideo(req, res, function (err) {
        if (err) return res.status(400).json({ error: err.message });
        return uploadVideoController(req, res);
    });
});

module.exports = router;
