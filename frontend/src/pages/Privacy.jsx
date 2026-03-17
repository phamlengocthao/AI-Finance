import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState("2024-03-13");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header với gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <span>{t("privacy.back")}</span>
            </Link>

            <button
              onClick={() => i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")}
              className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur transition-all"
            >
              {i18n.language === "vi" ? "English" : "Tiếng Việt"}
            </button>
          </div>

          {/* Header content */}
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
              🔒 {t("privacy.last_updated", { defaultValue: "Cập nhật lần cuối" })}: {lastUpdated}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("privacy.title")}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t("privacy.intro")}
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="h-8 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
            {t("privacy.quick_nav", { defaultValue: "Nội dung chính" })}
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              t("privacy.collect_title"),
              t("privacy.use_title"),
              t("privacy.protect_title"),
              t("privacy.ai_title"),
              t("privacy.change_title")
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Privacy sections */}
        <div className="space-y-8">
          <Block 
            id="section-0"
            title={t("privacy.collect_title")}
            icon="📋"
          >
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {t("privacy.collect_desc", { defaultValue: "Chúng tôi thu thập các thông tin sau để cung cấp dịch vụ tốt nhất:" })}
            </p>
            <ul className="space-y-3">
              {t("privacy.collect_items", { returnObjects: true }).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block 
            id="section-1"
            title={t("privacy.use_title")}
            icon="🎯"
          >
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {t("privacy.use_desc", { defaultValue: "Thông tin của bạn được sử dụng để:" })}
            </p>
            <ul className="space-y-3">
              {t("privacy.use_items", { returnObjects: true }).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block 
            id="section-2"
            title={t("privacy.protect_title")}
            icon="🛡️"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2 dark:text-white">
                  {t("privacy.encryption_title", { defaultValue: "Mã hóa đầu cuối" })}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("privacy.encryption_desc", { defaultValue: "Dữ liệu được mã hóa từ thiết bị của bạn đến máy chủ" })}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold mb-2 dark:text-white">
                  {t("privacy.backup_title", { defaultValue: "Sao lưu định kỳ" })}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("privacy.backup_desc", { defaultValue: "Dữ liệu được sao lưu hàng ngày để đảm bảo an toàn" })}
                </p>
              </div>
            </div>
          </Block>

          <Block 
            id="section-3"
            title={t("privacy.ai_title")}
            icon="🤖"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacy.ai_desc")}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                <span>✨</span>
                <span>{t("privacy.ai_note", { defaultValue: "AI chỉ xử lý dữ liệu ẩn danh, không lưu trữ thông tin cá nhân" })}</span>
              </div>
            </div>
          </Block>

          <Block 
            id="section-4"
            title={t("privacy.change_title")}
            icon="📅"
          >
            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
              <p className="text-gray-600 dark:text-gray-400">
                {t("privacy.change_desc")}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                {t("privacy.change_notice", { defaultValue: "Chúng tôi sẽ thông báo khi có cập nhật quan trọng qua email." })}
              </p>
            </div>
          </Block>
        </div>

        {/* Contact section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              {t("privacy.contact_title", { defaultValue: "Có thắc mắc về quyền riêng tư?" })}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("privacy.contact_desc", { defaultValue: "Liên hệ với chúng tôi để được giải đáp" })}
            </p>
            <a 
              href="mailto:privacy@aifinance.com"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              privacy@aifinance.com
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} AI Finance. {t("privacy.rights") || "All rights reserved."}
        </p>
      </div>
    </div>
  );
}

function Block({ id, title, icon, children }) {
  return (
    <div id={id} className="scroll-mt-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}