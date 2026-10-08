
import { motion } from "framer-motion";

const activities = [
  "ERP & business workflow automation",
  "Inventory and dispatch management",
  "Accounting and GST workflows",
  "Dashboard and analytics development",
  "Cloud deployment and API integration",
];

export default function ActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-xl font-bold text-white">
        Development Capabilities
      </h3>

      <div className="mt-6 space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="w-3 h-3 rounded-full bg-cyan-400" />

            <p className="text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
