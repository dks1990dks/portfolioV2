import { valueProps } from "./pricingData";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-cyan-400">Deepak Codes</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Practical software solutions focused on business workflows,
            maintainable development, and structured delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl mb-5">
                  {Icon && <Icon />}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
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