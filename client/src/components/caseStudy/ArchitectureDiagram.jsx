import React from "react";

export default function ArchitectureDiagram({ project }) {
  const layers = project?.architectureLayers || [];

  if (layers.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            System Layout
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Architecture Pipeline
          </h2>

          {project.architectureDescription && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.architectureDescription}
            </p>
          )}
        </div>

        <div className="max-w-md mx-auto space-y-2">
          {layers.map((layer, index) => {
            const label =
              typeof layer === "string"
                ? layer
                : layer.label;

            const description =
              typeof layer === "string"
                ? ""
                : layer.description;

            return (
              <React.Fragment key={`${label}-${index}`}>

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center shadow-md">
                  <div className="text-sm font-mono text-slate-200">
                    {label}
                  </div>

                  {description && (
                    <div className="text-[11px] text-slate-500 mt-1">
                      {description}
                    </div>
                  )}
                </div>

                {index < layers.length - 1 && (
                  <div className="text-center text-cyan-500 text-xs font-mono py-0.5">
                    ↓
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}