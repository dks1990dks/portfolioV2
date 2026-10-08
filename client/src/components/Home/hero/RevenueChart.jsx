import { motion } from "framer-motion";

export default function RevenueChart() {
  const bars = [35, 50, 42, 75, 60, 95, 80];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-6"
    >
      <div className="mb-8">
        <p className="text-slate-400">
          Business Analytics
        </p>

        <h2 className="text-white text-3xl font-bold">
          Dashboard Preview
        </h2>
      </div>

      <div className="h-44 flex items-end gap-3">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              delay: index * 0.1,
            }}
            className="flex-1 rounded-t-xl bg-linear-to-t from-cyan-600 to-blue-500"
          />
        ))}
      </div>
    </motion.div>
  );
}