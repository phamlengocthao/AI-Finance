import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import robotImg from "../assets/robot.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'
    } border-b border-gray-200/50 dark:border-gray-700/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group relative"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Logo container */}
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl p-2 shadow-lg group-hover:scale-105 transition-all duration-300">
              <img
                src={robotImg}
                alt="AI Robot"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>

            {/* Text logo */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                  AI
                </span>
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  Finance
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wider font-medium">
                Smart Financial Assistant
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {user && (
              <Link 
                to="/history" 
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/history')
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <span>{t("common.history")}</span>
                {isActive('/history') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
                )}
              </Link>
            )}

            {!user ? (
              <Link
                to="/login"
                className="relative px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                <span className="relative z-10">{t("auth.login")}</span>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
              </Link>
            ) : (
              <div className="flex items-center gap-3 ml-4">
                {/* User Avatar */}
                <div className="group relative">
                  <div className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                      <div className="relative w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-sm font-bold">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <p className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">
                        {user.displayName || user.email?.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={logout}
                  className="group relative px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:border-red-300 dark:hover:border-red-700"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    <span>🚪</span>
                    <span>{t("auth.logout")}</span>
                  </span>
                </button>
              </div>
            )}
          </nav>

          {/* Actions */}
          <div className="flex gap-2 items-center">
            {/* Theme Toggle - Enhanced */}
            <button
              onClick={() => setDark(!dark)}
              className="relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="relative text-xl">
                {dark ? "🌙" : "☀️"}
              </span>
            </button>

            {/* Language Switcher - Enhanced */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">
                    {i18n.language === "vi" ? "🇻🇳" : "🇺🇸"}
                  </span>
                  <span className="font-semibold">
                    {i18n.language === "vi" ? "VI" : "EN"}
                  </span>
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLanguageMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-slideDown">
                    <div className="p-1">
                      <button
                        onClick={() => changeLanguage('vi')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          i18n.language === 'vi'
                            ? 'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-600 dark:text-cyan-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-xl">🇻🇳</span>
                        <span className="flex-1 text-left text-sm font-medium">Tiếng Việt</span>
                        {i18n.language === 'vi' && (
                          <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => changeLanguage('en')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 mt-1 ${
                          i18n.language === 'en'
                            ? 'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-600 dark:text-cyan-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-xl">🇺🇸</span>
                        <span className="flex-1 text-left text-sm font-medium">English</span>
                        {i18n.language === 'en' && (
                          <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slideDown">
            <div className="space-y-2">
              {user && (
                <Link 
                  to="/history" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive('/history')
                      ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {t("common.history")}
                </Link>
              )}

              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-300"
                >
                  {t("auth.login")}
                </Link>
              ) : (
                <div className="px-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">
                        {user.displayName || user.email?.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span>🚪</span>
                      <span>{t("auth.logout")}</span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
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
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}