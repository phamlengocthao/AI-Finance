import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Terms() {
  const { t, i18n } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState("2024-03-13");
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sections for quick navigation
  const sections = [
    { id: "service", title: t("terms.service_title") },
    { id: "user", title: t("terms.user_title") },
    { id: "advice", title: t("terms.advice_title") },
    { id: "liability", title: t("terms.liability_title") },
    { id: "termination", title: t("terms.termination_title") }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header với gradient */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <span>{t("terms.back")}</span>
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
              📋 {t("terms.effective_date", { defaultValue: "Có hiệu lực từ" })}: {lastUpdated}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("terms.title")}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t("terms.intro")}
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="h-8 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 sticky top-4 z-10 backdrop-blur bg-opacity-90 dark:bg-opacity-90">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
            {t("terms.quick_nav", { defaultValue: "Điều khoản chính" })}
          </h2>
          <div className="flex flex-wrap gap-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${section.id}`}
                onClick={() => setActiveSection(index)}
                className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                  activeSection === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Terms sections */}
        <div className="space-y-8">
          {/* 1. Service Terms */}
          <Block 
            id="section-service"
            title={t("terms.service_title")}
            icon="⚖️"
          >
            <div className="prose prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("terms.service_desc")}
              </p>
              
              {/* Service highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t("terms.service_feature1", { defaultValue: "Phân tích AI" })}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("terms.service_feature1_desc", { defaultValue: "Xử lý dữ liệu tài chính thông minh" })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t("terms.service_feature2", { defaultValue: "Bảo mật dữ liệu" })}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("terms.service_feature2_desc", { defaultValue: "Mã hóa đầu cuối cho mọi giao dịch" })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Block>

          {/* 2. User Responsibilities */}
          <Block 
            id="section-user"
            title={t("terms.user_title")}
            icon="👤"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("terms.user_desc", { defaultValue: "Khi sử dụng dịch vụ, bạn đồng ý:" })}
            </p>
            <ul className="space-y-3">
              {t("terms.user_items", { returnObjects: true }).map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-purple-500 font-bold text-lg">✓</span>
                  <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Block>

          {/* 3. AI Advice Disclaimer */}
          <Block 
            id="section-advice"
            title={t("terms.advice_title")}
            icon="🤖"
          >
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    {t("terms.advice_desc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                    <span>💡</span>
                    <span>{t("terms.advice_note", { defaultValue: "Luôn tham khảo ý kiến chuyên gia tài chính trước khi đưa ra quyết định đầu tư" })}</span>
                  </div>
                </div>
              </div>
            </div>
          </Block>

          {/* 4. Limitation of Liability */}
          <Block 
            id="section-liability"
            title={t("terms.liability_title")}
            icon="🛡️"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.liability_desc")}
              </p>
              
              {/* Liability limits */}
              <div className="grid gap-3">
                {[
                  {
                    icon: "📊",
                    title: t("terms.liability_accuracy", { defaultValue: "Độ chính xác của dữ liệu" }),
                    desc: t("terms.liability_accuracy_desc", { defaultValue: "Không chịu trách nhiệm cho quyết định đầu tư dựa trên phân tích AI" })
                  },
                  {
                    icon: "🔌",
                    title: t("terms.liability_service", { defaultValue: "Gián đoạn dịch vụ" }),
                    desc: t("terms.liability_service_desc", { defaultValue: "Bảo trì định kỳ có thể gây gián đoạn tạm thời" })
                  },
                  {
                    icon: "🔐",
                    title: t("terms.liability_security", { defaultValue: "Bảo mật thông tin" }),
                    desc: t("terms.liability_security_desc", { defaultValue: "Cam kết bảo vệ dữ liệu nhưng không chịu trách nhiệm cho hành vi tấn công từ bên thứ ba" })
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Block>

          {/* 5. Termination */}
          <Block 
            id="section-termination"
            title={t("terms.termination_title")}
            icon="⏰"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                {t("terms.termination_desc")}
              </p>
              
              {/* Termination reasons */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                <h4 className="font-semibold mb-3 dark:text-white">
                  {t("terms.termination_reasons", { defaultValue: "Các trường hợp chấm dứt:" })}
                </h4>
                <ul className="space-y-2">
                  {[
                    t("terms.termination_reason1", { defaultValue: "Vi phạm điều khoản sử dụng" }),
                    t("terms.termination_reason2", { defaultValue: "Không hoạt động trong 12 tháng" }),
                    t("terms.termination_reason3", { defaultValue: "Theo yêu cầu của cơ quan pháp luật" }),
                    t("terms.termination_reason4", { defaultValue: "Ngừng cung cấp dịch vụ" })
                  ].map((reason, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-purple-500">•</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Block>
        </div>

        {/* Acceptance section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">📝</span>
              <h2 className="text-2xl font-bold">
                {t("terms.acceptance_title", { defaultValue: "Bằng việc tiếp tục sử dụng dịch vụ" })}
              </h2>
            </div>
            <p className="text-white/90 mb-6">
              {t("terms.acceptance_desc", { defaultValue: "Bạn xác nhận đã đọc, hiểu và đồng ý với tất cả các điều khoản trên." })}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              {t("terms.back_to_home", { defaultValue: "Quay lại trang chủ" })}
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} AI Finance. {t("terms.rights") || "All rights reserved."}
        </p>
      </div>
    </div>
  );
}

function Block({ id, title, icon, children }) {
  return (
    <div id={id} className="scroll-mt-24">
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