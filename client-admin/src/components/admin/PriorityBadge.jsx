import React from "react";

export default function PriorityBadge({ priority }) {
  const priorityStyles = {
    High: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    Medium: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Low: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  };

  const style = priorityStyles[priority] || priorityStyles["Medium"];

  return (
    <span className={`px-2.5 py-0.5 border rounded-md text-[10px] font-bold uppercase tracking-wider ${style}`}>
      {priority}
    </span>
  );
}