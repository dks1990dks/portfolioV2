import React from "react";
import StatusBadge from "./StatusBadge";
import { Eye, Trash2 } from "lucide-react";

export default function LeadRow({ lead, onView, onDelete, onStatusChange }) {
  return (
    <tr className="hover:bg-slate-800/30 transition">
      <td className="px-4 py-4">
        <div className="font-semibold text-white">{lead.fullName}</div>
        <div className="text-xs text-slate-400">{lead.email}</div>
      </td>
      <td className="px-4 py-4 text-slate-300 text-xs font-medium">{lead.company || "N/A"}</td>
      <td className="px-4 py-4 text-slate-300 text-xs">{lead.metadata?.country || "Unknown"}</td>
      <td className="px-4 py-4 text-slate-300 text-xs font-medium">{lead.projectType}</td>
      <td className="px-4 py-4">
        <StatusBadge status={lead.status} />
      </td>
      <td className="px-4 py-4 text-slate-400 text-xs">
        {new Date(lead.createdAt).toLocaleDateString()}
      </td>
      <td className="px-4 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <select
            value={lead.status}
            onChange={(e) => onStatusChange(lead._id, e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs px-2 py-1 text-slate-300 focus:outline-none focus:border-cyan-400"
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Meeting Scheduled">Meeting Scheduled</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
          <button
            onClick={() => onView(lead)}
            className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(lead._id)}
            className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
            title="Delete Lead"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}