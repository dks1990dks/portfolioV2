import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import BackgroundEffects from "../hero/BackgroundEffects";

import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "./whyChooseData";
import StatsStrip from "./StatsStrip";

export default function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      className="relative bg-slate-950 overflow-hidden"
    >
      <BackgroundEffects />

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Why Businesses Choose Deepak Codes"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {whyChooseData.map((item) => (
            <WhyChooseCard key={item.title} {...item} />
          ))}
        </div>

        <StatsStrip />
      </Container>
    </Section>
  );
}
