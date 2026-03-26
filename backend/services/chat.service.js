

const translations = {
  vi: {
    // Responses
    file_response: "Bạn có thể upload file PDF, Excel hoặc CSV để AI phân tích tài chính.",
    features_response: "Ứng dụng có các tính năng chính: 📊 Phân tích báo cáo tài chính tự động, 🤖 Chatbot AI tư vấn 24/7, 📈 Dashboard trực quan, 💾 Lưu trữ lịch sử phân tích, 📄 Xuất báo cáo PDF.",
    security_response: "🔒 Dữ liệu của bạn được bảo mật tuyệt đối! Chúng tôi sử dụng mã hóa SSL 256-bit, file upload được xử lý tạm thời và tự động xóa sau khi phân tích. Không chia sẻ dữ liệu với bên thứ ba.",
    greeting_response: "Xin chào! 👋 Tôi là trợ lý AI của AI Finance. Tôi có thể giúp gì cho bạn về tài chính hôm nay?",
    ai_response: "Tôi sử dụng công nghệ AI tiên tiến để phân tích dữ liệu tài chính, dự đoán xu hướng và đưa ra khuyến nghị dựa trên dữ liệu của bạn.",
    help_response: "Tôi có thể giúp bạn:\n• Phân tích báo cáo tài chính\n• Trả lời câu hỏi về tài chính\n• Hướng dẫn sử dụng app\n• Giải thích các chỉ số tài chính\n\nBạn muốn hỏi gì?",
    default_response: "Cảm ơn câu hỏi của bạn! 🙏 Tôi đang học thêm để trả lời tốt hơn. Bạn có thể hỏi về: file upload, tính năng, bảo mật, hoặc cách sử dụng app."
  },
  en: {
    // Responses
    file_response: "You can upload PDF, Excel, or CSV files for AI financial analysis.",
    features_response: "Main features: 📊 Automated financial report analysis, 🤖 24/7 AI chatbot consultation, 📈 Visual dashboard, 💾 Analysis history storage, 📄 PDF report export.",
    security_response: "🔒 Your data is completely secure! We use SSL 256-bit encryption, uploaded files are temporarily processed and automatically deleted after analysis. No data sharing with third parties.",
    greeting_response: "Hello! 👋 I'm AI Finance Assistant. How can I help you with your financial needs today?",
    ai_response: "I use advanced AI technology to analyze financial data, predict trends, and provide recommendations based on your data.",
    help_response: "I can help you with:\n• Financial report analysis\n• Answer financial questions\n• App usage guidance\n• Explain financial metrics\n\nWhat would you like to know?",
    default_response: "Thank you for your question! 🙏 I'm learning to provide better answers. You can ask about: file upload, features, security, or how to use the app."
  }
};

// Keywords mapping for different languages
const keywords = {
  vi: {
    file: ["file", "upload", "tải lên", "định dạng", "pdf", "excel", "csv"],
    features: ["tính năng", "chức năng", "làm được gì", "có thể làm", "feature"],
    security: ["bảo mật", "an toàn", "riêng tư", "dữ liệu", "security", "privacy"],
    greeting: ["xin chào", "chào", "hello", "hi", "hey", "chào bạn"],
    ai: ["ai", "trí tuệ nhân tạo", "công nghệ", "machine learning"],
    help: ["giúp", "hướng dẫn", "cách dùng", "support", "help"]
  },
  en: {
    file: ["file", "upload", "format", "pdf", "excel", "csv", "document"],
    features: ["feature", "function", "capability", "what can", "do"],
    security: ["security", "safe", "privacy", "data", "protect", "encryption"],
    greeting: ["hello", "hi", "hey", "greeting", "good morning", "good afternoon"],
    ai: ["ai", "artificial intelligence", "machine learning", "ml"],
    help: ["help", "guide", "how to", "support", "assist"]
  }
};

/**
 * Detect language of the message
 * @param {string} message - User message
 * @returns {string} 'vi' or 'en'
 */
