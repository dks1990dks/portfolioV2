import { whyWorkWithMePoints } from "./contactData";

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Why Work With Me
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-2">
            Practical Software for Real Business Workflows
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            I combine business workflow understanding with modern full-stack
            development to build practical, maintainable software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyWorkWithMePoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl mb-5">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}