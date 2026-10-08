import React, { useState } from "react";
import StatusBadge from "../../components/admin/StatusBadge";
import { ArrowLeft, Calendar, Mail, Phone, Building, Globe, Send } from "lucide-react";

export default function LeadDetails({ lead, onBack, onUpdate }) {
  const [newNote, setNewNote] = useState("");
  const [followUpDate, setFollowUpDate] = useState(lead.followUpDate ? lead.followUpDate.slice(0, 10) : "");

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/leads/${lead._id}/notes`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: newNote, followUpDate }),
      });
      const data = await res.json();
      if (data.success) {
        setNewNote("");
        onUpdate(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition">
        <ArrowLeft className="w-4 h-4" /> Back to Leads
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">{lead.fullName}</h2>
              <StatusBadge status={lead.status} />
            </div>
            <p className="text-xs font-mono text-cyan-400">{lead.referenceId}</p>
          </div>
        </div>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4 text-slate-500" /> {lead.email}</div>
          <div className="flex items-center gap-2 text-slate-300"><Phone className="w-4 h-4 text-slate-500" /> {lead.phone || "No Phone"}</div>
          <div className="flex items-center gap-2 text-slate-300"><Building className="w-4 h-4 text-slate-500" /> {lead.company || "No Company"}</div>
          <div className="flex items-center gap-2 text-slate-300"><Globe className="w-4 h-4 text-slate-500" /> {lead.metadata?.country || "Unknown Country"}</div>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xs uppercase text-slate-400 font-semibold mb-2">Project Brief</h3>
          <p className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 leading-relaxed">
            {lead.description}
          </p>
        </div>

        {/* Notes & Follow Up */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase text-slate-400 font-semibold">CRM Notes & Follow-Up</h3>
          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add internal notes, discussion summary..."
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-400 resize-none"
              rows={3}
            />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
                <Calendar className="w-4 h-4 text-slate-500" />
                <input
                  type="date"
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  className="bg-transparent text-xs text-slate-300 focus:outline-none"
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-cyan-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-cyan-400 transition flex items-center gap-2">
                <Send className="w-3.5 h-3.5" /> Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}