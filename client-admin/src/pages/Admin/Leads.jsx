import React, { useState, useEffect } from "react";
import SearchBar from "../../components/admin/SearchBar";
import FilterDropdown from "../../components/admin/FilterDropdown";
import LeadsTable from "../../components/admin/LeadsTable";
import Pagination from "../../components/admin/Pagination";
import { Download } from "lucide-react";

const STATUS_OPTIONS = [
  { label: "All Statuses", value: "All" },
  { label: "New", value: "New" },
  { label: "Contacted", value: "Contacted" },
  { label: "Meeting Scheduled", value: "Meeting Scheduled" },
  { label: "Proposal Sent", value: "Proposal Sent" },
  { label: "Won", value: "Won" },
  { label: "Lost", value: "Lost" },
];

export default function Leads({ onSelectLead }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ page, limit: 10, search, status });
      const res = await fetch(`http://localhost:5000/api/admin/leads?${query}`);
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [page, search, status]);

  const handleStatusChange = async (id, newStatus) => {
    await fetch(`http://localhost:5000/api/admin/leads/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchLeads();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      await fetch(`http://localhost:5000/api/admin/leads/${id}`, { method: "DELETE" });
      fetchLeads();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads Management</h1>
          <p className="text-slate-400 text-xs">Filter, view details, and manage pipeline status.</p>
        </div>

        <div className="flex items-center gap-3">
          <SearchBar value={search} onChange={(val) => { setSearch(val); setPage(1); }} />
          <FilterDropdown value={status} onChange={(val) => { setStatus(val); setPage(1); }} options={STATUS_OPTIONS} />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <LeadsTable
          leads={leads}
          loading={loading}
          onView={onSelectLead}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}