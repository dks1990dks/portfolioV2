import React from "react";
import { FaShieldAlt } from "react-icons/fa";

export default function SecuritySection({ project }) {
  const security = project?.security || [];

  if (security.length === 0) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Security
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Security Architecture
          </h2>

          {project.securityDescription && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.securityDescription}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {security.map((item, index) => {
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
                className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-start gap-3"
              >
                <FaShieldAlt className="text-emerald-400 text-lg shrink-0 mt-0.5" />

                <div>
                  <span className="text-slate-200 text-sm font-medium">
                    {label}
                  </span>

                  {description && (
                    <p className="text-xs text-slate-500 leading-5 mt-1">
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