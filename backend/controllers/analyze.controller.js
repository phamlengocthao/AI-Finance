import { callModelAPI } from "../services/model.service.js";

export const analyzeReport = async (req, res) => {
  try {
    // chưa upload file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;
    const originalName = req.file.originalname;

    console.log("📄 File received:", originalName);

    //  GỌI MODEL
    const modelResult = await callModelAPI(filePath);

    // TRẢ NGUYÊN KẾT QUẢ MODEL
    return res.json({
      success: true,
      data: modelResult,
    });

  } catch (err) {
    console.error("Analyze error:", err);
    return res.status(500).json({
      success: false,
      message: "Analyze failed",
    });
  }
};
