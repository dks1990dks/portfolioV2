import React from "react";

export default function QuickFacts({ project }) {
  if (!project) return null;

  const technologies = project.technologies || [];

  const facts = [
    ["Industry", project.industry || "—"],
    ["Project Type", project.type || project.category || "—"],
    ["Status", project.statusLabel || project.status || "—"],
    ["Timeline", project.duration || "—"],
    ["Team Size", project.teamSize || "—"],
    ["Frontend", project.frontend || "—"],
    ["Backend", project.backend || "—"],
    ["Database", project.database || "—"],
  ];

  return (
    <section id="quick-facts" className="py-12 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-xl font-bold text-slate-300 mb-6 font-mono uppercase tracking-widest">
          // Key Project Specifications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {label}
              </p>

              <h3 className="text-white text-base md:text-lg font-bold mt-1 truncate">
                {value}
              </h3>
            </div>
          ))}
        </div>

        {technologies.length > 0 && (
          <div className="mt-6">
            <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800/80">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                Technology Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}