import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";
import BackgroundEffects from "../../Home/hero/BackgroundEffects";

export default function Solutions() {
  return (
    /* 
      1. bg-slate-950: Keeps the background dark slate.
      2. dark: Forces the child SectionHeading and SolutionCards to trigger 
         their dark mode colors, rendering the title text in beautiful white!
    */
    <Section
      id="solutions"
      className="relative bg-slate-950 dark overflow-hidden"
    >
      {/* Dynamic Ambient Glows */}
      <BackgroundEffects />

      {/* Soft color highlights behind content */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-blue-600/10 blur-[160px]" />

      <Container>
        <SectionHeading
          subtitle="Business Solutions"
          title="Software Solutions That Help Businesses Scale"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {solutions.map((item) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
