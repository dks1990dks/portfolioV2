import SEO, { getTermsSchemaGraph } from "../components/SEO";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

export default function Terms() {
  const lastUpdated = "August 2026";

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
  ];

  return (
    <>
      <SEO
        title="Terms of Service — Software & Client Agreement"
        description="Review the terms and conditions governing software development services, project deliverables, payment terms, scope changes, and intellectual property at Deepak Codes."
        pathname="/terms"
        ogType="website"
        breadcrumbs={breadcrumbItems}
        schemas={[getTermsSchemaGraph()]}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main className="text-slate-300 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <header id="hero" className="border-b border-slate-800 pb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Terms of Service
              </h1>

              <p className="text-sm text-slate-400">
                Last Updated: {lastUpdated}
              </p>
            </header>

            <section id="scope" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                1. Scope of Services
              </h2>

              <p className="leading-relaxed">
                <strong className="text-white">Deepak Codes</strong> provides
                custom software development, ERP systems, SaaS applications,
                business dashboards, API integrations, workflow automation,
                and technical consulting. Specific deliverables, timelines,
                technologies, and budgets are defined in the applicable
                project proposal or agreement.
              </p>
            </section>

            <section id="intellectual-property" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                2. Intellectual Property Rights
              </h2>

              <p className="leading-relaxed">
                Upon full settlement of the agreed project fees, custom source
                code, documentation, and technical assets developed specifically
                for the client will be transferred or licensed as specified in
                the applicable project agreement.
              </p>

              <p className="leading-relaxed">
                Third-party libraries, frameworks, services, APIs, fonts,
                plugins, and other components remain subject to their
                respective licenses and terms.
              </p>
            </section>

            <section id="payment-terms" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                3. Payment Terms & Milestones
              </h2>

              <p className="leading-relaxed">
                Project work may begin after receipt of the agreed initial
                payment or milestone payment. Where milestone-based delivery
                is agreed, payments are linked to the deliverables and
                milestones described in the project proposal or agreement.
              </p>
            </section>

            <section id="scope-changes" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                4. Scope Changes
              </h2>

              <p className="leading-relaxed">
                Requests for additional features, integrations, design changes,
                or architectural modifications outside the agreed project
                scope may require a separate estimate, timeline adjustment, or
                additional milestone.
              </p>
            </section>

            <section id="client-responsibilities" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                5. Client Responsibilities
              </h2>

              <p className="leading-relaxed">
                Clients are responsible for providing accurate requirements,
                necessary content and business information, timely feedback,
                and access to third-party services or systems required for the
                agreed project.
              </p>
            </section>

            <section id="third-party-services" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                6. Third-Party Services
              </h2>

              <p className="leading-relaxed">
                Projects may depend on third-party services such as hosting
                providers, payment gateways, cloud platforms, communication
                services, APIs, or software libraries. Their availability,
                pricing, policies, and performance are governed by the
                respective providers.
              </p>
            </section>

            <section id="governing-law" className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                7. Governing Law & Contact
              </h2>

              <p className="leading-relaxed">
                These terms are intended to be governed by the applicable laws
                of India. Specific project agreements may contain additional
                contractual terms regarding jurisdiction, dispute resolution,
                payment, intellectual property, confidentiality, or delivery.
              </p>

              <p className="leading-relaxed">
                For legal inquiries or project agreements, contact:
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