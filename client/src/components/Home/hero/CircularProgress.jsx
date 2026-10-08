import { motion } from "framer-motion";

export default function CircularProgress() {
  const size = 150;
  const radius = 60;
  const stroke = 8;

  const normalized = radius - stroke * 0.5;
  const circumference = normalized * 2 * Math.PI;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center"
    >
      {/* Circle */}
      <div
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="absolute inset-0"
        >
          <circle
            stroke="#1e293b"
            fill="transparent"
            strokeWidth={stroke}
            r={normalized}
            cx={size / 2}
            cy={size / 2}
          />

          <motion.circle
            stroke="#06b6d4"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            r={normalized}
            cx={size / 2}
            cy={size / 2}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5 }}
          />
        </svg>

        {/* Content inside circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-base font-bold text-white tracking-wide leading-tight">
            FULL STACK
          </h2>

          <p className="text-cyan-400 text-xs font-medium mt-1">
            Development
          </p>
        </div>
      </div>

      {/* Technologies below circle */}
      <p className="mt-4 text-slate-400 text-sm text-center">
        React • Node.js • MongoDB
      </p>
    </motion.div>
  );
}