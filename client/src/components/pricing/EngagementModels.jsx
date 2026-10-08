import EngagementCard from "./EngagementCard";
import { engagementModels } from "./pricingData";

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Collaboration Options
          </span>

          <h2 className="text-3xl md:text-5xl font-black mt-2">
            Engagement Models
          </h2>

          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Choose a practical way to work together based on your project
            requirements, scope, and development needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {engagementModels.map((model) => (
            <EngagementCard key={model.id} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}