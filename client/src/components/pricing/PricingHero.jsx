import { Link } from "react-router-dom";

export default function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white border-b border-slate-800/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
          Pricing & Engagement
        </span>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Flexible Engagement Models for{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500">
            Business Software Development
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Flexible engagement options for ERP systems, SaaS applications,
          business dashboards, and workflow automation projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            Request Custom Proposal
          </Link>

          <a
            href="#engagement-models"
            className="px-8 py-3.5 rounded-xl border border-slate-700 font-semibold text-slate-300 hover:border-cyan-400 hover:text-white transition"
          >
            Explore Models
          </a>
        </div>
      </div>
    </section>
  );
}