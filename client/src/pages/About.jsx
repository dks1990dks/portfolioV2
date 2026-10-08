import SEO from "../components/SEO/SEO";
import { getPersonSchema } from "../components/SEO/schemas";

// Core Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

// About Page Section Components
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Founder from "../components/about/Founder";
import TechExpertise from "../components/about/TechExpertise";
import Timeline from "../components/about/Timeline";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <>
      <SEO
        title="About Deepak Codes"
        description="Learn about Deepak Codes, a software development practice focused on custom ERP systems, SaaS platforms, business dashboards, and workflow automation."
        pathname="/about"
        breadcrumbs={breadcrumbItems}
        schemas={[getPersonSchema()]}
      />

      <Navbar />

      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <Founder />
        <TechExpertise />
        <Timeline />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}