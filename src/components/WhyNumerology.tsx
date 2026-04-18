"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const aligned = [
  "Life flows naturally",
  "Opportunities come easier",
  "Growth becomes consistent",
];

const misaligned = [
  "Delays increase",
  "Struggles repeat",
  "Efforts don't convert into results",
];

const WhyNumerology = () => (
  <section className="section-dark py-20 md:py-28 relative grain-overlay">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at top center, hsl(38 40% 57% / 0.05) 0%, transparent 50%)",
      }}
    />
    <div className="container relative z-10 max-w-4xl">
      <SectionHeading
        title="What's in a Name?"
        subtitle="Everything."
        light
      />

      <ScrollReveal>
        <p className="text-ivory/70 text-lg leading-relaxed text-center mb-10 font-body">
          In <span className="text-gold font-semibold">Chaldean Numerology</span>, every letter carries a vibration.
          When combined, your child&apos;s name becomes a frequency blueprint.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Aligned */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-gold/20 bg-white/5 p-8 h-full">
            <h3 className="font-heading text-lg font-semibold text-gold mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              If aligned with their date of birth:
            </h3>
            <ul className="space-y-4">
              {aligned.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ivory/80 font-body">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Misaligned */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-saffron/20 bg-white/5 p-8 h-full">
            <h3 className="font-heading text-lg font-semibold text-saffron mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              If misaligned:
            </h3>
            <ul className="space-y-4">
              {misaligned.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ivory/80 font-body">
                  <XCircle className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhyNumerology;
