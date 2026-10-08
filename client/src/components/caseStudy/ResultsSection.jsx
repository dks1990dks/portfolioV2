import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ResultsSection({ project }) {
  const results = project?.results || [];

  if (results.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Impact
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Project Results & Outcomes
          </h2>

          {project.resultsDescription && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.resultsDescription}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {results.map((result, index) => {
            const label =
              typeof result === "string"
                ? result
                : result.label;

            const description =
              typeof result === "string"
                ? ""
                : result.description;

            return (
              <div
                key={`${label}-${index}`}
                className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-3"
              >
                <FaCheck className="text-emerald-400 shrink-0 mt-1" />

                <div>
                  <span className="text-slate-200 text-sm font-medium">
                    {label}
                  </span>

                  {description && (
                    <p className="text-xs text-slate-500 mt-1 leading-5">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}