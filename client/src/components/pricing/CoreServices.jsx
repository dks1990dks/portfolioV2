import { coreServices } from "./pricingData";

export default function CoreServices() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Specialized Solutions
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-2">
            Core Service Offerings
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Domain-focused software development tailored to solve operational
            challenges and support business workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {Icon && <Icon />}
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-cyan-400 border border-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}