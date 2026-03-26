import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import robotImg from "../assets/robot.png";



export default function Login() {
  const { t } = useTranslation();
  const { login, loginWithGoogle, register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }

      navigate("/");
    } catch (err) {
      alert(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      alert("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        {/* Card chính */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Header với gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">
                 <img
                      src={robotImg}
                      alt="AI Robot"
                      className="w-12 h-12 object-contain"
                    />
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">AI Finance</h1>
            <p className="text-blue-100 mt-1">
              {}{isRegister ? t("auth.register_new") : t("auth.welcome")}
            </p>
          </div>

          {/* Form */}
          <div className="p-6">
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("auth.email")}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  📧
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("auth.password")}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔒
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Nút submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:opacity-90 disabled:opacity-50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-blue-500/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                 {t("auth.processing")}
                </span>
              ) : (
                <span>{isRegister ? t("auth.register_now") : t("auth.login")}</span>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">
                  {t("auth.or_continue")}
                </span>
              </div>
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-200 dark:border-gray-600 py-3 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.787-1.676-4.139-2.701-6.735-2.701-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 8.396 0 10.249-7.85 9.426-11.748l-9.426 0.082z' fill='%234285F4'/%3E%3C/svg%3E";
                }}
              />
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                Google
              </span>
            </button>

            {/* Switch mode */}
            <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
              {}{isRegister ? t("auth.has_account") : t("auth.no_account")}{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {isRegister ? t("auth.login") : t("auth.register_now")}
              </button>
            </p>

            {/* Back home */}
            <p className="text-xs text-center mt-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <span>←</span>
                <span>{t("auth.back_home")}</span>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
         {t("footer.copyright")}
        </p>
      </div>
    </div>
  );
}