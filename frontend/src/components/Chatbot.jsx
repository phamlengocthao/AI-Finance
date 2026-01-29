import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Xin chào! Tôi có thể giúp gì về tài chính hoặc cách dùng app?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    setMessages([...newMessages, { role: "ai", text: data.reply }]);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full w-14 h-14 shadow-xl text-xl"
      >
        🤖
      </button>

      {/* Chat box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col">
          <div className="p-3 font-semibold border-b">AI Assistant</div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-indigo-100 text-right"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2 text-sm"
              placeholder="Hỏi về tài chính hoặc cách dùng app..."
            />
            <button onClick={sendMessage} className="text-indigo-600 font-bold">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
