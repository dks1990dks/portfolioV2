import React from "react";
import { useParams, Link } from "react-router-dom";

import { projects } from "../components/projects/projectsData";

import SEO from "../components/SEO";
import {
  getProjectSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "../components/SEO";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

// Project Detail Components
import ProjectHero from "../components/projectDetails/ProjectHero";
import ProjectOverview from "../components/projectDetails/ProjectOverview";
import ProjectFeatures from "../components/projectDetails/ProjectFeatures";
import TechStack from "../components/projectDetails/TechStack";

import ProjectArchitecture from "../components/projectDetails/ProjectArchitecture";
import ChallengesSolutions from "../components/projectDetails/ChallengesSolutions";
import RelatedProjects from "../components/projectDetails/RelatedProjects";
import ProjectCTA from "../components/projectDetails/ProjectCTA";
import ImageGallery from "../components/gallery/ImageGallery";

// Case Study Components
import QuickFacts from "../components/caseStudy/QuickFacts";
import ExecutiveSummary from "../components/caseStudy/ExecutiveSummary";
import BusinessProblem from "../components/caseStudy/BusinessProblem";
import Objectives from "../components/caseStudy/Objectives";
import SolutionOverview from "../components/caseStudy/SolutionOverview";
import ArchitectureDiagram from "../components/caseStudy/ArchitectureDiagram";
import DatabaseDesign from "../components/caseStudy/DatabaseDesign";
import ModuleOverview from "../components/caseStudy/ModuleOverview";
import SecuritySection from "../components/caseStudy/SecuritySection";
import PerformanceSection from "../components/caseStudy/PerformanceSection";
import DevelopmentTimeline from "../components/caseStudy/DevelopmentTimeline";
import ResultsSection from "../components/caseStudy/ResultsSection";
import FutureRoadmap from "../components/caseStudy/FutureRoadmap";
import BusinessValue from "../components/caseStudy/BusinessValue";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    {
      name: project?.title || slug?.replace(/-/g, " "),
      url: `/projects/${slug}`,
    },
  ];

  // SEO metadata
  const seoData = {
    title: project
      ? `${project.title} — Case Study | Deepak Codes`
      : "Project Details | Deepak Codes",

    description:
      project?.description ||
      `Technical case study and project overview for ${slug}.`,

    keywords: [
      "Custom Software Development",
      "Full Stack Developer",
      "Software Case Study",
      "React Projects",
      "Node.js Projects",
      "Business Software",
      ...(project?.technologies || []),
    ],

    schemas: [
      getOrganizationSchema(),

      project
        ? getProjectSchema({
            name: project.title,
            description: project.description,
            image: project.image,
            url: `/projects/${slug}`,
          })
        : null,

      getBreadcrumbSchema(breadcrumbItems),
    ].filter(Boolean),
  };

  // Project not found
  if (!project) {
    return (
      <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-white mb-4">
          Project Not Found
        </h1>

        <p className="text-slate-400 font-light mb-8 max-w-sm">
          The requested project could not be found in the current portfolio.
        </p>

        <Link
          to="/projects"
          className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold transition hover:bg-cyan-400"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        pathname={`/projects/${slug}`}
        ogType="article"
        keywords={seoData.keywords}
        breadcrumbs={breadcrumbItems}
        schemas={seoData.schemas}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main>
          {/* 1. Header & Hero */}
          <ProjectHero project={project} />

          {/* 2. Main Gallery */}
          {project.gallery?.length > 0 && (
            <ImageGallery images={project.gallery} />
          )}

          {/* 3. Business Value */}
          <BusinessValue project={project} />

          {/* 4. Quick Facts */}
          <QuickFacts project={project} />

          {/* 5. Executive Summary & Overview */}
          <ExecutiveSummary project={project} />
          <ProjectOverview project={project} />

          {/* 6. Business Problem & Objectives */}
          <BusinessProblem project={project} />
          <Objectives project={project} />

          {/* 7. Features & Modules */}
          <ProjectFeatures project={project} />
          <ModuleOverview project={project} />

          {/* 8. Solution & Technology */}
          <SolutionOverview project={project} />
          <TechStack project={project} />

          {/* 9. Architecture */}
          <ProjectArchitecture project={project} />
          <ArchitectureDiagram project={project} />
          <DatabaseDesign project={project} />

          {/* 10. Engineering */}
          <ChallengesSolutions project={project} />
          <SecuritySection project={project} />
          <PerformanceSection project={project} />
          <DevelopmentTimeline project={project} />
          <ResultsSection project={project} />

          
          
          {/* 12. Future Roadmap */}
          <FutureRoadmap project={project} />

          {/* 13. Related Projects & CTA */}
          <RelatedProjects current={project} />
          <ProjectCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}