import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import TechCard from "./TechCard";
import { techData } from "./techData";
import BackgroundEffects from "../hero/BackgroundEffects";

export default function Technologies() {
  return (
    <Section id="technologies" className="bg-slate-950 dark">
      <BackgroundEffects />

      <Container>
        <SectionHeading
          subtitle="Technology"
          title="Modern Technologies We Use"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-12">
          {techData.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
