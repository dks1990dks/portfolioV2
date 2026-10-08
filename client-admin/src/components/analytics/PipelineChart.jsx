import React from "react";

export default function PipelineChart({ pipeline }) {
  const stages = [
    { label: "New", count: pipeline?.new || 0, color: "bg-cyan-500" },
    { label: "Contacted", count: pipeline?.contacted || 0, color: "bg-blue-500" },
    { label: "Meeting", count: pipeline?.meeting || 0, color: "bg-purple-500" },
    { label: "Proposal", count: pipeline?.proposal || 0, color: "bg-amber-500" },
    { label: "Won", count: pipeline?.won || 0, color: "bg-emerald-500" },
    { label: "Lost", count: pipeline?.lost || 0, color: "bg-rose-500" },
  ];

  const total = stages.reduce((acc, s) => acc + s.count, 0) || 1;

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
      <h3 className="text-lg font-bold text-white mb-2">Lead Pipeline Funnel</h3>
      <div className="space-y-3">
        {stages.map((stage) => {
          const percentage = Math.round((stage.count / total) * 100);
          return (
            <div key={stage.label} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300 font-semibold">
                <span>{stage.label}</span>
                <span>
                  {stage.count} ({percentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full ${stage.color} transition-all duration-500 rounded-full`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}