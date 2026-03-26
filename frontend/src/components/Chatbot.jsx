import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import robotImg from "../assets/robot.png";

export default function Chatbot() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "ai", 
      text: t("chatbot.welcome_message"),
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [hasMoreHistory, setHasMoreHistory] = useState(true);
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // Update welcome message when language changes
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === "ai") {
      setMessages([
        { 
          role: "ai", 
          text: t("chatbot.welcome_message"),
          timestamp: new Date()
        }
      ]);
    }
  }, [i18n.language, t]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (shouldAutoScroll) {
      scrollToBottom();
    }
  }, [messages, shouldAutoScroll]);

  // Check if user scrolled up manually
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
    
    setShouldAutoScroll(isAtBottom);
  };

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      // Reset scroll state when opening
      setShouldAutoScroll(true);
    }
  }, [open]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToTop = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  // Load more history (simulate)
  const loadMoreHistory = async () => {
    if (isLoadingHistory || !hasMoreHistory) return;
    
    setIsLoadingHistory(true);
    
    // Simulate loading older messages
    setTimeout(() => {
      const olderMessages = [
        {
          role: "user",
          text: "Tôi có thể upload file gì?",
          timestamp: new Date(Date.now() - 3600000)
        },
        {
          role: "ai",
          text: "Bạn có thể upload các file PDF, Excel và CSV. Hệ thống sẽ tự động phân tích nội dung tài chính.",
          timestamp: new Date(Date.now() - 3500000)
        },
        {
          role: "user",
          text: "Dữ liệu có được bảo mật không?",
          timestamp: new Date(Date.now() - 3400000)
        },
        {
          role: "ai",
          text: "Chúng tôi sử dụng mã hóa SSL 256-bit và không chia sẻ dữ liệu với bên thứ ba.",
          timestamp: new Date(Date.now() - 3300000)
        }
      ];
      
      // Save current scroll position
      const previousHeight = messagesContainerRef.current?.scrollHeight;
      
      setMessages(prev => [...olderMessages, ...prev]);
      setHasMoreHistory(false); // No more history after this load
      setIsLoadingHistory(false);
      
      // Restore scroll position after loading
      setTimeout(() => {
        if (messagesContainerRef.current && previousHeight) {
          const newHeight = messagesContainerRef.current.scrollHeight;
          messagesContainerRef.current.scrollTop = newHeight - previousHeight;
        }
      }, 100);
    }, 1000);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input, timestamp: new Date() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);
    setShouldAutoScroll(true); // Enable auto-scroll when sending new message

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, language: i18n.language })
      });

      const data = await res.json();
      
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
        text: t("chatbot.error_message"),
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

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return t("chatbot.today") || "Hôm nay";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return t("chatbot.yesterday") || "Hôm qua";
    } else {
      return date.toLocaleDateString();
    }
  };

  // Group messages by date
  const groupMessagesByDate = () => {
    const groups = [];
    let currentDate = null;
    
    messages.forEach((message, index) => {
      const messageDate = new Date(message.timestamp).toDateString();
      if (messageDate !== currentDate) {
        groups.push({
          date: messageDate,
          messages: [message],
          index: index
        });
        currentDate = messageDate;
      } else {
        groups[groups.length - 1].messages.push(message);
      }
    });
    
    return groups;
  };

  const getSuggestions = () => {
    if (i18n.language === 'vi') {
      return [
        "Làm sao để phân tích file?",
        "Các tính năng chính?",
        "Bảo mật dữ liệu thế nào?",
        "Hỗ trợ định dạng file nào?"
      ];
    }
    return [
      "How to analyze files?",
      "What are main features?",
      "How is data secured?",
      "Supported file formats?"
    ];
  };

  const messageGroups = groupMessagesByDate();

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 group z-50"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div className="relative w-14 h-14 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full shadow-xl flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform">
            <img 
              src={robotImg} 
              alt="AI Robot" 
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
          </div>
          {!open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          )}
        </div>
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[95vw] sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-50" style={{ height: '600px', maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4 text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={robotImg} 
                  alt="AI Robot" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{t("chatbot.title")}</h3>
                <p className="text-xs text-cyan-100">
                  {t("chatbot.status")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Scroll to top button */}
                {messages.length > 5 && (
                  <button 
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors p-1"
                    title="Scroll to top"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                )}
                <button 
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container with Scroll */}
          <div 
            ref={messagesContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900"
          >
            {/* Load more history button */}
            {hasMoreHistory && (
              <div className="flex justify-center mb-4">
                <button
                  onClick={loadMoreHistory}
                  disabled={isLoadingHistory}
                  className="text-xs px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 disabled:opacity-50"
                >
                  {isLoadingHistory ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("chatbot.loading") || "Đang tải..."}
                    </span>
                  ) : (
                    t("chatbot.load_more") || "Tải tin nhắn cũ"
                  )}
                </button>
              </div>
            )}

            {/* Messages grouped by date */}
            <div className="space-y-6">
              {messageGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {/* Date divider */}
                  <div className="flex justify-center mb-4">
                    <div className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      {formatDate(new Date(group.date))}
                    </div>
                  </div>
                  
                  {/* Messages in this date group */}
                  <div className="space-y-4">
                    {group.messages.map((m, i) => (
                      <div
                        key={`${groupIndex}-${i}`}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {/* Avatar for AI messages */}
                        {m.role === "ai" && (
                          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mr-2 mt-1">
                            <img 
                              src={robotImg} 
                              alt="AI" 
                              className="w-full h-full object-contain bg-cyan-100 dark:bg-gray-700 p-1"
                            />
                          </div>
                        )}
                        
                        <div className={`max-w-[85%] ${m.role === "user" ? "order-1" : ""}`}>
                          {/* Message bubble */}
                          <div
                            className={`p-3 rounded-2xl ${
                              m.role === "user"
                                ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-br-none"
                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap leading-relaxed break-words">
                              {m.text}
                            </p>
                          </div>
                          
                          {/* Timestamp */}
                          <p className={`text-xs mt-1 text-gray-500 ${m.role === "user" ? "text-right" : "ml-2"}`}>
                            {formatTime(m.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mr-2">
                    <img 
                      src={robotImg} 
                      alt="AI" 
                      className="w-full h-full object-contain bg-cyan-100 dark:bg-gray-700 p-1"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick suggestions - only show when few messages */}
          {messages.length <= 2 && (
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-2 font-medium">
                {t("chatbot.suggestions_title")}
              </p>
              <div className="flex flex-wrap gap-2">
                {getSuggestions().map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(suggestion);
                      setTimeout(() => sendMessage(), 100);
                    }}
                    className="text-xs px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 hover:shadow-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm transition-all"
                  placeholder={t("chatbot.input_placeholder")}
                />
                {input && (
                  <button
                    onClick={() => setInput("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Footer note */}
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
              {t("chatbot.footer_note")}
            </p>
          </div>
        </div>
      )}

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