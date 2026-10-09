import React from "react";

export default function FutureRoadmap({ project }) {
  const roadmap = project?.future || [];

  if (roadmap.length === 0) return null;

  return (
    <section id="roadmap" className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
            Expansion
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Future Roadmap
          </h2>

          {project.futureDescription && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.futureDescription}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {roadmap.map((item, index) => {
            const label =
              typeof item === "string"
                ? item
                : item.label;

            const description =
              typeof item === "string"
                ? ""
                : item.description;

            return (
              <div
                key={`${label}-${index}`}
                className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl"
              >
                <span className="text-[10px] font-mono text-purple-400 block">
                  // PHASE {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-semibold text-slate-200 mt-1 block">
                  {label}
                </span>

                {description && (
                  <p className="text-xs text-slate-500 mt-2 leading-5">
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