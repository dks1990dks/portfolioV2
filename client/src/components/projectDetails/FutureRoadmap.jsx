import { motion } from "framer-motion";
import { FaCheckCircle, FaSpinner, FaRocket } from "react-icons/fa";

const roadmapPhases = [
  {
    status: "Completed",
    icon: FaCheckCircle,
    color: "border-emerald-500/20 bg-emerald-950/5 text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    items: ["Login Authentication", "Dashboard Architecture", "Inventory Management Core"]
  },
  {
    status: "Current Focus",
    icon: FaSpinner,
    color: "border-cyan-500/30 bg-cyan-950/10 text-cyan-400 ring-1 ring-cyan-500/20",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 animate-pulse",
    items: ["GST Compliance Module (Multi-Tier Ledger Reconciliation)"]
  },
  {
    status: "Next Horizon",
    icon: FaRocket,
    color: "border-slate-900 bg-slate-900/20 text-slate-500",
    badgeColor: "bg-slate-900 text-slate-400 border-slate-800",
    items: ["AI Predictive Demand Analytics & Forecasting Models"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const phaseVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
};

export default function FutureRoadmap() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Development Cycle
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            System Deployment Roadmap
          </h2>
        </div>

        {/* Sequential Track Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {roadmapPhases.map((phase, idx) => {
            const IconComponent = phase.icon;
            const isLast = idx === roadmapPhases.length - 1;

            return (
              <div key={phase.status} className="w-full">
                {/* Phase Block Container */}
                <motion.div
                  variants={phaseVariants}
                  className={`p-6 rounded-2xl border ${phase.color} flex flex-col md:flex-row md:items-center justify-between gap-6`}
                >
                  <div className="flex items-start md:items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center shrink-0">
                      <IconComponent className={`text-lg ${phase.status === "Current Focus" ? "animate-spin [animation-duration:3s]" : ""}`} />
                    </div>
                    
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${phase.badgeColor}`}>
                        {phase.status}
                      </span>
                      
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-200">
                        {phase.items.map((item, i) => (
                          <span key={item} className="flex items-center gap-2">
                            {phase.status === "Completed" && <span className="text-emerald-500 text-xs">✔</span>}
                            <span>{item}</span>
                            {i < phase.items.length - 1 && <span className="text-slate-700 hidden md:inline">|</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-slate-700 md:text-right select-none shrink-0">
                    PHASE_0{idx + 1}
                  </div>
                </motion.div>

                {/* Vertical Connector Arrow */}
                {!isLast && (
                  <motion.div 
                    variants={phaseVariants}
                    className="flex justify-center md:justify-start md:pl-10 my-3 text-slate-700 text-lg font-light select-none"
                  >
                    ↓
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}