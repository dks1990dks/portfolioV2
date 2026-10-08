import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-center">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
        Connect Across Platforms
      </h4>

      <div className="flex justify-center gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/dks1990dks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Deepak Codes on GitHub"
          className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition"
        >
          <FaGithub className="text-lg" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/deepak-saw-33962354/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Deepak Codes on LinkedIn"
          className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition"
        >
          <FaLinkedin className="text-lg" />
        </a>

        {/* Email */}
        <a
          href="mailto:contact@deepakcodes.com"
          aria-label="Email Deepak Codes"
          className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition"
        >
          <FaEnvelope className="text-lg" />
        </a>
      </div>
    </div>
  );
}