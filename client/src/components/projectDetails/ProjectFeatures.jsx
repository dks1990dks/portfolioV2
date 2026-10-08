import { motion } from "framer-motion";
import {
  FaBoxes,
  FaBell,
  FaChartBar,
  FaCalculator,
  FaFileInvoiceDollar,
  FaGraduationCap,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaCog,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

const iconRegistry = {
  inventory: FaBoxes,
  notification: FaBell,
  analytics: FaChartBar,
  accounting: FaCalculator,
  gst: FaFileInvoiceDollar,
  education: FaGraduationCap,
  ecommerce: FaShoppingCart,
  dashboard: FaChartLine,
  users: FaUsers,
  settings: FaCog,
  database: FaDatabase,
  development: FaCode,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ProjectFeatures({ project }) {
  const features = project?.features || [];

  if (features.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Core Features
          </span>

          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Key Capabilities
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl">
            Functional capabilities implemented or planned for this project.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const featureName =
              typeof feature === "string" ? feature : feature.name;

            const description =
              typeof feature === "string" ? "" : feature.description;

            const iconKey =
              typeof feature === "string" ? "development" : feature.icon;

            const IconComponent = iconRegistry[iconKey] || FaCode;

            return (
              <motion.div
                key={`${featureName}-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
                    <IconComponent className="text-lg" />
                  </div>

                  {/* Feature Name */}
                  <h3 className="text-lg font-bold text-white mt-5 group-hover:text-cyan-400 transition-colors duration-300">
                    {featureName}
                  </h3>

                  {/* Description */}
                  {description && (
                    <p className="text-xs text-slate-400 mt-2 leading-5 font-light">
                      {description}
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-slate-600 group-hover:text-cyan-500/40 transition-colors">
                  <span>FEATURE</span>
                  <span>//</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
