import React from "react";
import SEO from "../components/SEO";
import {
  getContactSchemaGraph,
} from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactServices from "../components/contact/ContactServices";
import WhyWorkWithMe from "../components/contact/WhyWorkWithMe";
import TrustSignals from "../components/contact/TrustSignals";
import ContactFAQ from "../components/contact/ContactFAQ";
import SocialLinks from "../components/contact/SocialLinks";

export default function Contact() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* Contact & Consultation Page SEO Metadata */}
      <SEO
        title="Contact & Technical Consultation — Request Proposal"
        description="Book a free discovery call or request a software proposal. Direct inquiry channel for Textile ERPs, School LMS, GST accounting engines, and custom React Node.js web applications."
        pathname="/contact"
        ogType="website"
        keywords={[
          "Contact Deepak Codes",
          "Book Software Consultation",
          "Request ERP Proposal",
          "Hire React Node Developer India",
          "Surat Software Developer Contact",
          "Custom SaaS Development Consultation",
          "Hire Full Stack Developer Surat",
        ]}
        breadcrumbs={breadcrumbItems}
        schemas={[
          getContactSchemaGraph(),
          
        ]}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main>
          {/* Hero with "Book a Free Discovery Call" Messaging */}
          <ContactHero />

          {/* Why Work With Me */}
          <WhyWorkWithMe />

          {/* Trust & Proof Signals */}
          <TrustSignals />

          {/* Main Inquiry Form Grid */}
          <section id="discovery-form" className="py-20 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                Start Collaboration
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-2">
                Book a Free Discovery Call / Request Proposal
              </h2>
              <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
                Share your project brief below to schedule a 1-on-1 technical evaluation and estimate.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 bg-slate-900/50 p-6 md:p-10 rounded-3xl border border-slate-800">
                <ContactForm />
              </div>

              <div className="space-y-8">
                <ContactInfo />
                <ContactServices />
                <SocialLinks />
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <ContactFAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}