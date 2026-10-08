import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-cyan-600/20 to-blue-600/20 blur-3xl" />

      <Container>
        <div className="relative rounded-3xl border border-cyan-500 bg-slate-900 p-12 text-center">
          <h2 className="text-5xl font-black text-white">
            Let's Build Your Next Software Project
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Whether you need an ERP, SaaS platform, dashboard or a custom
            business application, let's discuss your requirements and build a
            scalable solution together.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="https://wa.me/919737833333"
              aria-label="Contact Deepak Codes on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold flex items-center gap-3"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="mailto:contact@deepakcodes.com"
              aria-label="Email Deepak Codes"
              className="px-8 py-4 rounded-xl border border-slate-600 hover:border-cyan-400 text-white flex items-center gap-3"
            >
              <FaEnvelope />
              Email Me
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
