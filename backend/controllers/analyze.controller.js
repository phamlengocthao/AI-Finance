import { extractTextFromFile } from "../services/file.service.js";
import { callModelAPI } from "../services/model.service.js";
import fs from "fs/promises";

export const analyzeReport = async (req, res) => {
  let filePath = null;

  try {
    /* ================= CHECK FILE ================= */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    filePath = req.file.path;

    console.log("📄 File:", req.file.originalname);

    /* ================= EXTRACT TEXT ================= */

    const text = await extractTextFromFile(req.file);

    if (!text || text.length < 20) {
      throw new Error("File content too short or unreadable");
    }

    /* ================= CALL AI ================= */

    const result = await callModelAPI(text);

    console.log("🤖 AI done");

    /* ================= DELETE FILE ================= */

    if (filePath) {
      await fs.unlink(filePath).catch(() => {});
    }

    /* ================= RESPONSE ================= */

    return res.json({
      success: true,
      file: req.file.originalname,
      data: result,
    });

  } catch (error) {

    console.error("❌ Analyze error:", error.message);

    // đảm bảo luôn xóa file
    if (filePath) {
      await fs.unlink(filePath).catch(() => {});
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Analyze failed",
    });
  }
};