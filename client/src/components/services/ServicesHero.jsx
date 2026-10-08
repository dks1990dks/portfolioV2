import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-slate-900">
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-blue-500/5 blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 uppercase tracking-widest text-xs font-semibold"
        >
          Our Offerings
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-6 tracking-tight leading-none"
        >
          Software Solutions Engineered <br className="hidden lg:block"/> Around Real Business Logic
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg lg:text-xl mt-8 leading-9 font-light max-w-3xl mx-auto"
        >
          We engineer robust ERP setups, scalable SaaS configurations, and automated business architectures optimized specifically to streamline manual procedures and support structural scaling.
        </motion.p>
      </div>
    </section>
  );
}