import { FaWhatsapp, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function ProjectCTA() {
  // Configuration links for communication channels
  const channels = [
    {
      label: "WhatsApp",
      href: "https://wa.me/your-number-here", // Replace with your WhatsApp link
      icon: FaWhatsapp,
      color: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
      description: "Immediate text ping"
    },
    {
      label: "Email",
      href: "mailto:your-email@example.com", // Replace with your address
      icon: FaEnvelope,
      color: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
      description: "Direct system brief"
    },
    {
      label: "Schedule Call",
      href: "https://calendly.com/your-profile", // Replace with your booking tool
      icon: FaCalendarAlt,
      color: "bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200",
      description: "Architecture discovery session"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient radial glow grid layout */}
      <div className="absolute inset-0 bg-linear-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl bg-slate-900/10 border border-slate-900 backdrop-blur-sm p-8 lg:p-12 text-center space-y-8">
          
          {/* Main Typography Header Block */}
          <div className="space-y-3">
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Interested in building similar software?
            </h2>
            <p className="text-slate-400 text-base font-light max-w-lg mx-auto leading-7">
              Let's discuss your project parameters, custom integration bounds, and feature milestones.
            </p>
          </div>

          {/* Action Channel Matrix Row Layout */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
            {channels.map((channel) => {
              const IconComponent = channel.icon;

              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 ${channel.color}`}
                >
                  <IconComponent className="text-xl shrink-0" />
                  <div>
                    <span className="block font-bold text-sm tracking-wide">
                      {channel.label}
                    </span>
                    <span className="block text-[10px] opacity-60 font-medium group-hover:opacity-80 transition-opacity mt-0.5">
                      {channel.description}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-[10px] font-mono text-slate-700 select-none pt-4">
            PIPELINE_READY // INTERACTION_NODE_ACTIVE
          </div>

        </div>
      </div>
    </section>
  );
}