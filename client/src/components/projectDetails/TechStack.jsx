export default function TechStack({ project }) {
  const technologies = project?.technologies || [];

  if (technologies.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/5 px-3 py-1 rounded border border-cyan-500/10">
          Technology Stack
        </span>

        <h3 className="text-2xl font-black text-white tracking-tight mt-4 mb-8">
          Technologies Used
        </h3>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-mono hover:border-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}