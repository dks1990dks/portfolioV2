import { Link } from "react-router-dom";

import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";

import {
  companyLinks,
  serviceLinks,
  socialLinks,
} from "./footerLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-black text-white"
              aria-label="Deepak Codes home"
            >
              Deepak<span className="text-cyan-400">Codes</span>
            </Link>

            <p className="text-slate-400 mt-6 leading-8">
              Building custom ERP systems, SaaS platforms, business dashboards,
              and workflow automation solutions.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={companyLinks}
            isRoute
          />

          <FooterColumn
            title="Solutions"
            links={serviceLinks}
          />

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Connect
            </h3>

            <div className="space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}