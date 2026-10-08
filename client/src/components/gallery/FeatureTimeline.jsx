import React from "react";
import { motion } from "framer-motion";
import { 
  FaClipboardList, 
  FaDraftingCompass, 
  FaCode, 
  FaVial, 
  FaRocket 
} from "react-icons/fa";

const timelineSteps = [
  {
    title: "Planning",
    phase: "PHASE 01",
    desc: "Requirement analysis, architecture scoping, schema mapping, and milestone definition.",
    icon: FaClipboardList,
    status: "Completed"
  },
  {
    title: "Design",
    phase: "PHASE 02",
    desc: "UI/UX wireframing, high-fidelity dark-themed design systems, and component architecture.",
    icon: FaDraftingCompass,
    status: "Completed"
  },
  {
    title: "Development",
    phase: "PHASE 03",
    desc: "Frontend modular components, state management engines, and backend API integration.",
    icon: FaCode,
    status: "In Progress"
  },
  {
    title: "Testing",
    phase: "PHASE 04",
    desc: "Unit testing, multi-tier compliance audits, cross-device responsiveness, and load testing.",
    icon: FaVial,
    status: "Scheduled"
  },
  {
    title: "Deployment",
    phase: "PHASE 05",
    desc: "CI/CD automated pipeline deployment, domain configuration, and production monitoring.",
    icon: FaRocket,
    status: "Scheduled"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function FeatureTimeline() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Execution Lifecycle
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Development Phase Timeline
          </h2>
        </div>

        {/* Timeline Pipeline Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative space-y-10 pl-6 md:pl-10 before:absolute before:left-[1.35rem] md:before:left-[2.35rem] before:top-3 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-cyan-500/60 before:via-slate-800 before:to-slate-900"
        >
          {timelineSteps.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <motion.div 
                key={step.title}
                variants={stepVariants}
                className="relative flex items-start gap-6 group"
              >
                {/* Scroll Animated Circle Marker */}
                <motion.div 
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="absolute left-[-1.35rem] md:left-[-2.35rem] -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-10"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 rounded-full bg-cyan-400"
                  />
                </motion.div>

                {/* Content Block */}
                <div className="flex-1 p-6 rounded-2xl bg-slate-900/30 border border-slate-900 group-hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <IconComponent className="text-cyan-400 text-sm" />
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase border border-slate-800 px-2.5 py-0.5 rounded">
                      {step.phase}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs font-light leading-5 mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}