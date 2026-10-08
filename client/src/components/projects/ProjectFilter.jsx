const categories = [
  "All",
  "ERP",
  "SaaS",
  "E-Commerce",
  "Inventory",
  "Dashboard",
  "Education",
  "FinTech",
];

const statuses = [
  { value: "all", label: "All Projects" },
  { value: "completed", label: "Completed" },
  { value: "in-development", label: "In Development" },
];

export default function ProjectFilter({
  activeCategory,
  setActiveCategory,
  activeStatus,
  setActiveStatus,
}) {
  return (
    <div className="space-y-5">
      {/* Category Filter */}
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
          Category
        </p>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/40 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
          Project Status
        </p>

        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status.value}
              type="button"
              onClick={() => setActiveStatus(status.value)}
              className={`px-5 py-2 rounded-xl text-sm transition-all duration-300 font-medium ${
                activeStatus === status.value
                  ? "bg-slate-100 text-slate-950 shadow-lg"
                  : "bg-slate-900/40 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800"
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}