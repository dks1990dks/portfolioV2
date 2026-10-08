import React from "react";

export default function DevelopmentTimeline({ project }) {
  const steps = project?.timeline || [];

  if (steps.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            Lifecycle
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Development Timeline
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 ${
            steps.length >= 6
              ? "md:grid-cols-6"
              : steps.length === 5
              ? "md:grid-cols-5"
              : steps.length === 4
              ? "md:grid-cols-4"
              : "md:grid-cols-3"
          } gap-3`}
        >
          {steps.map((step, index) => {
            const label =
              typeof step === "string"
                ? step
                : step.label;

            const description =
              typeof step === "string"
                ? ""
                : step.description;

            return (
              <div
                key={`${label}-${index}`}
                className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center"
              >
                <span className="text-[10px] font-mono text-slate-500 block">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-bold text-white mt-1 block">
                  {label}
                </span>

                {description && (
                  <span className="text-[11px] text-slate-500 mt-2 block leading-4">
                    {description}
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}