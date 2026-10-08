import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Objectives({ project }) {
  const objectivesList = project?.objectives || [];

  if (objectivesList.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Targets
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Core Objectives
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {objectivesList.map((obj, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl"
            >
              <FaCheckCircle className="text-emerald-400 shrink-0 text-lg" />

              <span className="text-slate-200 text-sm font-medium">
                {obj}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}