import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import BackgroundEffects from "../hero/BackgroundEffects";

import { projects } from "../../projects/projectsData";
import CaseStudyCard from "./CaseStudyCard";

export default function FeaturedCaseStudies() {
    const featuredProjects = projects
        .filter((project) => project.featured)
        .slice(0, 4);

    if (featuredProjects.length === 0) {
        return null;
    }

    return (
        <Section className="bg-slate-950 dark overflow-hidden">
            <BackgroundEffects />

            <Container>
                <SectionHeading
                    subtitle="Case Studies"
                    title="Business Software That Delivers Results"
                />

                <div className="space-y-12">
                    {featuredProjects.map((project) => (
                        <CaseStudyCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}