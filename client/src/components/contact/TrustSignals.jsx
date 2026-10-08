import { trustStats } from "./contactData";

export default function TrustSignals() {
  return (
    <section className="py-20 bg-slate-900/40 border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-3 text-lg">
                  <Icon />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white font-mono">
                  {stat.value}
                </h3>

                <p className="text-slate-400 text-xs mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}