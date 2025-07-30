const multer = require("multer");
const path = require("path");

// ✅ Image file filter
const imageFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".jpeg", ".png"];
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (JPG, JPEG, PNG) are allowed!"), false);
  }
};

// ✅ Video file filter
const videoFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".mp4", ".mov"];
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only video files (MP4, MOV) are allowed!"), false);
  }
};

// ✅ Multer disk storage with safe, unique naming
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// ✅ Limits (20MB)
const limits = {
  fileSize: 20 * 1024 * 1024, // 20MB
};

// ✅ Exported upload middleware
exports.uploadImage = multer({
  storage,
  fileFilter: imageFilter,
  limits,
}).single("image");

exports.uploadVideo = multer({
  storage,
  fileFilter: videoFilter,
  limits,
}).single("video");
