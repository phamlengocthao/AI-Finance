import { useTranslation } from "react-i18next";
import robotImg from "../assets/robot.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Brand */}
        <div className="flex flex-col items-center text-center">
          {/* Logo và icon */}
            <div className="relative mb-4">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            {/* Logo image */}
            <img
              src={robotImg}
              alt="AI Robot"
              className="relative w-20 h-20 object-contain mx-auto"
            />
          </div>

          {/* Title với hiệu ứng glow */}
          <h1 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2"
            style={{ textShadow: '0 0 20px rgba(59,130,246,0.5)' }}
          >
            AI Finance
          </h1>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-xs max-w-[200px] mx-auto leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-indigo-600 cursor-pointer">
                {t("footer.upload")}
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                {t("footer.analysis")}
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                {t("footer.history")}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <a href="/terms" className="hover:text-indigo-600">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-600">
                  {t("footer.privacy")}
                </a>
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                {t("footer.contact")}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-4 flex justify-center text-xs text-gray-500 dark:text-gray-400">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
