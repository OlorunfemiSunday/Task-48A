const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const path = require("path");

dotenv.config();
const app = express();

// CORS RESTRICTION
const allowedOrigins = [
  "https://upload-api-task48b-olorunfemisunday-olorunfemi-sundays-projects.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);


app.use(express.json());

// Serve uploaded files statically
app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
