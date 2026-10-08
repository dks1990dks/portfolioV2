import React from "react";

export default function StatusBadge({ status }) {
  const statusStyles = {
    New: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    Contacted: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Meeting Scheduled": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Proposal Sent": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Won: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Lost: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  };

  const style = statusStyles[status] || statusStyles["New"];

  return (
    <span className={`px-2.5 py-1 border rounded-full text-xs font-medium whitespace-nowrap ${style}`}>
      {status}
    </span>
  );
}