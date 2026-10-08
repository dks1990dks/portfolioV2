import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import StatCard from "../../components/admin/StatCard";
import StatusBadge from "../../components/admin/StatusBadge";
import { Mail, PhoneCall, Send, Trophy, Search, Download, RefreshCw, Eye } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState({ new: 0, contacted: 0, proposalSent: 0, won: 0 });
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchStats = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/dashboard");
      const data = await res.json();
      if (data.success) setStats(data);
    } catch (err) {
      console.error("Failed to load statistics:", err);
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ search, status: statusFilter });
      const res = await fetch(`http://localhost:5000/api/admin/leads?${query}`);
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [search, statusFilter]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/leads/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchLeads();
        fetchStats();
      }
    } catch (err) {
      console.error("Failed updating lead status:", err);
    }
  };

  const exportCSV = () => {
    const headers = "Full Name,Email,Company,Project Type,Budget,Status,Date\n";
    const rows = leads
      .map(
        (l) =>
          `"${l.fullName}","${l.email}","${l.company || ""}","${l.projectType}","${l.budget}","${l.status}","${new Date(l.createdAt).toLocaleDateString()}"`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_export_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="flex bg-slate-950 min-h-screen font-sans text-slate-100">
      
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold">Admin CRM Dashboard</h1>
            <p className="text-slate-400 text-sm">Manage project inquiries, pipeline, and responses.</p>
          </div>
          <button
            onClick={() => { fetchStats(); fetchLeads(); }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800 transition self-start"
          >
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>

        {/* Stat Cards Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="New Leads" value={stats.new} icon={Mail} colorClass="bg-blue-500/10 text-blue-400" />
          <StatCard title="Contacted" value={stats.contacted} icon={PhoneCall} colorClass="bg-amber-500/10 text-amber-400" />
          <StatCard title="Proposal Sent" value={stats.proposalSent} icon={Send} colorClass="bg-cyan-500/10 text-cyan-400" />
          <StatCard title="Won Projects" value={stats.won} icon={Trophy} colorClass="bg-emerald-500/10 text-emerald-400" />
        </div>

        {/* Lead Table Controls */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-white">Recent Inquiries</h2>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search lead..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 focus:outline-none focus:border-cyan-400"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Meeting Scheduled">Meeting Scheduled</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>

              {/* Export CSV */}
              <button
                onClick={exportCSV}
                className="flex items-center gap-2 px-3.5 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-400 hover:bg-cyan-500/20 transition"
              >
                <Download className="w-3.5 h-3.5" /> CSV
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Lead</th>
                  <th className="px-4 py-3">Project Type</th>
                  <th className="px-4 py-3">Budget</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500">No leads found matching criteria.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-800/30 transition">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-white">{lead.fullName}</div>
                        <div className="text-xs text-slate-400">{lead.email} • {lead.company || "N/A"}</div>
                      </td>
                      <td className="px-4 py-4 text-slate-300 font-medium">{lead.projectType}</td>
                      <td className="px-4 py-4 text-slate-400 text-xs">{lead.budget}</td>
                      <td className="px-4 py-4">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-4 py-4 text-slate-400 text-xs">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg text-xs px-2 py-1 text-slate-300 focus:outline-none focus:border-cyan-400"
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}