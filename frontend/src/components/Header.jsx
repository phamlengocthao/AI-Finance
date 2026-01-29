import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

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
    <header className="bg-white dark:bg-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          🤖 AI Finance
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {user && (
            <Link to="/history">
              {t("common.history")}
            </Link>
          )}

          {!user ? (
            <Link to="/login">
              {t("auth.login")}
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600 dark:text-gray-300">
                👋 {user.displayName || user.email}
              </span>

              <button
                onClick={logout}
                className="text-xs text-red-500 border px-2 py-1 rounded"
              >
                {t("auth.logout")}
              </button>
            </div>
          )}
        </nav>

        {/* Actions */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setDark(!dark)}
            className="text-xs border px-2 py-1 rounded"
          >
            🌙 / ☀️
          </button>

          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")
            }
            className="text-xs border px-2 py-1 rounded"
          >
            {i18n.language === "vi" ? "EN" : "VI"}
          </button>
        </div>
      </div>
    </header>
  );
}
