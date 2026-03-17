import { useState, useRef, useEffect } from "react";
import robotImg from "../assets/robot.png"; // Import ảnh robot

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "ai", 
      text: "Xin chào! Tôi là trợ lý AI của AI Finance. Tôi có thể giúp gì về tài chính hoặc cách dùng app?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input, timestamp: new Date() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      
      // Simulate typing delay for natural feel
      setTimeout(() => {
        setMessages([...newMessages, { 
          role: "ai", 
          text: data.reply,
          timestamp: new Date()
        }]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      setMessages([...newMessages, { 
        role: "ai", 
        text: "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button với animation */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 group"
      >
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          
          {/* Main button - Thay icon bằng ảnh */}
          <div className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-xl flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform">
            <img 
              src={robotImg} 
              alt="AI Robot" 
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
          </div>

          {/* Notification badge (demo) */}
          {!open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </div>
      </button>

      {/* Chat box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header - Thay icon bằng ảnh */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={robotImg} 
                  alt="AI Robot" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-blue-100">Online • Trả lời trong vài giây</p>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {/* Avatar cho AI messages */}
                  {m.role === "ai" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mr-2 mt-1">
                      <img 
                        src={robotImg} 
                        alt="AI" 
                        className="w-full h-full object-contain bg-blue-100 dark:bg-gray-700 p-1"
                      />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${m.role === "user" ? "order-1" : ""}`}>
                    {/* Message bubble */}
                    <div
                      className={`p-3 rounded-2xl ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none"
                          : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                    </div>
                    
                    {/* Timestamp */}
                    <p className={`text-xs mt-1 text-gray-500 ${m.role === "user" ? "text-right" : "ml-2"}`}>
                      {formatTime(m.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator with avatar */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mr-2">
                    <img 
                      src={robotImg} 
                      alt="AI" 
                      className="w-full h-full object-contain bg-blue-100 dark:bg-gray-700 p-1"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Gợi ý nhanh:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Làm sao để phân tích file?",
                  "Các tính năng chính?",
                  "Bảo mật dữ liệu?",
                  "Hỗ trợ định dạng file?"
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(suggestion);
                      setTimeout(() => sendMessage(), 100);
                    }}
                    className="text-xs px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                  placeholder="Nhập câu hỏi của bạn..."
                />
                {input && (
                  <button
                    onClick={() => setInput("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className={`px-4 py-3 rounded-xl transition-all ${
                  input.trim() && !isTyping
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                <span className="text-xl">➤</span>
              </button>
            </div>
            
            {/* Footer note */}
            <p className="text-xs text-center text-gray-500 mt-2">
              AI có thể mắc lỗi. Hãy kiểm tra thông tin quan trọng.
            </p>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}