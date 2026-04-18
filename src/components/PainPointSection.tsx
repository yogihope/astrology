"use client";

import { AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const consequences = [
  "Career delays despite talent",
  "Relationship challenges and emotional gaps",
  "Recurring health disturbances",
  "Financial instability",
  "Low confidence and hesitation",
  "Repeated setbacks in life",
];

const PainPointSection = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container max-w-3xl">
      <SectionHeading title="If the Name is Not Aligned…" />

      <ScrollReveal>
        <p className="text-center text-muted-foreground font-body mb-8">
          This is not belief — this is <span className="font-semibold text-charcoal">pattern-based observation</span> from thousands of cases.
        </p>

        <div className="space-y-4 mb-8">
          {consequences.map((p) => (
            <div key={p} className="flex gap-4 items-start">
              <AlertCircle className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed font-body">{p}</p>
            </div>
          ))}
        </div>

        <p className="font-heading text-lg font-semibold text-maroon mb-8 text-center">
          👉 The root is often vibrational misalignment.
        </p>

        <div className="text-center">
          <a href="#get-started" className="btn-gold inline-block whitespace-nowrap">
            Get Sacred Guidance
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PainPointSection;
