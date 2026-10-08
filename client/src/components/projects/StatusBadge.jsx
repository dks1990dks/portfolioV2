export default function StatusBadge({ status, label }) {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
      case "live":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";

      case "in-development":
      case "in development":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";

      case "live-in-development":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";

      case "coming-soon":
      case "coming soon":
        return "text-sky-400 bg-sky-500/10 border-sky-500/20";

      case "prototype":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";

      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  const displayLabel = label || status || "Status";

  return (
    <span
      className={`inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getStatusStyles(
        status
      )}`}
    >
      {displayLabel}
    </span>
  );
}