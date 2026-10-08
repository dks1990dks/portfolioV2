import { values } from "./data";

export default function CoreValues() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            Core <span className="text-cyan-400">Values</span>
          </h2>

          <p className="text-slate-400 mt-4 leading-7 font-light text-base">
            The principles that guide how I approach software development,
            business workflows, and client collaboration.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-slate-900 bg-slate-900/40 backdrop-blur-sm hover:border-slate-800 transition-all group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-slate-400 border border-slate-900 flex items-center justify-center group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all mb-5">
                  {Icon && <Icon className="text-lg" aria-hidden="true" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-6 font-light">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}