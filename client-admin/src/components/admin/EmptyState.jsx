import React from "react";
import { Inbox } from "lucide-react";

export default function EmptyState({ message = "No Leads Found", subtext = "Try changing search filters or adding a new lead." }) {
  return (
    <div className="text-center py-16 px-4 bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl">
      <div className="w-12 h-12 bg-slate-800 text-slate-500 rounded-xl flex items-center justify-center mx-auto mb-3">
        <Inbox className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-300 mb-1">{message}</h3>
      <p className="text-xs text-slate-500 max-w-sm mx-auto">{subtext}</p>
    </div>
  );
}