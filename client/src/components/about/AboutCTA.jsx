import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section id="cta" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-linear-to-r from-cyan-600 to-blue-600 p-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Let's Build Something Amazing
          </h2>

          <p className="text-white/90 text-xl mt-8 max-w-3xl mx-auto">
            Whether you're planning an ERP, SaaS platform, dashboard, or
            automation system, let's discuss your requirements and build a
            practical solution together.
          </p>

          <Link
            to="/contact#discovery-form"
            className="inline-block mt-12 bg-white text-slate-900 px-10 py-5 rounded-xl font-bold hover:scale-105 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}