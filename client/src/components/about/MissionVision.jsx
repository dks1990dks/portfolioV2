import { mission, vision } from "./data";

export default function MissionVision() {
  const MissionIcon = mission.icon;
  const VisionIcon = vision.icon;

  return (
    <section id="mission-vision" className="py-20 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative group rounded-3xl border border-slate-900 bg-linear-to-b from-slate-900 to-slate-950/20 p-8 lg:p-10 transition-all hover:border-cyan-500/30">
            <div className="absolute inset-0 bg-cyan-500/5 blur-xl pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
              {MissionIcon && <MissionIcon className="text-xl" />}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {mission.title}
            </h3>

            <p className="text-slate-400 leading-8 font-light text-base lg:text-lg">
              {mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="relative group rounded-3xl border border-slate-900 bg-linear-to-b from-slate-900 to-slate-950/20 p-8 lg:p-10 transition-all hover:border-blue-500/30">
            <div className="absolute inset-0 bg-blue-500/5 blur-xl pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              {VisionIcon && <VisionIcon className="text-xl" />}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {vision.title}
            </h3>

            <p className="text-slate-400 leading-8 font-light text-base lg:text-lg">
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}