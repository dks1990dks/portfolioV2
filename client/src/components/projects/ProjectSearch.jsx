export default function ProjectSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search projects"
        className="w-full px-5 py-2.5 rounded-xl bg-slate-900/40 border border-slate-900 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/40 transition-colors"
      />

      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          aria-label="Clear project search"
          className="absolute right-3.5 top-2.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}