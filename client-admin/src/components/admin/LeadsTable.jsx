import React from "react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

export default function LeadsTable({ leads, onSelectLead, onStatusChange }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl">
      <table className="w-full text-left text-xs text-slate-300">
        <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase font-semibold tracking-wider">
          <tr>
            <th className="py-3.5 px-4">Lead / Company</th>
            <th className="py-3.5 px-4">Project & Industry</th>
            <th className="py-3.5 px-4">Company Size</th>
            <th className="py-3.5 px-4">Contact Via</th>
            <th className="py-3.5 px-4">Budget</th>
            <th className="py-3.5 px-4">Priority</th>
            <th className="py-3.5 px-4">Status</th>
            <th className="py-3.5 px-4">Date</th>
            <th className="py-3.5 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60">
          {leads.map((lead) => (
            <tr
              key={lead._id || lead.id}
              className="hover:bg-slate-800/40 transition cursor-pointer"
              onClick={() => onSelectLead(lead)}
            >
              {/* Lead & Company */}
              <td className="py-4 px-4">
                <div className="font-semibold text-white text-sm">
                  {lead.fullName}
                </div>
                <div className="text-slate-400 text-[11px]">
                  {lead.email}
                </div>
                {lead.company && (
                  <div className="text-cyan-400 text-[11px] font-medium">
                    • {lead.company}
                  </div>
                )}
              </td>

              {/* Project & Industry */}
              <td className="py-4 px-4">
                <div className="font-medium text-slate-200">
                  {lead.projectType}
                </div>
                <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
                  {lead.industry || "Other"}
                </span>
              </td>

              {/* Company Size */}
              <td className="py-4 px-4 font-medium text-slate-300">
                {lead.companySize || "1–10"}
              </td>

              {/* Preferred Contact Channel */}
              <td className="py-4 px-4">
                <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">
                  {lead.preferredCommunication || "Email"}
                </span>
              </td>

              {/* Budget */}
              <td className="py-4 px-4 font-semibold text-emerald-400">
                {lead.budget}
              </td>

              {/* Priority */}
              <td className="py-4 px-4">
                <PriorityBadge priority={lead.priority || "Medium"} />
              </td>

              {/* Status */}
              <td className="py-4 px-4">
                <StatusBadge status={lead.status} />
              </td>

              {/* Date */}
              <td className="py-4 px-4 text-slate-400 whitespace-nowrap">
                {new Date(lead.createdAt || lead.date).toLocaleDateString()}
              </td>

              {/* Actions */}
              <td
                className="py-4 px-4 text-right"
                onClick={(e) => e.stopPropagation()}
              >
                <select
                  value={lead.status}
                  onChange={(e) => onStatusChange(lead._id, e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 text-xs focus:border-cyan-400 outline-none cursor-pointer"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Meeting Scheduled">Meeting Scheduled</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Won">Won</option>
                  <option value="Lost">Lost</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}