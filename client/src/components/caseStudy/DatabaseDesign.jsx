import React from "react";

export default function DatabaseDesign({ project }) {
  const collections = project?.databaseCollections || [];

  if (collections.length === 0) return null;

  return (
    <section id="database" className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
            Data Schema
          </span>

          <h2 className="text-3xl font-bold text-white mt-4">
            Database Schema & Relationships
          </h2>

          {project.databaseDescription && (
            <p className="text-slate-500 mt-3 max-w-2xl">
              {project.databaseDescription}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collections.map((collection, index) => {
            const name =
              typeof collection === "string"
                ? collection
                : collection.name;

            const type =
              typeof collection === "string"
                ? "Collection"
                : collection.type || "Collection";

            return (
              <div
                key={`${name}-${index}`}
                className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-center justify-between gap-3"
              >
                <span className="text-sm font-mono text-cyan-400 font-bold truncate">
                  {name}
                </span>

                <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap">
                  {type}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}