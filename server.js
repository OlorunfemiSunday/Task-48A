const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse incoming JSON requests

// Static folder for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
