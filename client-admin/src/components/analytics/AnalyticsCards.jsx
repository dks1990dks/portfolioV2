import React from "react";
import { Mail, TrendingUp, DollarSign, Globe, CheckCircle2 } from "lucide-react";

export default function AnalyticsCards({ summary }) {
  const cards = [
    {
      title: "Total Leads",
      value: summary?.totalLeads ?? 0,
      icon: Mail,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Won Projects",
      value: summary?.wonProjects ?? 0,
      icon: CheckCircle2,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Conversion Rate",
      value: `${summary?.conversionRate ?? 0}%`,
      icon: TrendingUp,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Monthly Revenue",
      value: `$${(summary?.monthlyRevenue ?? 0).toLocaleString()}`,
      icon: DollarSign,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Countries Reach",
      value: summary?.countries ?? 0,
      icon: Globe,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`p-5 rounded-2xl border bg-slate-900/60 backdrop-blur-md flex items-center justify-between shadow-lg ${card.color}`}
          >
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-white mt-1">{card.value}</h3>
            </div>
            <div className={`p-3 rounded-xl border ${card.color}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
}