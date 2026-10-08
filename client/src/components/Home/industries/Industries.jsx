import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import BackgroundEffects from "../../Home/hero/BackgroundEffects";

import IndustryCard from "./IndustryCard";
import { industries } from "./industryData";

export default function Industries() {
  return (
    <Section className="bg-slate-950">
        <BackgroundEffects />
      <Container>
        <SectionHeading
          subtitle="Industries"
          title="Software Built for Different Business Domains"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              {...industry}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}