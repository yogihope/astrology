"use client";

import { Star, Hash } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Star,
    title: "Janma Nakshatra",
    body: "27 nakshatras, each carrying unique energy. We find the perfect name syllable (akshar) aligned to your child's birth nakshatra.",
  },
  {
    icon: Hash,
    title: "Life Path Number",
    body: "Each letter = a number. The sum of your name's numbers must align with birth date vibration for destiny activation.",
  },
];

const CosmicBlueprint = () => (
  <section className="section-dark py-20 md:py-28 relative grain-overlay">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(38 40% 57% / 0.04), transparent 60%)",
      }}
    />
    <div className="container relative z-10">
      <SectionHeading
        title="Your Child's Cosmic Blueprint"
        subtitle="Every soul arrives with a unique cosmic signature."
        light
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cards.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 0.12}>
            <div className="group rounded-2xl border border-gold/15 bg-charcoal/60 backdrop-blur-sm p-8 text-center h-full transition-all duration-500 hover:border-gold/40">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/60 transition-colors">
                <c.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ivory mb-3">
                {c.title}
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed font-body">
                {c.body}
              </p>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 30px hsl(38 40% 57% / 0.08)",
                }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CosmicBlueprint;
