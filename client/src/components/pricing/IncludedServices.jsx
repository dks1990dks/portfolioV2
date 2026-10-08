import { Check } from "lucide-react";

const services = [
  "Requirement Analysis",
  "Responsive UI Design",
  "Frontend Development",
  "Backend Development",
  "REST API Development",
  "Database Design",
  "Authentication & Security",
  "Testing & QA",
  "Deployment & Hosting Setup",
  "Handover Documentation",
];

export default function IncludedServices() {
  return (
    <section className="py-24 bg-slate-900/40 text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Project Deliverables
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Common Project Deliverables
          </h2>

          <p className="text-slate-400 mt-4 text-sm md:text-base">
            Typical development deliverables included based on the agreed
            project scope.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 flex items-center gap-3 text-slate-200 text-sm font-medium hover:border-cyan-500/40 transition"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>

              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}