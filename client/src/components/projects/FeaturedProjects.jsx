import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import StatusBadge from "./StatusBadge";

export default function FeaturedProjects() {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  if (!featured.length) return null;

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
            Selected Work
          </p>

          <h2 className="text-3xl lg:text-4xl font-black mt-2 tracking-tight">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4 leading-7">
            A selection of software products and business applications
            currently featured in the portfolio.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={`${import.meta.env.BASE_URL || "/"}${project.image}`}
                  alt={`${project.title} project`}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Status */}
                <div className="absolute top-4 right-4">
                  <StatusBadge
                    status={project.status}
                    label={project.statusLabel}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">
                    {project.category}
                  </span>

                  <span className="text-slate-500 text-xs">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-4">
                  {project.title}
                </h3>

                <p className="text-cyan-400 text-sm mt-1 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-slate-400 text-sm leading-7 mt-4">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-7">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
                  >
                    View Case Study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All Projects CTA */}
        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm font-semibold"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}