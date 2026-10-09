import { Link } from "react-router-dom";

export default function QuoteCTA() {
  return (
    <section id="cta" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white">
          Have a Software Project in Mind?
        </h2>

        <p className="text-slate-400 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need an ERP, SaaS application, business dashboard, or
          workflow automation solution, let's discuss your requirements and
          plan the right approach.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/contact#discovery-form"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            Request a Proposal
          </Link>

          <a
            href="mailto:contact@deepakcodes.com"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-300 hover:border-cyan-400 hover:text-white transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}