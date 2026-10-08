import { motion } from "framer-motion";
import GlassCard from "../../ui/Card/GlassCard";

export default function TechCard({
  icon: Icon,
  name,
  color = "cyan",
}) {
  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      glowBg: "bg-cyan-500/10",
      hoverBorder: "hover:border-cyan-400/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    },
    blue: {
      text: "text-blue-400",
      glowBg: "bg-blue-500/10",
      hoverBorder: "hover:border-blue-500/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    },
    emerald: {
      text: "text-emerald-400",
      glowBg: "bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-400/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    },
    violet: {
      text: "text-violet-400",
      glowBg: "bg-violet-500/10",
      hoverBorder: "hover:border-violet-400/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
    orange: {
      text: "text-orange-400",
      glowBg: "bg-orange-500/10",
      hoverBorder: "hover:border-orange-400/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]",
    },
  };

  const theme = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <GlassCard
        className={`p-8 h-full transition-all duration-300 border-slate-800 bg-slate-950/40 backdrop-blur-xl ${theme.hoverBorder} ${theme.hoverShadow}`}
      >
        <div className="flex flex-col items-center">
          <div
            className={`p-4 rounded-2xl mb-5 ${theme.glowBg} border border-white/5 flex items-center justify-center transition-transform duration-300`}
          >
            <Icon className={`text-5xl ${theme.text}`} />
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight">
            {name}
          </h3>
        </div>
      </GlassCard>
    </motion.div>
  );
}