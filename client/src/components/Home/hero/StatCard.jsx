import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  color = "cyan", // Changed to accept the color name directly (e.g., "cyan", "blue", "indigo")
  delay = 0,
}) {
  // Map our dynamic colors to Tailwind classes for borders, shadows, and backgrounds safely
  const colorMap = {
    cyan: {
      bg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      indicator: "bg-cyan-500",
      hoverBorder: "hover:border-cyan-400/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    },
    blue: {
      bg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      indicator: "bg-blue-500",
      hoverBorder: "hover:border-blue-500/50",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    },
    // Add more colors if needed in the future (e.g., emerald, violet)
  };

  const theme = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-950/40
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        ${theme.hoverBorder}
        ${theme.hoverShadow}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            {title}
          </p>
          <h3 className="text-3xl font-extrabold text-white mt-2 tracking-tight">
            {value}
          </h3>
        </div>

        {/* Replaced solid box with a premium glass icon container */}
        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center relative ${theme.bg}`}>
          {/* Central glowing core */}
          <span className={`w-2.5 h-2.5 rounded-full ${theme.indicator} shadow-lg`} />
          <span className={`absolute w-2.5 h-2.5 rounded-full ${theme.indicator} animate-ping opacity-75`} />
        </div>
      </div>
    </motion.div>
  );
}