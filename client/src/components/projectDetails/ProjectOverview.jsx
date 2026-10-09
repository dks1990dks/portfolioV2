export default function ProjectOverview({ project }) {
  if (!project) return null;

  const hasProblem = Boolean(project.problem);
  const hasSolution = Boolean(project.solution);

  if (!hasProblem && !hasSolution) {
    return null;
  }

  return (
    <section id="overview" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Case Overview
          </span>

          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Project Scope
          </h2>
        </div>

        {/* Problem → Solution Pipeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-px before:bg-linear-to-b before:from-red-500/30 before:to-cyan-500/30">
          {/* Business Problem */}
          {hasProblem && (
            <div className="relative pl-14 md:pl-20 group">
              <div className="absolute left-3 md:left-5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-red-500 flex items-center justify-center text-xs z-10 shadow-lg shadow-red-500/20">
                ⚠️
              </div>

              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-red-400 font-bold">
                  Business Problem
                </h3>

                <p className="text-slate-400 font-light text-base leading-8 mt-3">
                  {project.problem}
                </p>
              </div>
            </div>
          )}

          {hasProblem && hasSolution && (
            <div className="pl-14 md:pl-20 py-2 text-slate-700 text-xl font-light select-none">
              ↓
            </div>
          )}

          {/* Solution */}
          {hasSolution && (
            <div className="relative pl-14 md:pl-20 group">
              <div className="absolute left-3 md:left-5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-xs z-10 shadow-lg shadow-cyan-400/20">
                ⚙️
              </div>

              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                  Our Solution
                </h3>

                <p className="text-slate-400 font-light text-base leading-8 mt-3">
                  {project.solution}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}