import React from "react";
import { motion } from "framer-motion";
import { 
  FaTachometerAlt, 
  FaBoxes, 
  FaShoppingCart, 
  FaChartLine, 
  FaReceipt, 
  FaFileAlt 
} from "react-icons/fa";

const features = [
  {
    id: "dashboard",
    title: "Dashboard",
    tagline: "Central Command Center",
    desc: "Real-time key performance metrics, quick operational toggles, and unified status summaries.",
    icon: FaTachometerAlt,
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400 hover:shadow-cyan-500/20"
  },
  {
    id: "inventory",
    title: "Inventory",
    tagline: "Stock & Ledger Management",
    desc: "Batch tracking, stock level alerts, dynamic catalog management, and automated reorder triggers.",
    icon: FaBoxes,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400 hover:shadow-emerald-500/20"
  },
  {
    id: "purchase",
    title: "Purchase",
    tagline: "Procurement Pipeline",
    desc: "Vendor order management, inbound shipment logs, unit cost calculations, and supplier ledgers.",
    icon: FaShoppingCart,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400 hover:shadow-purple-500/20"
  },
  {
    id: "sales",
    title: "Sales",
    tagline: "Outbound Order Engine",
    desc: "Multi-channel invoicing, customer billing pipelines, dispatch status updates, and revenue tracking.",
    icon: FaChartLine,
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400 hover:shadow-amber-500/20"
  },
  {
    id: "gst",
    title: "GST",
    tagline: "Tax Compliance & Filing",
    desc: "Automated tax slabs, GSTR-1 & GSTR-3B audit summaries, HSN code lookups, and tax credit tracking.",
    icon: FaReceipt,
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-400 hover:shadow-rose-500/20"
  },
  {
    id: "reports",
    title: "Reports",
    tagline: "Analytical Statements",
    desc: "Exportable financial statements, audit logs, profit margins, and trend forecasting data.",
    icon: FaFileAlt,
    color: "from-sky-500/20 to-cyan-500/10 border-sky-500/30 text-sky-400 hover:shadow-sky-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 18 } 
  }
};

export default function FeatureWalkthrough() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            System Workflow
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Feature Walkthrough Pipeline
          </h2>
          <p className="text-slate-400 text-xs font-mono mt-2">
            HOVER CARDS TO INSPECT MODULE PARAMETERS
          </p>
        </div>

        {/* Feature Cards Pipeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-2 relative"
        >
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            const isLast = idx === features.length - 1;

            return (
              <React.Fragment key={item.id}>
                {/* Feature Card Block */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,            /* Lift */
                    rotate: 2,         /* Rotate 2° */
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className={`w-full max-w-xl p-6 rounded-2xl bg-linear-to-r ${item.color} border backdrop-blur-sm shadow-xl transition-shadow duration-300 relative group cursor-pointer overflow-hidden`}
                >
                  {/* Subtle Background Glow effect on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/3 transition-colors duration-300 pointer-events-none" />

                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0">
                        <IconComponent className="text-xl" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-white tracking-wide">
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-mono opacity-60 uppercase tracking-widest">
                            // 0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs font-mono mt-0.5 opacity-80">
                          {item.tagline}
                        </p>
                        <p className="text-xs text-slate-300 font-light leading-5 mt-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Flow Arrow Interconnector */}
                {!isLast && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center my-1 select-none text-slate-700 font-light"
                  >
                    <span className="text-sm animate-pulse">↓</span>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}