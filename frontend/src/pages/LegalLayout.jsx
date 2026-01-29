export default function LegalLayout({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}
