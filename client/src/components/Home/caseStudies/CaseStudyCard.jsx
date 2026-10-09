import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlassCard from "../../ui/Card/GlassCard";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function CaseStudyCard({
  slug,
  category,
  title,
  image,
  description,
  subtitle,
  problem,
  solution,
  features = [],
  technologies = [],
  live,
  github,
}) {
  const hasLiveDemo = live && live !== "#";
  const hasGithub = github && github !== "#";

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <GlassCard className="overflow-hidden">
        {image && (
          <img
            src={image}
            alt={`${title} project screenshot`}
            className="w-full aspect-video object-fill rounded-t-lg"
            loading="lazy"
          />
        )}

        <div className="p-8">
          {category && (
            <span className="text-cyan-400 text-sm font-medium">
              {category}
            </span>
          )}

          <h3 className="text-3xl font-bold text-white mt-3">{title}</h3>

          {(subtitle || description) && (
            <p className="text-slate-400 mt-3 leading-relaxed">
              {subtitle || description}
            </p>
          )}

          {problem && (
            <div className="mt-8">
              <h4 className="text-cyan-400 font-semibold">Business Problem</h4>

              <p className="text-slate-400 mt-2 leading-relaxed">{problem}</p>
            </div>
          )}

          {solution && (
            <div className="mt-6">
              <h4 className="text-blue-400 font-semibold">Solution</h4>

              <p className="text-slate-400 mt-2 leading-relaxed">{solution}</p>
            </div>
          )}

          {features.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((item) => (
                <span
                  key={item}
                  className="bg-slate-800 rounded-lg px-3 py-2 text-sm text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              to={`/projects/${slug}`}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Case Study
              <FaArrowRight className="text-sm" />
            </Link>

            {hasLiveDemo && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}

            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-slate-300 transition-colors"
              >
                <FaGithub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
