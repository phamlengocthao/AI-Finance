import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoute from "./routes/analyze.route.js";
import chatRoute from "./routes/chat.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ================= ROUTES ================= */

app.use("/api/analyze", analyzeRoute);
app.use("/api/chat", chatRoute);

/* ================= TEST SERVER ================= */

app.get("/", (req, res) => {
  res.json({
    message: "Backend AI Finance is running 🚀",
  });
});

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Internal Server Error",
  });
});

/* ================= START SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});