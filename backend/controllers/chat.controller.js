import { callChatModel } from "../services/chat.service.js";

export const chatWithAI = async (req, res) => {
  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Tin nhắn trống"
      });
    }

    const reply = await callChatModel(message);

    res.json({
      reply
    });

  } catch (err) {

    console.error("Chat error:", err);

    res.status(500).json({
      reply: "AI đang gặp sự cố"
    });
  }
};