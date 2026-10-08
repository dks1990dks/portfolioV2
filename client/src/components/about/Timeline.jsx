import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Deepak Codes",
    description:
      "Started building a focused portfolio of business software solutions combining full-stack development with practical business workflow understanding.",
  },
  {
    year: "2026",
    title: "Business Software Development",
    description:
      "Developed and completed applications including DueMate, MVP Store, GRS Inventory, and Dispatch Dashboard while continuing development of ERP, LMS, tax, and trading applications.",
  },
  {
    year: "2026",
    title: "ERP & Business Automation",
    description:
      "Expanded into ERP and workflow-driven applications for areas such as textile operations, school management, accounting, GST workflows, inventory, and business dashboards.",
  },
  {
    year: "Present",
    title: "Building & Expanding",
    description:
      "Continuing to develop production-focused software applications while expanding the Deepak Codes portfolio across ERP, SaaS, dashboards, automation, and business management systems.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            My <span className="text-cyan-400">Journey</span>
          </h2>

          <p className="text-slate-400 mt-4 leading-7 font-light">
            A development journey focused on building practical software
            solutions for real business workflows.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-900 ml-4 md:ml-6 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-400 transition-colors duration-300" />

              {/* Year Label */}
              <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-2.5 py-1 rounded-md border border-cyan-500/10">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mt-3 leading-8 font-light text-base max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}