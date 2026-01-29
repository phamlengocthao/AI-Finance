import { useTranslation } from "react-i18next";

export default function Result({ data }) {
  const { t } = useTranslation();

  /* ================= EMPTY STATE ================= */
  if (!data) {
    return (
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow text-center text-gray-400">
          <div className="text-4xl mb-3">🤖</div>

          <h2 className="font-semibold mb-2">
            {t("result.empty")}
          </h2>

          <span className="text-sm">
            {t("result.empty_hint")}
          </span>
        </div>
      </section>
    );
  }

  /* ================= DATA ================= */
  const {
    overview,
    summary,
    metrics,
    recommendations,
    rawText,
    download,
    downloadUrl,
  } = data || {};

  /* ================= DOWNLOAD ================= */
  const handleDownload = () => {
    // ✅ Backend có link download sẵn
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
      return;
    }

    // ✅ Fallback: text AI
    const content =
      download?.content ||
      rawText ||
      JSON.stringify(data, null, 2);

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AI_Financial_Report.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="max-w-5xl mx-auto mt-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">

        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            📊 {t("result.completed")}
          </h2>

          <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full">
            AI Analysis Complete
          </span>
        </div>

        {/* ===== OVERVIEW ===== */}
        {overview && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatCard
              title="Financial Health"
              value={`${overview.score ?? "--"} / 100`}
              color="indigo"
            />
            <StatCard
              title="Risk Level"
              value={overview.risk ?? "--"}
              color="yellow"
            />
            <StatCard
              title="Growth Potential"
              value={overview.growth ?? "--"}
              color="green"
            />
          </div>
        )}

        {/* ===== SUMMARY ===== */}
        {Array.isArray(summary) && (
          <Section title="🧠 AI Summary">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {summary.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* ===== METRICS (DYNAMIC) ===== */}
        {metrics && typeof metrics === "object" && (
          <Section title="📈 Key Metrics">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(metrics).map(([key, value]) => (
                <Metric
                  key={key}
                  label={key}
                  value={value}
                />
              ))}
            </div>
          </Section>
        )}

        {/* ===== RECOMMENDATIONS ===== */}
        {Array.isArray(recommendations) && (
          <Section title="⚠️ AI Recommendations">
            <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl text-sm space-y-1">
              {recommendations.map((r, i) => (
                <div key={i}>• {r}</div>
              ))}
            </div>
          </Section>
        )}

        {/* ===== RAW TEXT ===== */}
        {rawText && (
          <Section title="📄 Full AI Analysis">
            <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-4 rounded-xl overflow-auto max-h-80">
              {rawText}
            </pre>
          </Section>
        )}

        {/* ===== DOWNLOAD ===== */}
        <div className="mt-8 text-right">
          <button
            onClick={handleDownload}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90"
          >
            ⬇️ {t("common.download")}
          </button>
        </div>

      </div>
    </section>
  );
}

/* ================= UI HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}

function StatCard({ title, value, color }) {
  const colors = {
    indigo:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    yellow:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    green:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  };

  return (
    <div className={`p-4 rounded-xl ${colors[color]}`}>
      <div className="text-xs uppercase opacity-70">{title}</div>
      <div className="text-lg font-bold mt-1">{value}</div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold mt-1">
        {value ?? "--"}
      </div>
    </div>
  );
}
