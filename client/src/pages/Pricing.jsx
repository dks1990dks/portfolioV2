import SEO, { getPricingSchemaGraph } from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

import PricingHero from "../components/pricing/PricingHero";
import CoreServices from "../components/pricing/CoreServices";
import WhyChooseUs from "../components/pricing/WhyChooseUs";
import EngagementModels from "../components/pricing/EngagementModels";
import IncludedServices from "../components/pricing/IncludedServices";
import DevelopmentProcess from "../components/pricing/DevelopmentProcess";
import WhatHappensNext from "../components/pricing/WhatHappensNext";
import TechExpertise from "../components/pricing/TechExpertise";
import PricingFAQ from "../components/pricing/PricingFAQ";
import QuoteCTA from "../components/pricing/QuoteCTA";

export default function Pricing() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ];

  return (
    <>
      <SEO
        title="Pricing & Engagement Models for Business Software"
        description="Flexible engagement models for custom ERP systems, SaaS applications, business dashboards, and workflow automation. Request a tailored software development proposal."
        pathname="/pricing"
        ogType="website"
        keywords={[
          "Software Development Pricing",
          "Custom Software Development",
          "ERP Development",
          "SaaS Development",
          "Business Software Development",
          "Software Development Proposal",
          "Dedicated Development",
          "Software Consulting",
        ]}
        breadcrumbs={breadcrumbItems}
        schemas={[getPricingSchemaGraph()]}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main>
          <PricingHero />
          <CoreServices />
          <WhyChooseUs />
          <EngagementModels />
          <IncludedServices />
          <DevelopmentProcess />
          <WhatHappensNext />
          <TechExpertise />
          <PricingFAQ />
          <QuoteCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}