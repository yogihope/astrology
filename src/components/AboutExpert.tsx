"use client";

import Image from "next/image";
import { Award, Globe, Baby } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const credentials = [
  { icon: Award, label: "15+ Years of Practice" },
  { icon: Globe, label: "Clients in 8 Countries" },
  { icon: Baby, label: "Specialisation in Newborn Baby Names" },
];

const AboutExpert = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container">
      <SectionHeading title="The Wisdom Behind Every Name" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="w-[300px] h-[380px] md:w-[400px] md:h-[500px] rounded-2xl border-2 border-gold/40 overflow-hidden relative bg-sand/50">
              <Image
                src="/profile-pic.jpg"
                alt="Puunit Dsai — Master Numerologist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2">
              <span className="text-gold text-sm font-body font-medium">
                ✦ Master Numerologist
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gold font-body text-xs tracking-[0.25em] uppercase mb-3">
            Master Numerologist &mdash; Newborn Baby Name Specialist
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-1">
            Puunit Dsai
          </h3>
          <p className="text-muted-foreground font-body text-sm mb-5">Numeroworldf®</p>
          <p className="text-muted-foreground leading-relaxed font-body mb-8">
            With over 15 years of deep study in Chaldean Numerology and a
            specialisation in newborn baby names, Puunit Dsai has guided 5000+ parents
            across India, USA, UK, Canada, and UAE in choosing names that align with
            their child&apos;s numerological blueprint. Every name recommended carries
            mathematical precision and meaningful resonance.
          </p>

          <div className="flex flex-wrap gap-6">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-2.5">
                <c.icon className="w-5 h-5 text-gold" />
                <span className="text-charcoal font-body text-sm font-medium">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutExpert;
