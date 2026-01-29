import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function History() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/history/${user.uid}`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-6">📜 Lịch sử phân tích</h2>

      <div className="space-y-4">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex justify-between"
          >
            <div>
              <div className="font-medium">{item.fileName}</div>
              <div className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </div>
            </div>

            <button
              onClick={() => download(item.result.rawText)}
              className="text-sm text-indigo-600 underline"
            >
              ⬇️ Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function download(text) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "AI_Report.txt";
  a.click();
  URL.revokeObjectURL(url);
}
