import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StatusBadge from "../projects/StatusBadge";

export default function ProjectHero({ project }) {
  const hasLiveDemo = project.live && project.live !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 border-b border-slate-900">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Category */}
            <div>
              <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
                {project.category || "Software"} System Profile
              </span>

              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight mt-4">
                {project.title}
              </h1>

              {/* Subtitle */}
              {project.subtitle && (
                <p className="text-slate-400 font-light text-lg mt-2 tracking-wide">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-400 font-light text-base leading-8 max-w-2xl">
              {project.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">

              {/* Live Demo */}
              {hasLiveDemo ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-cyan-500/10"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              ) : (
                <span className="inline-flex items-center px-6 py-3 bg-slate-900 border border-slate-800 text-slate-500 font-bold rounded-xl text-sm">
                  Demo Not Available
                </span>
              )}

              {/* GitHub */}
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-bold rounded-xl text-sm transition-colors duration-300"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Contact */}
              <Link
                to="/contact"
                className="px-6 py-3 bg-slate-950 border border-slate-900 hover:border-cyan-500/20 text-cyan-400 hover:text-cyan-300 font-bold rounded-xl text-sm transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl border border-slate-900 bg-slate-900/10 backdrop-blur-md p-6 lg:p-8 space-y-6">

              <h3 className="text-xs font-mono tracking-widest uppercase border-b border-slate-900 pb-3 text-slate-400">
                Project Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                {/* Status */}
                <div>
                  <span className="text-slate-500 text-[11px] font-mono tracking-wider block mb-2 uppercase">
                    Status
                  </span>

                  <StatusBadge
                    status={project.status}
                    label={project.statusLabel}
                  />
                </div>

                {/* Industry */}
                <div>
                  <span className="text-slate-500 text-[11px] font-mono tracking-wider block mb-1 uppercase">
                    Industry
                  </span>

                  <span className="text-slate-200 font-medium text-sm block mt-1">
                    {project.industry || "—"}
                  </span>
                </div>

                {/* Duration */}
                <div>
                  <span className="text-slate-500 text-[11px] font-mono tracking-wider block mb-1 uppercase">
                    Duration
                  </span>

                  <span className="text-slate-200 font-medium text-sm block mt-1">
                    {project.duration || "—"}
                  </span>
                </div>

              </div>

              {/* Project Type */}
              {project.type && (
                <div className="pt-5 border-t border-slate-900">
                  <span className="text-slate-500 text-[11px] font-mono tracking-wider block mb-1 uppercase">
                    Project Type
                  </span>

                  <span className="text-slate-200 font-medium text-sm">
                    {project.type}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}