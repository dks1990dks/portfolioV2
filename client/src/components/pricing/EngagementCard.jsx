import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function EngagementCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features = [],
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          {Icon && <Icon className="text-cyan-400 text-2xl" />}
        </div>

        <h3 className="text-2xl font-bold text-white mt-6">
          {title}
        </h3>

        <p className="text-cyan-400 text-sm font-medium mt-1">
          {subtitle}
        </p>

        <p className="text-slate-400 mt-5 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-8 space-y-3">
          {features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-slate-300 text-sm"
            >
              <Check className="text-cyan-400 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="mt-10 w-full rounded-xl bg-cyan-500 py-3.5 text-slate-950 text-center font-bold hover:bg-cyan-400 transition shadow-md shadow-cyan-500/10 block"
      >
        Request Proposal
      </Link>
    </div>
  );
}