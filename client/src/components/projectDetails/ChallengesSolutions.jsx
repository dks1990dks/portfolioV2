import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaExchangeAlt,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";

const stepIcons = [
  FaExchangeAlt,
  FaLayerGroup,
  FaServer,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const blockVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function ChallengesSolutions({ project }) {
  const challenges = project?.challenges || [];

  if (challenges.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Engineering Notes
          </span>

          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Challenges & Solutions
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl">
            Selected implementation challenges and the approaches used to
            address them.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="space-y-16"
        >
          {challenges.map((caseStudy, caseIdx) => (
            <motion.div
              key={`${caseStudy.title}-${caseIdx}`}
              variants={blockVariants}
              className="p-8 rounded-3xl bg-slate-900/10 border border-slate-900 backdrop-blur-sm relative"
            >

              {/* Case Number */}
              <div className="absolute top-4 right-6 text-[10px] font-mono text-slate-700 tracking-wider">
                CASE_{String(caseIdx + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-4 mb-6">
                {caseStudy.title}
              </h3>

              <div className="grid lg:grid-cols-4 gap-6 items-start">

                {/* Challenge */}
                <div className="p-5 rounded-2xl bg-red-950/10 border border-red-900/20">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <FaExclamationTriangle className="text-sm" />
                    <span>Challenge</span>
                  </div>

                  <p className="text-slate-300 font-medium text-sm leading-6">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solutions */}
                {(caseStudy.steps || []).map((step, stepIdx) => {
                  const IconComponent =
                    stepIcons[stepIdx] || FaServer;

                  return (
                    <div
                      key={`${step.label}-${stepIdx}`}
                      className="lg:col-span-1 flex flex-col lg:flex-row items-start gap-4 h-full relative"
                    >
                      <div className="flex lg:flex-col items-center justify-center text-slate-700 text-lg font-light py-2 lg:py-0 lg:h-full lg:pt-8 w-full lg:w-auto select-none">
                        <span className="block lg:hidden">↓</span>
                        <span className="hidden lg:block">→</span>
                      </div>

                      <div className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/20 transition-colors duration-300 flex-1">
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                          <IconComponent className="text-xs" />

                          <span>
                            Solution {String(stepIdx + 1).padStart(2, "0")}:{" "}
                            {step.label}
                          </span>
                        </div>

                        <p className="text-slate-400 text-xs font-light leading-5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}