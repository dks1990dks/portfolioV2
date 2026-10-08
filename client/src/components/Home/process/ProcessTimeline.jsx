import { motion } from "framer-motion";

const steps = [
  "Discovery",
  "Planning",
  "UI / UX Design",
  "Development",
  "Testing",
  "Deployment",
];

export default function ProcessTimeline() {
  return (
      <div className="w-full max-w-5xl mx-auto mb-20 hidden lg:block dark">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700/50 -translate-y-1/2" />

          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-linear-to-r from-cyan-500 to-blue-500 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />

          {steps.map((step, index) => (
            <div key={step} className="relative z-10 flex flex-col items-center group">
              <motion.div
                className="w-5 h-5 rounded-full bg-slate-950 border-4 border-slate-700 group-hover:border-cyan-500 transition-colors duration-300 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white transition-colors duration-300" />
              </motion.div>

              <span className="absolute top-8 whitespace-nowrap text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    
  );
}