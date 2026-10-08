import React from "react";
import { Globe } from "lucide-react";

export default function TopCountries({ data }) {
  const totalLeads =
    data?.reduce((acc, item) => acc + (item.count || 0), 0) || 1;

  // Helper to map country codes/names to flag emojis
  const getCountryFlag = (countryName) => {
    const flags = {
      USA: "🇺🇸",
      "United States": "🇺🇸",
      Canada: "🇨🇦",
      UK: "🇬🇧",
      "United Kingdom": "🇬🇧",
      Australia: "🇦🇺",
      India: "🇮🇳",
      Germany: "🇩🇪",
      Singapore: "🇸🇬",
      UAE: "🇦🇪",
    };
    return flags[countryName] || "🌐";
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-400" /> Top Target Markets
        </h3>
        <span className="text-xs text-slate-400 font-medium">
          By Lead Volume
        </span>
      </div>

      <div className="space-y-3.5">
        {data && data.length > 0 ? (
          data.slice(0, 6).map((item, idx) => {
            const percentage = Math.round((item.count / totalLeads) * 100);

            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">
                      {getCountryFlag(item.country)}
                    </span>
                    <span className="font-semibold text-slate-200">
                      {item.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {item.count} leads
                    </span>
                    <span className="font-bold text-cyan-400 w-9 text-right">
                      {percentage}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-xs text-slate-500 text-center py-4">
            No country data available yet.
          </p>
        )}
      </div>
    </div>
  );
}