import { motion } from "framer-motion";
import GlassCard from "../../ui/Card/GlassCard";

export default function TrustCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="p-8 h-full">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
          <Icon className="text-3xl text-cyan-400" />
        </div>

        <h3 className="text-white text-2xl font-bold mt-6">
          {title}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}