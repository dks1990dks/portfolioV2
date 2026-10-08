import { motion } from "framer-motion";

export default function ServiceSection({ icon: Icon, title, subtitle, description, features }) {
  return (
    <div className="p-8 lg:p-12 rounded-3xl border border-slate-900 bg-slate-900/20 backdrop-blur-md">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Detail Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Icon className="text-2xl" />
          </div>
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider pt-2">{subtitle}</p>
          <h3 className="text-3xl font-black text-white tracking-tight">{title}</h3>
          <p className="text-slate-400 leading-8 font-light text-base pt-2">{description}</p>
        </div>
        
        {/* Dynamic Badge Column */}
        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl border border-slate-900 bg-slate-950/60 p-4 text-slate-300 text-sm font-light flex items-center gap-2.5">
              <span className="text-cyan-400 font-medium text-xs">✔</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}