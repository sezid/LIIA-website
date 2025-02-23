// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // Multer Storage Setup for CV Uploads
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Mongoose Schema for Job Applications
// const jobSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   jobType: String,
//   portfolio: String,
//   linkedin: String,
//   reason: String,
//   resume: String, // File path
// });

// const JobApplication = mongoose.model("JobApplication", jobSchema);

// // API Endpoint to Handle Job Applications
// app.post("/apply", upload.single("resume"), async (req, res) => {
//   try {
//     const newApplication = new JobApplication({
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       jobType: req.body.jobType,
//       portfolio: req.body.portfolio,
//       linkedin: req.body.linkedin,
//       reason: req.body.reason,
//       resume: req.file ? req.file.path : "", // Save file path
//     });

//     await newApplication.save();
//     res.status(201).json({ message: "Application submitted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Error submitting application" });
//   }
// });

// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFSBucket } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's assigned port
const BASE_URL = process.env.BASE_URL || 'https://liia-website.onrender.com'

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/jobApplications";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const conn = mongoose.connection;
let gfs;
conn.once("open", () => {
  gfs = new GridFSBucket(conn.db, { bucketName: "uploads" });
  console.log("✅ GridFS Connected");
});

// Mongoose Schema for Job Applications
const jobSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  jobType: String,
  portfolio: String,
  linkedin: String,
  reason: String,
  resumeFilename: String, // Store full download URL
});
const JobApplication = mongoose.model("JobApplication", jobSchema);

// Multer Storage Setup (Memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST Route: Submit Job Application
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { name, email, phone, jobType, portfolio, linkedin, reason } = req.body;

    // Upload file to GridFS
    const uploadStream = gfs.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
    });
    uploadStream.end(req.file.buffer);

    uploadStream.on("finish", async () => {
      const fileUrl = `${BASE_URL}/download/${req.file.originalname}`;

      const newApplication = new JobApplication({
        name,
        email,
        phone,
        jobType,
        portfolio,
        linkedin,
        reason,
        resumeFilename: fileUrl, // Store full download URL
      });

      await newApplication.save();
      res.status(201).json({ message: "Application submitted successfully!", resumeUrl: fileUrl });
    });

    uploadStream.on("error", (err) => {
      res.status(500).json({ error: "Error uploading file" });
    });
  } catch (error) {
    res.status(500).json({ error: "Error saving application" });
  }
});

// GET Route: Download Resume
app.get("/download/:filename", async (req, res) => {
  try {
    const fileStream = gfs.openDownloadStreamByName(req.params.filename);
    res.set("Content-Type", "application/pdf");
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Error fetching file" });
  }
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at ${BASE_URL} on port ${PORT}`);
});