const detectLanguage = (message) => {
  // Vietnamese characters detection
  const vietnameseChars = /[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/i;
  
  if (vietnameseChars.test(message)) {
    return 'vi';
  }
  
  // Check for English keywords
  const englishWords = keywords.en.greeting.concat(keywords.en.file, keywords.en.features);
  const hasEnglish = englishWords.some(word => message.toLowerCase().includes(word));
  
  if (hasEnglish && !vietnameseChars.test(message)) {
    return 'en';
  }
  
  // Default to Vietnamese if message contains Vietnamese or no clear indication
  return message.match(/[a-zA-Z]/g)?.length > message.match(/[a-z]/g)?.length * 0.7 ? 'en' : 'vi';
};

/**
 * Check if message contains any of the keywords
 * @param {string} message - User message
 * @param {Array} keywordsList - List of keywords to check
 * @returns {boolean}
 */
const containsKeyword = (message, keywordsList) => {
  return keywordsList.some(keyword => message.includes(keyword));
};

/**
 * Get response based on message and language
 * @param {string} message - User message
 * @param {string} language - 'vi' or 'en' (optional, auto-detect if not provided)
 * @returns {string}
 */
export const callChatModel = async (message, language = null) => {
  // Convert to lowercase for easier matching
  const msg = message.toLowerCase().trim();
  
  // Auto-detect language if not specified
  const lang = language || detectLanguage(message);
  const t = translations[lang];
  const kw = keywords[lang];
  
  // Check for empty message
  if (!msg) {
    return lang === 'vi' 
      ? "Vui lòng nhập câu hỏi của bạn." 
      : "Please enter your question.";
  }
  
  // Check for file-related questions
  if (containsKeyword(msg, kw.file)) {
    return t.file_response;
  }
  
  // Check for features-related questions
  if (containsKeyword(msg, kw.features)) {
    return t.features_response;
  }
  
  // Check for security-related questions
  if (containsKeyword(msg, kw.security)) {
    return t.security_response;
  }
  
  // Check for greetings
  if (containsKeyword(msg, kw.greeting)) {
    return t.greeting_response;
  }
  
  // Check for AI-related questions
  if (containsKeyword(msg, kw.ai)) {
    return t.ai_response;
  }
  
  // Check for help/support questions
  if (containsKeyword(msg, kw.help)) {
    return t.help_response;
  }
  
  // Check for specific financial terms (can be expanded)
  const financialTerms = {
    vi: ["roi", "roe", "lợi nhuận", "doanh thu", "chi phí", "dòng tiền", "đầu tư"],
    en: ["roi", "roe", "profit", "revenue", "cost", "cash flow", "investment", "stock"]
  };
  
  if (financialTerms[lang].some(term => msg.includes(term))) {
    if (lang === 'vi') {
      return "Đây là câu hỏi về tài chính chuyên sâu. Bạn có thể upload báo cáo tài chính để tôi phân tích chi tiết hơn! 📊";
    } else {
      return "This is an in-depth financial question. You can upload financial reports for me to analyze in detail! 📊";
    }
  }
  
  // Default response with suggestions
  return t.default_response;
};

// Optional: Function to get response with context (for more advanced usage)
export const callChatModelWithContext = async (message, language, conversationHistory = []) => {
  // This can be expanded to include conversation context
  const response = await callChatModel(message, language);
  
  // Add context awareness if needed
  const lastMessages = conversationHistory.slice(-3);
  const hasAskedAboutFile = lastMessages.some(m => 
    m.toLowerCase().includes('file') || m.toLowerCase().includes('upload')
  );
  
  if (hasAskedAboutFile && message.toLowerCase().includes('how')) {
    if (language === 'vi') {
      return "Để upload file, bạn chỉ cần kéo thả file vào khu vực upload hoặc click để chọn file từ máy tính. Hệ thống hỗ trợ PDF, Excel và CSV.";
    } else {
      return "To upload a file, simply drag and drop the file into the upload area or click to select a file from your computer. The system supports PDF, Excel, and CSV formats.";
    }
  }
  
  return response;
};

// Export for testing
export default {
  callChatModel,
  callChatModelWithContext,
  detectLanguage
};