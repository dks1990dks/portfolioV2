import React from "react";
import {
  FaUsers,
  FaReact,
  FaServer,
  FaDatabase,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaBell,
  FaCode,
} from "react-icons/fa";

const iconRegistry = {
  users: FaUsers,
  frontend: FaReact,
  backend: FaServer,
  database: FaDatabase,
  analytics: FaChartBar,
  cloud: FaCloud,
  security: FaShieldAlt,
  notification: FaBell,
  development: FaCode,
};

export default function SolutionOverview({ project }) {
  const pipeline = project?.architecturePipeline || [];

  if (pipeline.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-10 text-center">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            High-Level Architecture
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Solution Overview
          </h2>

          {project?.solution && (
            <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
              {project.solution}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 py-8 bg-slate-900/30 rounded-3xl border border-slate-800 px-4">

          {pipeline.map((item, index) => {
            const iconKey =
              typeof item === "string"
                ? "development"
                : item.icon;

            const label =
              typeof item === "string"
                ? item
                : item.label;

            const Icon =
              iconRegistry[iconKey] || FaCode;

            return (
              <React.Fragment key={`${label}-${index}`}>

                <div className="flex flex-col items-center gap-2 p-4 bg-slate-900 rounded-2xl border border-slate-800 min-w-27.5">
                  <Icon className="text-cyan-400 text-2xl" />

                  <span className="text-xs font-mono text-slate-300 text-center">
                    {label}
                  </span>
                </div>

                {index < pipeline.length - 1 && (
                  <span className="text-cyan-500 font-bold text-lg select-none">
                    →
                  </span>
                )}

              </React.Fragment>
            );
          })}

        </div>
      </div>
    </section>
  );
}