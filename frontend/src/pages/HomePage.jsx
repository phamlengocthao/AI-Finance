import Header from "../components/Header";
import UploadFile from "../components/UploadFile";
import Result from "../components/Result";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import robotImg from "../assets/robot.png";

export default function HomePage() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        {!user ? (
          // TRANG DÀNH CHO NGƯỜI DÙNG CHƯA ĐĂNG NHẬP
          <div className="max-w-2xl mx-auto">
            {/* Hero Illustration */}
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <span className="text-5xl">🔒</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {t("home.welcome_title")}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {t("home.welcome_description")}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: "📊",
                  title: t("home.feature_analysis"),
                  desc: t("home.feature_analysis_desc")
                },
                {
                  icon: "🔐",
                  title: t("home.feature_secure"),
                  desc: t("home.feature_secure_desc")
                },
                {
                  icon: "⚡",
                  title: t("home.feature_fast"),
                  desc: t("home.feature_fast_desc")
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Login Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {t("home.ready_to_start")}
                </h2>
                <p className="text-blue-100">
                  {t("home.login_to_continue")}
                </p>
              </div>

              <div className="p-8">
                <div className="flex flex-col items-center">
                  {/* Avatar/Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                    <img
                      src="../assets/Cute pastel robot mascot.png"
                      alt="AI Robot"
                      className="w-16 h-16 mx-auto mb-3"
                    />
                  </div>

                  {/* Benefits list */}
                  <div className="w-full space-y-3 mb-6">
                    {[
                      t("home.benefit_1"),
                      t("home.benefit_2"),
                      t("home.benefit_3"),
                      t("home.benefit_4")
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-500">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Login Button */}
                  <Link
                    to="/login"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/30 w-full"
                  >
                    <span className="mr-2">{t("home.login_now")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    {t("home.login_note")}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex justify-center items-center gap-6 mt-8 text-gray-500 dark:text-gray-400">
              <span>🔒 {t("home.ssl_badge")}</span>
              <span>⚡ {t("home.uptime_badge")}</span>
              <span>💎 {t("home.support_badge")}</span>
            </div>
          </div>
        ) : (
          // TRANG DÀNH CHO NGƯỜI DÙNG ĐÃ ĐĂNG NHẬP
          <div className="space-y-8">
            {/* Welcome banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    {t("home.welcome_back")}
                  </h1>
                  <p className="text-blue-100">
                    {t("home.upload_prompt")}
                  </p>
                </div>
                <div className="text-6xl opacity-50">
                  <img
                      src={robotImg}
                      alt="AI Robot"
                      className="w-16 h-16 mx-auto mb-3"
                    />
                </div>
              </div>
            </div>

            {/* UPLOAD FILE → NHẬN DATA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <UploadFile
                onResult={(dataFromBackend) => {
                  console.log("📥 DATA TỪ BACKEND:", dataFromBackend);
                  setResult(dataFromBackend);
                }}
              />
            </div>

            {/* HIỂN THỊ RESULT */}
            {result && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <Result data={result} />
              </div>
            )}

            {/* Quick tips */}
            {!result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{t("home.tip_title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("home.tip_description")}
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">{t("home.support_title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("home.support_description")}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}