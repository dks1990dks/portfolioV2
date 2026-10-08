import { devProcess } from "./pricingData";

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Workflow & Roadmap
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Development Process
          </h2>

          <p className="text-slate-400 mt-4 text-sm md:text-base max-w-md mx-auto">
            A structured approach covering requirements, architecture,
            development, testing, and deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devProcess.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative"
            >
              <span className="text-3xl font-black text-cyan-500/30 mb-3 block font-mono">
                {item.step}
              </span>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}