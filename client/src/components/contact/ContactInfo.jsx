import { contactInfo } from "./contactData";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
      <h3 className="text-xl font-bold text-white mb-2">
        Direct Contact Details
      </h3>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
            <FaEnvelope />
          </div>

          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">
              Email
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
            <FaWhatsapp className="text-lg" />
          </div>

          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">
              WhatsApp / Direct
            </p>

            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Deepak Codes on WhatsApp"
              className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition"
            >
              {contactInfo.whatsapp}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
            <FaMapMarkerAlt />
          </div>

          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">
              Location
            </p>

            <p className="text-sm font-medium text-slate-200">
              {contactInfo.location}
            </p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
            <FaGlobe />
          </div>

          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">
              Website
            </p>

            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deepak Codes website"
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}