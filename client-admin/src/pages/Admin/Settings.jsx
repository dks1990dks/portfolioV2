import React from "react";
import { Save, Lock, Mail } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">System Settings</h1>
        <p className="text-slate-400 text-xs">Configure notifications, API tokens, and profile preferences.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Notification Email</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="email"
              defaultValue="contact@deepakcodes.com"
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <button className="px-5 py-2.5 bg-cyan-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-cyan-400 transition flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </div>
    </div>
  );
}