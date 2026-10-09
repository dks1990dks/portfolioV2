export default function ContactHero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
          Free Technical & Architecture Consultation
        </span>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Let's Build Software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500">
            That Grows Your Business
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          From custom ERP systems and SaaS platforms to business dashboards
          and workflow automation. Share your requirements and let's discuss
          a practical solution for your business.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-cyan-400">
            Custom ERP
          </span>

          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-cyan-400">
            SaaS Platforms
          </span>

          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-cyan-400">
            Business Dashboards
          </span>

          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-cyan-400">
            Workflow Automation
          </span>
        </div>
      </div>
    </section>
  );
}