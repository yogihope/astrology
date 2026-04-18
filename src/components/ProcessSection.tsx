"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    title: "Connect & Share Details",
    desc: "Provide birth details — date, time, and parents' names.",
  },
  {
    num: "02",
    title: "Deep Analysis by Puunit Dsai",
    desc: "Complete numerological decoding of your child's birth chart.",
  },
  {
    num: "03",
    title: "Name Selection",
    desc: "12 powerful options presented with detailed explanation of each name's vibration and alignment.",
  },
  {
    num: "04",
    title: "Numeroscope Delivery & Guidance",
    desc: "Handwritten report delivered with complete clarity on life path, timing, and direction.",
  },
  {
    num: "05",
    title: "Name Validation (Your Selected Options)",
    desc: "Already shortlisted or thought of certain names? Those can also be evaluated for compatibility and alignment during the consultation.",
  },
];

const ProcessSection = () => (
  <section className="bg-sand/50 py-20 md:py-28 relative">
    <div className="container max-w-4xl">
      <SectionHeading
        title="How It Works"
        subtitle="A thoughtful journey from birth chart to blessed name."
      />

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 hidden sm:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.12}>
              <div
                className={`flex items-start gap-6 md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-heading text-lg font-bold text-charcoal border-2 border-gold bg-ivory shadow-lg">
                    {step.num}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
