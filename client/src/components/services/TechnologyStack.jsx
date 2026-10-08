import { techStack } from "./servicesData";

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">Our Modern Toolchain</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <div key={tech} className="px-5 py-2.5 rounded-xl bg-slate-900/40 border border-slate-900 text-slate-300 text-sm font-light hover:border-cyan-500/20 transition-all">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}