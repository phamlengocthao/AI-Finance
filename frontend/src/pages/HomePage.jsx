import Header from "../components/Header";
import UploadFile from "../components/UploadFile";
import Result from "../components/Result";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const { t } = useTranslation();
  const { user } = useAuth();

  // 🔥 STATE CHỨA KẾT QUẢ AI
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto p-4">
        {!user ? (
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 p-6 rounded-xl text-center">
            <p className="text-sm mb-3 text-gray-700 dark:text-gray-200">
              🔒 {t("login_required")}
            </p>

            <Link
              to="/login"
              className="inline-block underline text-blue-600 dark:text-blue-400"
            >
              {t("login_now")}
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* UPLOAD FILE → NHẬN DATA */}
            <UploadFile
              onResult={(dataFromBackend) => {
                console.log("📥 DATA TỪ BACKEND:", dataFromBackend);
                setResult(dataFromBackend);
              }}
            />

            {/* HIỂN THỊ RESULT */}
            <Result data={result} />
          </div>
        )}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
