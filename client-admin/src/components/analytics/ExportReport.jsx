import React from "react";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ExportReport({ summary, monthly, countries, industry, pipeline }) {
  const exportToCSV = () => {
    const data = [
      ["Metric", "Value"],
      ["Total Leads", summary?.totalLeads],
      ["Won Projects", summary?.wonProjects],
      ["Conversion Rate", `${summary?.conversionRate}%`],
      ["Monthly Revenue", `$${summary?.monthlyRevenue}`],
      ["Countries", summary?.countries],
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," + data.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `analytics_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();

    const summaryWS = XLSX.utils.json_to_sheet([summary]);
    const monthlyWS = XLSX.utils.json_to_sheet(monthly || []);
    const countryWS = XLSX.utils.json_to_sheet(countries || []);
    const industryWS = XLSX.utils.json_to_sheet(industry || []);

    XLSX.utils.book_append_sheet(wb, summaryWS, "Summary");
    XLSX.utils.book_append_sheet(wb, monthlyWS, "Monthly Trends");
    XLSX.utils.book_append_sheet(wb, countryWS, "Countries");
    XLSX.utils.book_append_sheet(wb, industryWS, "Industries");

    XLSX.writeFile(wb, `analytics_report_${Date.now()}.xlsx`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Business Intelligence & Analytics Report", 14, 22);

    doc.setFontSize(11);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 30);

    const summaryData = [
      ["Total Leads", summary?.totalLeads],
      ["Won Projects", summary?.wonProjects],
      ["Conversion Rate", `${summary?.conversionRate}%`],
      ["Monthly Revenue", `$${summary?.monthlyRevenue}`],
    ];

    doc.autoTable({
      startY: 36,
      head: [["KPI Metric", "Value"]],
      body: summaryData,
      theme: "dark",
    });

    doc.save(`analytics_report_${Date.now()}.pdf`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={exportToCSV}
        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition"
      >
        <Download className="w-4 h-4 text-cyan-400" /> Export CSV
      </button>

      <button
        onClick={exportToExcel}
        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition"
      >
        <FileSpreadsheet className="w-4 h-4 text-emerald-400" /> Export Excel
      </button>

      <button
        onClick={exportToPDF}
        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition"
      >
        <FileText className="w-4 h-4 text-rose-400" /> Export PDF
      </button>
    </div>
  );
}