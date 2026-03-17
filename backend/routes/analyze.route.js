import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { analyzeReport } from "../controllers/analyze.controller.js";

const router = express.Router();

/**
 * ===============================
 * POST /api/analyze
 * Upload file and analyze report
 * ===============================
 */

router.post("/", upload.single("file"), analyzeReport);

export default router;