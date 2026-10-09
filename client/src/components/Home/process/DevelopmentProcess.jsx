import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import ProcessCard from "./ProcessCard";
import { processData } from "./processData";
import ProcessTimeline from "./ProcessTimeline";

export default function DevelopmentProcess() {
  return (
    <Section
      id="process"
      className="relative bg-slate-950 dark overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <SectionHeading
          subtitle="Process"
          title="A Structured Process for Successful Software Delivery"
        />

        <ProcessTimeline />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12 relative z-10">
          {processData.map((step, index) => (
            <ProcessCard key={step.number} {...step} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
