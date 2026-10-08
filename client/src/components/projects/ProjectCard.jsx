import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FeaturedBadge from "./FeaturedBadge";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 hover:border-cyan-400 relative flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        {project.featured && <FeaturedBadge />}

        <img
          src={`${import.meta.env.BASE_URL || "/"}${project.image}`}
          alt={`${project.title} project`}
          className="w-full h-full object-fill transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />

        <div className="absolute top-4 right-4">
          <StatusBadge
            status={project.status}
            label={project.statusLabel}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Category + Industry */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-cyan-400 text-sm font-medium tracking-wide font-mono uppercase">
            {project.category}
          </span>

          {project.industry && (
            <span className="text-slate-500 text-xs text-right">
              {project.industry}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mt-4">
          {project.title}
        </h2>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-slate-300 mt-2 text-sm font-medium">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        {project.description && (
          <p className="text-slate-400 mt-4 text-sm leading-6 font-light">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-7">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            View Case Study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}