import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <div className="border-t border-slate-800 mt-14 pt-10">
      {/* Contact & Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 text-sm text-slate-400">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt
            className="text-cyan-400 text-base"
            aria-hidden="true"
          />
          <span>Surat, Gujarat, India</span>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope
            className="text-cyan-400 text-base"
            aria-hidden="true"
          />
          <a
            href="mailto:contact@deepakcodes.com"
            className="hover:text-cyan-400 transition"
          >
            contact@deepakcodes.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaGlobe
            className="text-cyan-400 text-base"
            aria-hidden="true"
          />
          <a
            href="https://deepakcodes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            deepakcodes.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaClock
            className="text-amber-400 text-base"
            aria-hidden="true"
          />
          <span>Monday–Saturday, 09:00–19:00</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
          <FaCheckCircle className="text-xs" aria-hidden="true" />
          <span className="font-medium text-xs">
            Available for New Projects
          </span>
        </div>
      </div>

      {/* Mini CTA Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-linear-to-r from-slate-900 to-slate-950 p-8 text-center mb-10">
        <div className="absolute inset-0 bg-cyan-500/5 blur-xl pointer-events-none" />

        <h4 className="text-xl font-bold text-white relative z-10">
          Ready to build your next software project?
        </h4>

        <div className="mt-4 relative z-10">
          <Link
            to="/contact#discovery-form"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/10"
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm pt-4 border-t border-slate-900">
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Deepak Codes. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            to="/privacy-policy"
            className="text-slate-500 hover:text-cyan-400 transition"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="text-slate-500 hover:text-cyan-400 transition"
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}