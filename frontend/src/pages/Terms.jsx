import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Terms() {
  const { t, i18n } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-sm">
      {/* Top actions */}
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="text-sm text-indigo-600 hover:underline"
        >
          ← {t("terms.back")}
        </Link>

        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "vi" ? "en" : "vi")
          }
          className="text-xs border px-3 py-1 rounded"
        >
          VI / EN
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6">
        {t("terms.title")}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {t("terms.intro")}
      </p>

      <div className="space-y-8">
        <Block title={t("terms.service_title")}>
          <p>{t("terms.service_desc")}</p>
        </Block>

        <Block title={t("terms.user_title")}>
          <ul className="list-disc ml-5 space-y-2">
            {t("terms.user_items", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
        </Block>

        <Block title={t("terms.advice_title")}>
          <p>{t("terms.advice_desc")}</p>
        </Block>

        <Block title={t("terms.liability_title")}>
          <p>{t("terms.liability_desc")}</p>
        </Block>

        <Block title={t("terms.termination_title")}>
          <p>{t("terms.termination_desc")}</p>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
