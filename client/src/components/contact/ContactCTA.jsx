import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Glow Effect Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
          Ready to Build Your Solution?
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
          Have a Project in Mind? <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-blue-500">
            Let's Build It Together.
          </span>
        </h2>

        <p className="text-slate-400 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need a custom ERP, SaaS platform, business dashboard,
          or workflow automation system, share your requirements and let's
          discuss the right approach for your project.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Request a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919737833333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Deepak Codes on WhatsApp"
            className="rounded-xl border border-slate-800 bg-slate-900/80 px-8 py-4 font-semibold text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition flex items-center gap-2"
          >
            <FaWhatsapp className="text-emerald-400 text-lg" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}