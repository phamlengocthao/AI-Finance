import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState("2024-03-13");
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const sections = [
    t("privacy.collect_title"),
    t("privacy.use_title"),
    t("privacy.protect_title"),
    t("privacy.ai_title"),
    t("privacy.change_title")
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Modern Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Navigation Bar */}
          <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="font-medium">{t("privacy.back")}</span>
                </Link>

                {/* Enhanced Language Switcher */}
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all border border-white/20 hover:border-white/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {i18n.language === "vi" ? "🇻🇳" : "🇺🇸"}
                      </span>
                      <span className="font-medium text-sm">
                        {i18n.language === "vi" ? "Tiếng Việt" : "English"}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Language Dropdown Menu */}
                  {isLanguageMenuOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsLanguageMenuOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-slideDown">
                        <div className="p-2">
                          <button
                            onClick={() => changeLanguage('vi')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                              i18n.language === 'vi'
                                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <span className="text-2xl">🇻🇳</span>
                            <div className="flex-1 text-left">
                              <p className="font-medium">Tiếng Việt</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Vietnamese</p>
                            </div>
                            {i18n.language === 'vi' && (
                              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>

                          <button
                            onClick={() => changeLanguage('en')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mt-1 ${
                              i18n.language === 'en'
                                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <span className="text-2xl">🇺🇸</span>
                            <div className="flex-1 text-left">
                              <p className="font-medium">English</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Tiếng Anh</p>
                            </div>
                            {i18n.language === 'en' && (
                              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        </div>

                        {/* Divider with current language info */}
                        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800/50">
                          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                            {i18n.language === 'vi' 
                              ? 'Đang sử dụng: Tiếng Việt' 
                              : 'Current language: English'}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm mb-6 backdrop-blur">
              <span className="text-lg">🔒</span>
              <span>{t("privacy.last_updated", { defaultValue: "Cập nhật lần cuối" })}: {lastUpdated}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              {t("privacy.title")}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              {t("privacy.intro")}
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50 dark:text-gray-900" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path fill="currentColor" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Quick Navigation - Modern Card */}
        <div className={`sticky top-24 z-40 transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {t("privacy.quick_nav", { defaultValue: "Nội dung chính" })}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  onClick={() => setActiveSection(index)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === index
                      ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                  }`}
                >
                  {section}
                  {activeSection === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 blur opacity-50 -z-10"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Sections with Modern Cards */}
        <div className="space-y-8 mt-8">
          <Block 
            id="section-0"
            title={t("privacy.collect_title")}
            icon="📋"
            gradient="from-blue-500 to-cyan-500"
          >
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t("privacy.collect_desc", { defaultValue: "Chúng tôi thu thập các thông tin sau để cung cấp dịch vụ tốt nhất:" })}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {t("privacy.collect_items", { returnObjects: true }).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Block>

          <Block 
            id="section-1"
            title={t("privacy.use_title")}
            icon="🎯"
            gradient="from-green-500 to-teal-500"
          >
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t("privacy.use_desc", { defaultValue: "Thông tin của bạn được sử dụng để:" })}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {t("privacy.use_items", { returnObjects: true }).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Block>

          <Block 
            id="section-2"
            title={t("privacy.protect_title")}
            icon="🛡️"
            gradient="from-indigo-500 to-purple-500"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <FeatureCard 
                icon="🔐"
                title={t("privacy.encryption_title", { defaultValue: "Mã hóa đầu cuối" })}
                description={t("privacy.encryption_desc", { defaultValue: "Dữ liệu được mã hóa từ thiết bị của bạn đến máy chủ với công nghệ SSL 256-bit" })}
              />
              <FeatureCard 
                icon="🔄"
                title={t("privacy.backup_title", { defaultValue: "Sao lưu định kỳ" })}
                description={t("privacy.backup_desc", { defaultValue: "Dữ liệu được sao lưu hàng ngày để đảm bảo an toàn và phục hồi nhanh chóng" })}
              />
              <FeatureCard 
                icon="🔒"
                title={t("privacy.access_title", { defaultValue: "Kiểm soát truy cập" })}
                description={t("privacy.access_desc", { defaultValue: "Chỉ nhân viên được ủy quyền mới có thể truy cập dữ liệu của bạn" })}
              />
              <FeatureCard 
                icon="📊"
                title={t("privacy.monitor_title", { defaultValue: "Giám sát liên tục" })}
                description={t("privacy.monitor_desc", { defaultValue: "Hệ thống giám sát 24/7 để phát hiện và ngăn chặn truy cập trái phép" })}
              />
            </div>
          </Block>

          <Block 
            id="section-3"
            title={t("privacy.ai_title")}
            icon="🤖"
            gradient="from-amber-500 to-orange-500"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {t("privacy.ai_desc")}
                  </p>
                  <div className="flex items-center gap-3 text-sm bg-white/50 dark:bg-gray-800/50 rounded-xl p-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                      {t("privacy.ai_note", { defaultValue: "AI chỉ xử lý dữ liệu ẩn danh, không lưu trữ thông tin cá nhân" })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Block>

          <Block 
            id="section-4"
            title={t("privacy.change_title")}
            icon="📅"
            gradient="from-red-500 to-pink-500"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10"></div>
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📢</span>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {t("privacy.change_desc")}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                      <span>🔔</span>
                      <span>{t("privacy.change_notice", { defaultValue: "Chúng tôi sẽ thông báo khi có cập nhật quan trọng qua email." })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur mb-6">
                <span className="text-4xl">📧</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("privacy.contact_title", { defaultValue: "Có thắc mắc về quyền riêng tư?" })}
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                {t("privacy.contact_desc", { defaultValue: "Liên hệ với chúng tôi để được giải đáp" })}
              </p>
              <a 
                href="mailto:privacy@aifinance.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 group"
              >
                <span>privacy@aifinance.com</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AI Finance. {t("privacy.rights") || "All rights reserved."}
          </p>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

// Modern Block Component
function Block({ id, title, icon, gradient, children }) {
  return (
    <div id={id} className="scroll-mt-32">
      <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="relative p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl">{icon}</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}