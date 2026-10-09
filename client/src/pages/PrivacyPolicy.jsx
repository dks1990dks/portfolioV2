import SEO, { getPrivacyPolicySchemaGraph } from "../components/SEO";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

export default function PrivacyPolicy() {
  const lastUpdated = "August 2026";

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy — Data Security & Usage"
        description="Learn how Deepak Codes collects, uses, and protects personal and project information submitted through the website and contact forms."
        pathname="/privacy-policy"
        ogType="website"
        breadcrumbs={breadcrumbItems}
        schemas={[getPrivacyPolicySchemaGraph()]}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main className="text-slate-300 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <header id="hero" className="border-b border-slate-800 pb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Privacy Policy
              </h1>

              <p className="text-sm text-slate-400">
                Last Updated: {lastUpdated}
              </p>
            </header>

            <section id="information-collected" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                1. Information We Collect
              </h2>

              <p className="leading-relaxed">
                When you submit an inquiry, request a proposal, or contact
                Deepak Codes through{" "}
                <strong className="text-white">deepakcodes.com</strong>, we
                may collect information such as your name, email address,
                phone or WhatsApp number, company details, project
                requirements, budget information, timeline, and project
                description.
              </p>
            </section>

            <section id="information-use" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                2. How We Use Your Information
              </h2>

              <p className="leading-relaxed">
                Information submitted through the website may be used to:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>
                  Understand project requirements and prepare proposals or
                  technical estimates.
                </li>
                <li>
                  Communicate regarding project discussions, scheduling,
                  consultations, and development updates.
                </li>
                <li>
                  Respond to inquiries and provide project-related support.
                </li>
              </ul>
            </section>

            <section id="data-protection" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                3. Data Protection & Confidentiality
              </h2>

              <p className="leading-relaxed">
                Reasonable technical and organizational measures are used to
                protect information submitted through the website. Personal
                information is not sold or rented to third parties for
                marketing purposes.
              </p>
            </section>

            <section id="cookies-analytics" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                4. Cookies & Analytics
              </h2>

              <p className="leading-relaxed">
                The website may use cookies or analytics technologies to
                understand website usage, monitor performance, and improve the
                user experience. Where applicable, such technologies may
                collect aggregated or technical usage information.
              </p>
            </section>

            <section id="third-party-services" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                5. Third-Party Services
              </h2>

              <p className="leading-relaxed">
                Website operations may involve third-party services such as
                hosting, database, email delivery, analytics, or communication
                providers. These services may process information as necessary
                to provide their respective functions.
              </p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                6. Contact Information
              </h2>

              <p className="leading-relaxed">
                If you have questions regarding this Privacy Policy, please
                contact:
              </p>

              <a
                href="mailto:contact@deepakcodes.com"
                className="inline-block text-cyan-400 hover:text-cyan-300 transition"
              >
                contact@deepakcodes.com
              </a>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}