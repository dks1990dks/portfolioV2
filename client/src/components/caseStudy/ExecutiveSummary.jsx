import React from "react";

export default function ExecutiveSummary({ project }) {
  if (!project?.executiveSummary) {
    return null;
  }

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 md:p-10 backdrop-blur-sm">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            Overview
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Executive Summary
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed text-base md:text-lg">
            {project.executiveSummary}
          </p>
        </div>
      </div>
    </section>
  );
}