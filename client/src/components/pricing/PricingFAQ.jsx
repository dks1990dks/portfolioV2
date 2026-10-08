import { pricingFaqs } from "./pricingData";

export default function PricingFAQ() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Clear Answers
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {pricingFaqs.map((faq) => (
            <div
              key={faq.question}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {faq.question}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}