import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start"
    >
      {/* Badge */}
      <span className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium tracking-wide">
        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse" />
        ERP • SaaS • Business Automation
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-black leading-tight text-white tracking-tight">
        Building <br />
        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Modern Business
        </span>{" "}
        <br />
        Software.
      </h1>

      {/* Description */}
      <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
        Deepak Codes builds custom ERP systems, SaaS platforms, dashboards, and
        business automation software that helps companies streamline operations
        and manage their workflows more efficiently.
      </p>

      {/* Action Buttons */}
      {/* Action Buttons */}
<div className="relative z-50 flex flex-wrap gap-4 mt-10">
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Link
      to="/contact#discovery-form"
      className="inline-block px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors shadow-lg shadow-cyan-500/20"
    >
      Start Project
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Link
      to="/projects#featured"
      className="inline-block px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-900/50 text-white font-semibold transition-all"
    >
      View Projects
    </Link>
  </motion.div>
</div>
    </motion.div>
  );
}
