import React from "react";

export default function ModuleOverview({ project }) {
  const modules = project?.modules || [];

  if (modules.length === 0) return null;

  return (
    <section id="modules" className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            System Modules
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Core Module Overview
          </h2>

          {project?.moduleOverview && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.moduleOverview}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {modules.map((module, index) => {
            const name =
              typeof module === "string"
                ? module
                : module.name;

            const description =
              typeof module === "string"
                ? ""
                : module.description;

            return (
              <div
                key={`${name}-${index}`}
                className="p-5 bg-slate-900/70 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all"
              >
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  // MODULE {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-bold text-white mt-1">
                  {name}
                </h3>

                {description && (
                  <p className="text-xs text-slate-500 leading-5 mt-2">
                    {description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}