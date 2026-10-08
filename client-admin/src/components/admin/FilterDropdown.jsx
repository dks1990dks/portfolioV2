import React from "react";
import { Filter } from "lucide-react";

export default function FilterDropdown({ value, onChange, options = [] }) {
  return (
    <div className="relative flex items-center">
      <Filter className="w-3.5 h-3.5 absolute left-3 text-slate-500 pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-8 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 focus:outline-none focus:border-cyan-400 transition appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}