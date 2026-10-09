import { FaArrowRight } from "react-icons/fa";
import { whatHappensNextSteps } from "./pricingData";

export default function WhatHappensNext() {
  return (
    <section id="next-steps" className="py-24 bg-slate-900/40 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Clear Journey
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-2">
            What Happens Next?
          </h2>

          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            A structured process for moving from initial requirements through
            development, testing, deployment, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {whatHappensNextSteps.map((stepItem, idx) => {
            const Icon = stepItem.icon;

            return (
              <div
                key={stepItem.step}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative hover:border-cyan-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-cyan-500/30 font-mono">
                      {stepItem.step}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg">
                      {Icon && <Icon />}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {idx < whatHappensNextSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                    <FaArrowRight className="text-xs" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}