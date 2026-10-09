import { FaChartLine } from "react-icons/fa";

export default function BusinessValue({ project }) {
  if (!project?.businessValue) return null;

  return (
    <section id="business-value" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="p-6 rounded-2xl bg-linear-to-r from-cyan-950/60 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-lg shadow-cyan-950/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 shrink-0 mt-1">
            <FaChartLine className="text-xl" />
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Business Value
            </h3>

            <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
              {project.businessValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}