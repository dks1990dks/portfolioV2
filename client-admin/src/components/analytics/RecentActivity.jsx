import React from "react";
import { Clock, UserCheck, FileText, Calendar, ShieldCheck } from "lucide-react";

export default function RecentActivity({ activities }) {
  const getIcon = (type) => {
    switch (type) {
      case "Proposal Sent":
        return <FileText className="w-4 h-4 text-amber-400" />;
      case "Meeting Scheduled":
        return <Calendar className="w-4 h-4 text-purple-400" />;
      case "Won":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <UserCheck className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities?.map((act, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                {getIcon(act.action)}
              </div>
              <div>
                <p className="text-xs font-bold text-white">{act.clientName}</p>
                <p className="text-[11px] text-slate-400">{act.action}</p>
              </div>
            </div>
            <div className="flex items-center text-[10px] text-slate-500 gap-1">
              <Clock className="w-3 h-3" />
              <span>{act.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}