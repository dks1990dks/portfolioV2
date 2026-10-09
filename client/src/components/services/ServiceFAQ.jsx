import { serviceFAQs } from "./servicesData";

export default function ServiceFAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {serviceFAQs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-900 bg-slate-900/20"
            >
              <h4 className="text-lg font-bold text-white mb-3">💬 {faq.q}</h4>
              <p className="text-slate-400 leading-7 font-light text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
