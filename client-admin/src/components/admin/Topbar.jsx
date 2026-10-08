import React from "react";
import { Bell, Search, User } from "lucide-react";

export default function Topbar({ adminName = "Deepak Kumar", role = "Super Admin" }) {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-white">Admin CRM</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition relative">
          <Bell className="w-5 h-5" />
          <span className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1.5 right-1.5"></span>
        </button>

        <div className="h-6 w-px bg-slate-800"></div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-sm">
            {adminName.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-slate-200">{adminName}</p>
            <p className="text-[10px] text-slate-400">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}