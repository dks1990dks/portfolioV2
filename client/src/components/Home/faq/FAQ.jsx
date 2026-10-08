import Section from "../../ui/Section/Section";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/Heading/SectionHeading";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";
import BackgroundEffects from "../../Home/hero/BackgroundEffects";

export default function FAQ() {
  return (
    <Section className="relative bg-slate-950 overflow-hidden">
      <div className="absolute -right-40 top-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[180px]" />

      <BackgroundEffects />

      <Container>
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="max-w-4xl mx-auto">
          {faqData.map((item) => (
            <FAQItem
              key={item.question}
              {...item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}