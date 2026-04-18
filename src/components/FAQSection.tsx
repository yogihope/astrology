"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What information do you need from us?",
    a: "We need the baby's date of birth, time of birth, and place of birth. If you (the parents) have name preferences or cultural requirements, please share those too.",
  },
  {
    q: "How long does the process take?",
    a: "Typically 3-5 working days from when we receive birth details. Every consultation receives the same level of care and attention.",
  },
  {
    q: "Do you only suggest Hindu names?",
    a: "We work across all Indian cultures — Hindu, Sikh, Muslim, Jain, and more. We respect and incorporate your specific traditions.",
  },
  {
    q: "Can you help if the baby is already born and named?",
    a: "Yes! We offer name correction and adjustment services. Sometimes a small spelling change can significantly improve numerological alignment.",
  },
  {
    q: "Is this just superstition?",
    a: "Numerology is a systematic science rooted in thousands of years of observation. While we respect skepticism, countless parents have experienced positive changes through proper name alignment.",
  },
  {
    q: "How do I book a consultation?",
    a: "Click any 'Get Started' button on this page or message us directly on WhatsApp. We'll guide you through the process step by step.",
  },
];

const FAQSection = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container max-w-3xl">
      <SectionHeading
        title="Common Questions"
        subtitle="Everything you need to know before starting."
      />

      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-gold/15 rounded-xl px-6 bg-ivory/50 data-[state=open]:border-gold/30 transition-colors"
            >
              <AccordionTrigger className="font-heading text-base font-medium text-charcoal hover:text-maroon hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
