import { useMemo, useState } from "react";
import SEO, { getProjectsSchemaGraph } from "../components/SEO";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectSearch from "../components/projects/ProjectSearch";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectGrid from "../components/projects/ProjectGrid";
import TechnologyUsed from "../components/projects/TechnologyUsed";
import ProjectsCTA from "../components/projects/ProjectsCTA";

import { projects } from "../components/projects/projectsData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ];

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesStatus =
        activeStatus === "all" ||
        (activeStatus === "completed" && project.status === "completed") ||
        (activeStatus === "in-development" &&
          (project.status === "in-development" ||
            project.status === "live-in-development"));

      const matchesSearch =
        normalizedSearch === "" ||
        project.title?.toLowerCase().includes(normalizedSearch) ||
        project.subtitle?.toLowerCase().includes(normalizedSearch) ||
        project.description?.toLowerCase().includes(normalizedSearch) ||
        project.industry?.toLowerCase().includes(normalizedSearch) ||
        project.category?.toLowerCase().includes(normalizedSearch) ||
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(normalizedSearch),
        );

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [activeCategory, activeStatus, searchQuery]);

  const showFeatured =
    activeCategory === "All" &&
    activeStatus === "all" &&
    searchQuery.trim() === "";

  return (
    <>
      <SEO
        title="Projects & Case Studies"
        description="Explore completed and in-development ERP, SaaS, e-commerce, inventory, dashboard, education, accounting, and business software projects built by Deepak Codes."
        pathname="/projects"
        ogType="website"
        keywords={[
          "Software Development Projects",
          "React Node.js Projects",
          "ERP Projects",
          "SaaS Projects",
          "Business Software Projects",
          "Inventory Management Software",
          "School ERP",
          "GST Software",
          "E-Commerce Development",
          "Business Dashboard",
        ]}
        breadcrumbs={breadcrumbItems}
        schemas={[getProjectsSchemaGraph()]}
      />

      <div className="bg-slate-950 min-h-screen text-white antialiased">
        <Navbar />

        <main>
          <ProjectsHero />

          <ProjectStats />

          {showFeatured && <FeaturedProjects />}

          <section
            id="projects"
            className="py-16 bg-slate-950 border-b border-slate-900"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col gap-8 mb-12 pb-8 border-b border-slate-900">
                <ProjectFilter
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  activeStatus={activeStatus}
                  setActiveStatus={setActiveStatus}
                />

                <div className="flex justify-end">
                  <ProjectSearch
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                </div>
              </div>

              <ProjectGrid filteredProjects={filteredProjects} />
            </div>
          </section>

          <TechnologyUsed />

          <ProjectsCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
