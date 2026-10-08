import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ filteredProjects }) {
  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-slate-900 rounded-3xl w-full col-span-full">
        <p className="text-slate-500 text-base font-light">
          No projects found matching your selected filters.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}