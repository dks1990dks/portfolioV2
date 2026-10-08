import { motion } from "framer-motion";
import GlassCard from "../../ui/Card/GlassCard";

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="p-8 h-full group">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
          <Icon className="text-3xl text-cyan-400 group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-2xl font-bold text-white mt-6">
          {title}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}