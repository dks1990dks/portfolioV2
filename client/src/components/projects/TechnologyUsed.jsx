import { globalTech } from "./projectsData";

export default function TechnologyUsed() {
  return (
    <section
      id="technology"
      className="py-20 bg-slate-950 border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-white tracking-tight">
          Technology Stack
        </h2>

        <p className="text-slate-400 mt-3 text-sm font-light">
          Technologies used across the software projects in this portfolio.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
          {globalTech.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-900 text-slate-300 text-xs font-light hover:border-cyan-500/20 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
