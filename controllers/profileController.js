exports.uploadImageController = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No image file uploaded or invalid file type." });
    }
    res.status(200).json({
        message: "Image uploaded successfully",
        file: req.file.filename
    });
};

exports.uploadVideoController = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No video file uploaded or invalid file type." });
    }
    res.status(200).json({
        message: "Video uploaded successfully",
        file: req.file.filename
    });
};
