import { motion } from "framer-motion";
import GlassCard from "../../ui/Card/GlassCard";
import TimelineConnector from "./TimelineConnector";

export default function ProcessCard({
  number,
  icon: Icon,
  title,
  description,
  last = false,
}) {
  return (
    <div className="relative">
      {!last && <TimelineConnector />}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
      >
        <GlassCard className="p-8 text-center h-full">
          <div className="text-cyan-400 text-lg font-bold">
            {number}
          </div>

          <div className="mx-auto mt-5 w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center">
            <Icon className="text-4xl text-cyan-400" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-4 text-slate-400 leading-7">
            {description}
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}