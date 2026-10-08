import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-linear-to-r from-cyan-950/40 to-slate-900 border border-slate-900 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight relative z-10">Ready to Optimize Your Core Operations?</h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-light leading-7 relative z-10">
            Let's design a high-throughput architecture built entirely around your business workflows. Drop us a note to align a development strategy framework.
          </p>
          <div className="mt-8 relative z-10">
            <Link to="/contact" className="inline-block px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition shadow-lg shadow-cyan-500/10">
              Initiate Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}