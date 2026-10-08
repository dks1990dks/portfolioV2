import { motion } from "framer-motion";
import GlassCard from "../../ui/Card/GlassCard";

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  features,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="p-8 h-full overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
          <Icon className="text-3xl text-cyan-400" />
        </div>

        <h3 className="text-2xl font-bold text-white mt-6">
          {title}
        </h3>

        <p className="mt-4 text-slate-400">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-8">
          {features.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-200 text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}