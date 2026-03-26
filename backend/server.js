import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoute from "./routes/analyze.route.js";
import chatRoute from "./routes/chat.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */

// CORS
app.use(cors());

// limit request (tránh crash)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// log request (debug rất hữu ích)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* ================= ROUTES ================= */

// chuẩn REST hơn
app.use("/api/v1/analyze", analyzeRoute);
app.use("/api/v1/chat", chatRoute);

/* ================= HEALTH CHECK ================= */

app.get("/", (req, res) => {
  res.json({
    message: "Backend AI Finance is running 🚀",
  });
});

/* ================= 404 HANDLER ================= */

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ================= START SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});