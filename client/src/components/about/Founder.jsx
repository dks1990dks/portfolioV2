import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Founder() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-3xl bg-linear-to-br from-cyan-500 to-blue-600 p-1">
              <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}social/deepak.webp`}
                  alt="Deepak Kumar — Founder and Full Stack Developer"
                  className="w-full h-full rounded-3xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-xs font-semibold">
              Founder
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Deepak Kumar
            </h2>

            <p className="text-xl text-slate-400 mt-2">
              Founder • Full Stack Developer
            </p>

            <p className="mt-8 text-slate-300 leading-8">
              My journey began in accounting and business operations, where I
              experienced how manual processes can slow down business
              workflows. Today I build ERP systems, SaaS platforms, dashboards,
              and automation software focused on practical business needs.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/dks1990dks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub
                  className="text-3xl text-white hover:text-cyan-400 transition-colors"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/deepak-saw-33962354/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin
                  className="text-3xl text-white hover:text-cyan-400 transition-colors"
                  aria-hidden="true"
                />
              </a>

              <a
                href="mailto:contact@deepakcodes.com"
                aria-label="Email Deepak Codes"
              >
                <FaEnvelope
                  className="text-3xl text-white hover:text-cyan-400 transition-colors"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}