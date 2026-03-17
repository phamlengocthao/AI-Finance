import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function UploadFile({ onResult }) {
  const { t } = useTranslation();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= HANDLE FILE ================= */

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    /* check file size (10MB) */
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File quá lớn (tối đa 10MB)");
      return;
    }

    /* check file type */
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Chỉ hỗ trợ PDF / DOC / DOCX");
      return;
    }

    setFile(selectedFile);
    setError("");
  };

  /* ================= ANALYZE ================= */

  const handleAnalyze = async () => {
    if (!file) {
      setError("Vui lòng chọn file trước");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Phân tích thất bại");
      }

      console.log("AI RESULT:", result);

      onResult?.(result.data);

    } catch (err) {

      console.error(err);

      setError(err.message || "Không thể phân tích báo cáo");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 px-4">
      <div
        className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800
        border-2 border-dashed border-indigo-300 dark:border-indigo-600
        rounded-2xl p-10 text-center"
      >
        <div className="text-5xl mb-4">📁</div>

        <h2 className="text-lg font-semibold mb-2">
          {t("upload.title")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {t("upload.hint")}
        </p>

        {/* Choose file */}
        <label className="inline-block cursor-pointer">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="hidden"
          />

          <span
            className="inline-block bg-indigo-600 text-white px-6 py-2
            rounded-full text-sm font-medium"
          >
            📂 {t("common.choose_file")}
          </span>
        </label>

        {file && (
          <div className="mt-6 text-sm bg-indigo-50 dark:bg-gray-700 p-3 rounded-lg">
            ✅ <strong>{file.name}</strong>
          </div>
        )}

        {/* Analyze button */}

        <div className="mt-8">
          <button
            onClick={handleAnalyze}
            disabled={loading || !file}
            className="bg-gradient-to-r from-indigo-600 to-purple-600
            text-white px-8 py-3 rounded-xl font-semibold
            hover:opacity-90 disabled:opacity-50"
          >
            {loading
              ? "🤖 AI đang phân tích..."
              : t("common.analyze")}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-500">{error}</p>
        )}
      </div>
    </section>
  );
}