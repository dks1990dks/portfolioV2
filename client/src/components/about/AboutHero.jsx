import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 pt-32 pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 uppercase tracking-widest text-xs font-semibold"
        >
          About Deepak Codes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-7xl font-black text-white tracking-tight mt-5"
        >
          Building Software
          <br />
          <span className="text-cyan-400 mt-2 block">
            That Solves Real Business Problems
          </span>
        </motion.h1>

        <p className="mt-8 max-w-3xl text-lg lg:text-xl text-slate-300 leading-9 font-light">
          Deepak Codes develops custom ERP systems, SaaS applications,
          business dashboards, and workflow automation solutions for
          businesses.
        </p>
      </div>
    </section>
  );
}