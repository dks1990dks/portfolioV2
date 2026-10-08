import { projectStats } from "./projectsData";

export default function ProjectStats() {
  return (
    <section className="py-12 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-3xl border border-slate-900 bg-slate-900/10 backdrop-blur-md text-center">
          {projectStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-black text-cyan-400 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-xs uppercase tracking-wider text-slate-400 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}