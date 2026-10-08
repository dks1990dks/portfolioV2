import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import TrustCard from "./TrustCard";
import TrustStats from "./TrustStats";
import { trustData } from "./trustData";
import BackgroundEffects from "../../Home/hero/BackgroundEffects";

export default function TrustSection() {
  return (
    <Section className="relative bg-slate-950 overflow-hidden">
      <BackgroundEffects />

      <div className="absolute -right-40 top-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <SectionHeading
          subtitle="Trust"
          title="Built on Quality, Transparency and Long-Term Support"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {trustData.map((item) => (
            <TrustCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <TrustStats />
      </Container>
    </Section>
  );
}