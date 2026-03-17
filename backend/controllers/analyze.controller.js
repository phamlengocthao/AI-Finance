import fs from "fs";
import { callModelAPI } from "../services/model.service.js";

export const analyzeReport = async (req, res) => {
  try {
    /* ================= CHECK FILE ================= */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;
    const fileName = req.file.originalname;
    const fileSize = req.file.size;

    console.log("📄 File received:", fileName);
    console.log("📁 Path:", filePath);
    console.log("📦 Size:", fileSize);

    /* ================= CALL AI MODEL ================= */

    const result = await callModelAPI(filePath);

    console.log("🤖 AI analysis finished");

    /* ================= DELETE FILE AFTER ANALYZE ================= */

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("⚠️ Cannot delete file:", err);
      }
    });

    /* ================= RESPONSE ================= */

    return res.json({
      success: true,
      file: fileName,
      data: result,
    });

  } catch (error) {

    console.error("❌ Analyze error:", error);

    return res.status(500).json({
      success: false,
      message: "Analyze failed",
    });
  }
};