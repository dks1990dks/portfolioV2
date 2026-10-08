const stats = [
  { value: "4", label: "Completed Projects" },
  { value: "3", label: "Projects In Development" },
  { value: "7", label: "Business Applications" },
  { value: "Full Stack", label: "Development" },
];

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl bg-slate-900 border border-slate-700 p-6 text-center"
        >
          <h3 className="text-4xl font-black text-cyan-400">
            {stat.value}
          </h3>

          <p className="text-slate-400 mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}