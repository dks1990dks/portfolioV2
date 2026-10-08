import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../projects/projectsData";
import StatusBadge from "../projects/StatusBadge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export default function RelatedProjects({ current }) {
  const relatedProjects = projects
    .filter((project) => project.slug !== current?.slug)
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Explore More Work
          </span>

          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Related Projects
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl">
            Explore other business applications, SaaS products, ERP systems,
            and dashboards from the portfolio.
          </p>
        </div>

        {/* Related Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {relatedProjects.map((project) => {
            const IconComponent = project.icon;

            return (
              <motion.div
                key={project.slug}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block h-full p-6 rounded-2xl bg-slate-900/20 border border-slate-900 hover:border-cyan-500/20 hover:bg-slate-900/40 transition-all duration-300"
                >
                  {/* Icon + Status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
                      {IconComponent && <IconComponent className="text-lg" />}
                    </div>

                    <StatusBadge
                      status={project.status}
                      label={project.statusLabel}
                    />
                  </div>

                  {/* Category */}
                  <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-xs text-slate-500 mt-1">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-6 mt-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 text-xs font-bold text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                    <span>View Case Study</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}