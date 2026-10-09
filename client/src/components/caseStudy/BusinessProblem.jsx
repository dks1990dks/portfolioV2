import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function BusinessProblem({ project }) {
  const points = project?.problemPoints || [];

  if (!project?.problem && points.length === 0) {
    return null;
  }

  return (
    <section id="problem" className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-rose-400 font-mono text-xs tracking-widest uppercase bg-rose-500/10 px-3 py-1 rounded border border-rose-500/20">
            Pain Points
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Business Problem
          </h2>

          {project.problem && (
            <p className="text-slate-400 text-sm mt-2 max-w-3xl leading-6">
              {project.problem}
            </p>
          )}
        </div>

        {points.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {points.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative"
              >
                <div className="text-rose-400 text-xl mb-3">
                  <FaExclamationTriangle />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}