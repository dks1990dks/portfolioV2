import React from "react";

export default function StatCard({ title, value, icon: Icon, colorClass }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-1">{title}</p>
        <h3 className="text-3xl font-extrabold text-white">{value}</h3>
      </div>
      <div className={`p-3.5 rounded-xl ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}