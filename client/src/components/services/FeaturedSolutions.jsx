import { featuredSolutions } from "./servicesData";

export default function FeaturedSolutions() {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">Core Niche Systems</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 tracking-tight">Featured Industrial & Enterprise Software</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.id} className="group rounded-3xl border border-slate-900 bg-slate-900/40 backdrop-blur-md p-8 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all mb-6">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{solution.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">{solution.title}</h3>
                  <p className="text-sm text-slate-400 mt-4 leading-6 font-light">{solution.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-950/60 flex flex-wrap gap-2">
                  {solution.features.map((feat, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-slate-900 text-slate-400 font-light">
                      • {feat}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}