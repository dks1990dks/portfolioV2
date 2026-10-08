import { motion } from "framer-motion";
import RevenueChart from "./RevenueChart";
import ActivityCard from "./ActivityCard";
import StatCard from "./StatCard";
import CircularProgress from "./CircularProgress";
import FloatingNotification from "./FloatingNotification";
import KpiGrid from "./KpiGrid";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div className="space-y-6">
        {/* Portfolio Statistics */}
        <div className="grid grid-cols-2 gap-5">
          <StatCard
            title="Completed Projects"
            value="4"
            color="cyan"
            delay={0.2}
          />

          <StatCard
            title="In Development"
            value="3"
            color="blue"
            delay={0.3}
          />
        </div>

        {/* Business Analytics Preview */}
        <RevenueChart />

        {/* Portfolio Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CircularProgress
            percentage={100}
            title="Full-Stack Development"
          />

          <KpiGrid />
        </div>

        {/* Development Capabilities */}
        <ActivityCard />
      </div>

      {/* Automation Capability */}
      <FloatingNotification />

      {/* Portfolio Highlight */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute -top-6 -right-4 lg:-right-10 bg-cyan-500/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl shadow-cyan-500/30 border border-cyan-400/20 z-10 hidden sm:block"
      >
        <p className="text-cyan-100/90 text-xs font-semibold tracking-wider uppercase">
          Business Software
        </p>

        <h2 className="text-white text-2xl font-extrabold mt-1 tracking-tight">
          ERP • SaaS
        </h2>
      </motion.div>
    </motion.div>
  );
}