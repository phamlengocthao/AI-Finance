import axios from "axios";

export const callModelAPI = async (text) => {
  try {
    console.log("🤖 Calling AI...");

    const prompt = `
    Bạn là chuyên gia phân tích tài chính.

    Dựa vào dữ liệu sau:
    ${text}

    Hãy trả về JSON theo format:

    {
      "overview": {
        "score": number (0-100),
        "risk": "Low | Medium | High",
        "growth": "Low | Moderate | High"
      },
      "summary": [string],
      "metrics": {
        "financial_health_score": number,
        "analysis_confidence": string
      },
      "recommendations": [string]
    }
    `;

    const response = await axios.post(
      "https://api.openai.com/v1/responses",
      {
        model: "gpt-4.1-mini",
        input: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const output = response.data.output[0].content[0].text;

    // parse JSON từ AI
    const parsed = JSON.parse(output);

    return parsed;

  } catch (error) {

    console.error("❌ AI error:", error.response?.data || error.message);

    throw new Error("AI analysis failed");
  }
};