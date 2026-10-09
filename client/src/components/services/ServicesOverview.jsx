import { FaCogs, FaChartPie, FaShieldAlt } from "react-icons/fa";

const benefits = [
  {
    icon: FaCogs,
    title: "Tailored to Your Workflows",
    description:
      "We don't force your business into pre-made templates. Our software is engineered from scratch around your specific operational processes, accounting rules, and textile metrics.",
  },
  {
    icon: FaChartPie,
    title: "Eliminate Data Silos",
    description:
      "Bring your production line data, student ledgers, invoicing, and inventory balances under a singular, unified environment to maximize clarity and cross-department speed.",
  },
  {
    icon: FaShieldAlt,
    title: "Enterprise Grade Reliability",
    description:
      "Built on a resilient toolchain using secure multi-tenant verification infrastructure, scheduled automated data backups, and high-performance cloud processing nodes.",
  },
];

export default function ServicesOverview() {
  return (
    // Explicit base background canvas wrapper matching global design constraints
    <section
      id="overview"
      className="py-20 bg-slate-950 border-b border-slate-900 relative overflow-hidden"
    >
      {/* Background glow balance layer */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900/10 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Text Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <p className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
              The Strategic Advantage
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-3 tracking-tight">
              Engineered to Solve <br /> Real Operational Friction
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-400 leading-8 font-light text-base lg:text-lg">
              Generic off-the-shelf software solutions often break down when
              exposed to complex industrial operations, legacy calculation
              architectures, or unique regulatory pipelines. We map your actual
              business variables straight into clean, automated custom engines.
            </p>
          </div>
        </div>

        {/* Benefits Matrix Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm group hover:border-slate-800 transition-all duration-300"
              >
                {/* Micro Icon Box Wrapper */}
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 flex items-center justify-center group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all mb-5">
                  <Icon className="text-lg" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-6 font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
