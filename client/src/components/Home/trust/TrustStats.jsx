const stats = [
  {
    value: "React",
    label: "Frontend",
  },
  {
    value: "Node.js",
    label: "Backend",
  },
  {
    value: "MongoDB",
    label: "Database",
  },
  {
    value: "TypeScript",
    label: "Development",
  },
];

export default function TrustStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center"
        >
          <h2 className="text-cyan-400 text-3xl font-bold">
            {item.value}
          </h2>

          <p className="text-slate-400 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}