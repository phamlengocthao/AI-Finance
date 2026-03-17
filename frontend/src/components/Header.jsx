import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import robotImg from "../assets/robot.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo - Layout đã được chỉnh lại */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo image với hiệu ứng */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Image container */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-2 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src={robotImg}
                alt="AI Robot"
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>

          {/* Text logo */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
              <span className="text-gray-800 dark:text-white"> Finance</span>
            </h1>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wider">
              Smart Financial Assistant
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          {user && (
            <Link 
              to="/history" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {t("common.history")}
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
            >
              {t("auth.login")}
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                👋 {user.displayName || user.email}
              </span>

              <button
                onClick={logout}
                className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                {t("auth.logout")}
              </button>
            </div>
          )}
        </nav>

        {/* Actions */}
        <div className="flex gap-3 items-center">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")}
            className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {i18n.language === "vi" ? "EN" : "VI"}
          </button>
        </div>
      </div>
    </header>
  );
}