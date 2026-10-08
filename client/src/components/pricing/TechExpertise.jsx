import { techExpertise } from "./pricingData";

export default function TechExpertise() {
  return (
    <section className="py-16 bg-slate-900/30 border-y border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-6">
          Technology Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {techExpertise.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}