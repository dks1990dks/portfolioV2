import React, { useEffect, useState } from "react";
import AnalyticsCards from "../../components/analytics/AnalyticsCards";
import LeadTrendChart from "../../components/analytics/LeadTrendChart";
import CountryChart from "../../components/analytics/CountryChart";
import IndustryChart from "../../components/analytics/IndustryChart";
import PipelineChart from "../../components/analytics/PipelineChart";
import RecentActivity from "../../components/analytics/RecentActivity";
import TopCountries from "../../components/analytics/TopCountries";
import ExportReport from "../../components/analytics/ExportReport";
import {
  fetchAnalyticsSummary,
  fetchMonthlyTrends,
  fetchCountryDistribution,
  fetchIndustryDistribution,
  fetchPipelineStats,
  fetchRecentActivity,
} from "../../services/analyticsService";
import { Loader2 } from "lucide-react";

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const [monthly, setMonthly] = useState([]);
  const [countries, setCountries] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [pipeline, setPipeline] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [sumRes, monRes, couRes, indRes, pipRes, actRes] =
          await Promise.all([
            fetchAnalyticsSummary(),
            fetchMonthlyTrends(),
            fetchCountryDistribution(),
            fetchIndustryDistribution(),
            fetchPipelineStats(),
            fetchRecentActivity(),
          ]);

        setSummary(sumRes);
        setMonthly(monRes);
        setCountries(couRes);
        setIndustries(indRes);
        setPipeline(pipRes);
        setActivities(actRes);
      } catch (err) {
        console.error("Failed to load analytics dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-cyan-400 space-y-3">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="text-sm font-semibold tracking-wider text-slate-400">
          Loading Analytics Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 space-y-8">
      {/* Top Bar Header & Export Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time business intelligence, pipeline conversions, and revenue insights.
          </p>
        </div>

        <ExportReport
          summary={summary}
          monthly={monthly}
          countries={countries}
          industry={industries}
          pipeline={pipeline}
        />
      </div>

      {/* KPI Cards Row */}
      <AnalyticsCards summary={summary} />

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeadTrendChart data={monthly} />
        <PipelineChart pipeline={pipeline} />
      </div>

      {/* Distribution & Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CountryChart data={countries} />
        <TopCountries data={countries} />
        <IndustryChart data={industries} />
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
}