export const callChatModel = async (message) => {

  const msg = message.toLowerCase();

  if (msg.includes("file")) {
    return "Bạn có thể upload file PDF hoặc Excel để AI phân tích.";
  }

  if (msg.includes("tính năng")) {
    return "Ứng dụng có các tính năng: phân tích báo cáo tài chính, chatbot AI và dashboard.";
  }

  if (msg.includes("bảo mật")) {
    return "File upload được xử lý tạm thời và có thể xóa sau khi phân tích.";
  }

  if (msg.includes("xin chào") || msg.includes("hello")) {
    return "Xin chào! Tôi là trợ lý AI của AI Finance.";
  }

  return "Cảm ơn câu hỏi của bạn! Tôi đang học thêm để trả lời tốt hơn.";
};