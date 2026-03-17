import fs from "fs";
import path from "path";

export const callModelAPI = async (filePath) => {
  try {
    console.log("🤖 Fake AI analyzing file...");

    /* ================= READ FILE ================= */

    const ext = path.extname(filePath).toLowerCase();

    let text = "";

    if (ext === ".txt") {
      text = fs.readFileSync(filePath, "utf-8");
    } else {
      text = "File content preview is not available for this format yet.";
    }

    /* ================= SIMPLE ANALYSIS ================= */

    const length = text.length;

    const score = Math.floor(Math.random() * 40) + 60;

    const risks = ["Low", "Medium", "High"];
    const risk = risks[Math.floor(Math.random() * risks.length)];

    const growths = ["Low", "Moderate", "High"];
    const growth = growths[Math.floor(Math.random() * growths.length)];

    /* ================= RETURN STRUCTURE ================= */

    return {
      overview: {
        score,
        risk,
        growth,
      },

      summary: [
        "The uploaded report was successfully processed.",
        "Initial automated analysis has been completed.",
        "Further AI insights will be available after integrating the full AI model.",
      ],

      metrics: {
        file_size: `${(length / 1024).toFixed(2)} KB`,
        detected_pages: Math.floor(Math.random() * 10) + 1,
        analysis_confidence: `${Math.floor(Math.random() * 20) + 80}%`,
        financial_health_score: score,
      },

      recommendations: [
        "Review key financial indicators.",
        "Validate AI insights with manual review.",
        "Integrate the full AI analysis model for deeper insights.",
      ],

      rawText: text.slice(0, 2000) || "No text preview available.",
    };

  } catch (error) {

    console.error("❌ Fake AI error:", error);

    throw new Error("Fake AI analysis failed");
  }
};