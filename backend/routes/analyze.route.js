// routes/analyze.route.js
import express from "express";
import multer from "multer";
import { analyzeReport } from "../controllers/analyze.controller.js";

const router = express.Router();

/**
 * Cấu hình multer (upload file tạm)
 * File sẽ nằm trong thư mục /uploads
 */
const upload = multer({
  dest: "uploads/",
});

/**
 * POST /api/analyze
 */
router.post(
  "/",
  upload.single("file"),
  analyzeReport
);

export default router;
