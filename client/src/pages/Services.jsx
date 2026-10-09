import SEO from "../components/SEO";
import { getOrganizationSchema, getServiceSchema } from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

// Core Component Segment Layers
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import FeaturedSolutions from "../components/services/FeaturedSolutions";
import ServiceSection from "../components/services/ServiceSection";
import TechnologyStack from "../components/services/TechnologyStack";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceCTA from "../components/services/ServiceCTA";

// Central Data Array Matrix
import { services } from "../components/services/servicesData";

export default function Services() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  return (
    <>
      {/* High-Impact Services Page SEO Metadata */}
      <SEO
        title="Custom ERP, SaaS & Business Automation Development Services"
        description="Software solutions engineered around real business logic. We build custom Textile ERPs, School ERPs, GST automation engines, SaaS platforms, and enterprise API integrations."
        pathname="/services"
        ogType="website"
        keywords={[
          "Custom ERP Development Services",
          "Textile ERP Software",
          "School Management System Development",
          "GST Accounting Automation",
          "Custom SaaS Application Development",
          "Business Intelligence Dashboards",
          "Enterprise API Integration",
          "Workflow Automation Engineer",
        ]}
        breadcrumbs={breadcrumbItems}
        schemas={[
          getOrganizationSchema(),
          getServiceSchema({
            title:
              "Custom ERP, SaaS & Business Automation Development Services",
            description:
              "Software solutions engineered around real business logic.",
          }),
        ]}
      />

      {/* Base layout layer ensuring a flawless pure dark theme canvas */}
      <div className="bg-slate-950 min-h-screen text-white antialiased">
        {/* Structural Navigation header */}
        <Navbar />

        <main>
          {/* Hero Welcome Matrix Section */}
          <ServicesHero />

          {/* Strategic Advantage & Operational Friction Overview Block */}
          <ServicesOverview />

          {/* Specialized Industrial Solutions (Textile, School, Finance Automation) */}
          <FeaturedSolutions />

          {/* Comprehensive Functional Architecture Capabilities Grid */}
          <section
            id="services"
            className="bg-slate-950 py-24 border-b border-slate-900"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-16">
                <p className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
                  Capabilities Matrix
                </p>
                <h2 className="text-3xl lg:text-4xl font-black mt-2 tracking-tight">
                  Comprehensive Technical Competencies
                </h2>
              </div>

              <div className="space-y-16">
                {services.map((service) => (
                  <ServiceSection key={service.id} {...service} />
                ))}
              </div>
            </div>
          </section>

          {/* Utility Support Engineering Foundations */}
          <TechnologyStack />

          <ServiceFAQ />

          <ServiceCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
