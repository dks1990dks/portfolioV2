import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import Dashboard from "./Dashboard";
import Leads from "./Leads";
import LeadDetails from "./LeadDetails";
import Analytics from "./Analytics";
import Settings from "./Settings";

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedLead, setSelectedLead] = useState(null);

  const handleSelectLead = (lead) => {
    setSelectedLead(lead);
    setActiveTab("lead-details");
  };

  const renderContent = () => {
    if (activeTab === "lead-details" && selectedLead) {
      return (
        <LeadDetails
          lead={selectedLead}
          onBack={() => setActiveTab("leads")}
          onUpdate={(updatedLead) => setSelectedLead(updatedLead)}
        />
      );
    }

    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <Leads onSelectLead={handleSelectLead} />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-slate-950 min-h-screen text-slate-100 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar adminName="Deepak Kumar" role="Founder & Developer" />

        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}