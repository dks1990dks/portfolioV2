import React from "react";
import SEO from "../components/SEO";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getProfessionalServiceSchema,
  getHomeFAQSchema,
} from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/Home/hero/Hero";
import Technologies from "../components/Home/technologies/Technologies";
import Solutions from "../components/Home/solutions/Solutions";
import Industries from "../components/Home/industries/Industries";
import FeaturedCaseStudies from "../components/Home/caseStudies/FeaturedCaseStudies";
import WhyChooseUs from "../components/Home/whyChooseUs/WhyChooseUs";
import DevelopmentProcess from "../components/Home/process/DevelopmentProcess";
import TrustSection from "../components/Home/trust/TrustSection";
import FAQ from "../components/Home/faq/FAQ";
import CTA from "../components/Home/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      {/* High-Impact Targeted SEO Metadata */}
      <SEO
        title="Custom ERP, SaaS & Business Software Development"
        description="Deepak Codes builds custom ERP systems, SaaS platforms, dashboards, and business web applications using React, Node.js, and MongoDB."
        pathname="/"
        keywords={[
          "Custom ERP Development",
          "SaaS Development",
          "Business Software Development",
          "React Developer",
          "Node.js Developer",
          "Full Stack Developer",
          "ERP Software Developer",
        ]}
        schemas={[
          getOrganizationSchema(),
          getWebsiteSchema(),
          getProfessionalServiceSchema(),
          getHomeFAQSchema(),
        ]}
      />

      {/* Semantic Page Layout */}
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Solutions />
        <Industries />
        <FeaturedCaseStudies />
        <WhyChooseUs />
        <DevelopmentProcess />
        <TrustSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
