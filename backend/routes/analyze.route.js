import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { analyzeReport } from "../controllers/analyze.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/**
 * ===============================
 * POST /api/v1/analyze
 * Upload file and analyze report
 * ===============================
 */

router.post(
  "/",
  verifyToken, // 🔐 bắt buộc đăng nhập
  (req, res, next) => {
    upload.single("file")(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      next();
    });
  },
  analyzeReport
);

export default router;