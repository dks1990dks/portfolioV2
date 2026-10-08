import { motion } from "framer-motion";
import {
  FaLaptop,
  FaReact,
  FaNetworkWired,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaBell,
  FaCode,
} from "react-icons/fa";

const iconRegistry = {
  browser: FaLaptop,
  frontend: FaReact,
  api: FaNetworkWired,
  backend: FaNodeJs,
  database: FaDatabase,
  cloud: FaCloud,
  security: FaShieldAlt,
  notification: FaBell,
  service: FaCode,
};

const colorRegistry = {
  slate:
    "text-slate-400 border-slate-800 bg-slate-900/40",
  cyan:
    "text-cyan-400 border-cyan-500/20 bg-cyan-950/10",
  purple:
    "text-purple-400 border-purple-500/20 bg-purple-950/10",
  emerald:
    "text-emerald-400 border-emerald-500/20 bg-emerald-950/10",
  green:
    "text-green-500 border-green-500/20 bg-green-950/10",
  amber:
    "text-amber-400 border-amber-500/20 bg-amber-950/10",
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export default function ProjectArchitecture({ project }) {
  const nodes = project?.architectureNodes || [];

  if (nodes.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            System Topology
          </span>

          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Data Transmission Architecture
          </h2>

          {project.architectureDescription && (
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
              {project.architectureDescription}
            </p>
          )}
        </div>

        {/* Architecture Pipeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="flex flex-col items-center gap-4 relative"
        >
          {nodes.map((node, index) => {
            const isLast = index === nodes.length - 1;

            const iconKey = node.icon || "service";
            const IconComponent =
              iconRegistry[iconKey] || FaCode;

            const color =
              colorRegistry[node.color] ||
              colorRegistry.slate;

            return (
              <div
                key={`${node.title}-${index}`}
                className="flex flex-col items-center w-full max-w-md"
              >

                {/* Node */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border ${color} relative overflow-hidden`}
                >
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center">
                    <IconComponent className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {node.title}
                    </h3>

                    {node.subtitle && (
                      <p className="text-xs text-slate-500 font-mono mt-0.5 font-light">
                        {node.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-700 select-none">
                    {String(index + 1).padStart(2, "0")} // NODE
                  </div>
                </motion.div>

                {/* Connector */}
                {!isLast && (
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center my-2 select-none"
                  >
                    <div className="w-0.5 h-6 bg-linear-to-b from-cyan-500/30 to-slate-800" />

                    <span className="text-slate-600 text-sm leading-none font-light animate-pulse">
                      ↓
                    </span>

                    <div className="w-0.5 h-2 bg-slate-800" />
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