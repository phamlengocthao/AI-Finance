import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Brand */}
          <div>
            <div className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
              🤖 AI Finance
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
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
