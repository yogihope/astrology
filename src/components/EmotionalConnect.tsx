"use client";

import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const wants = [
  "A successful career",
  "Strong health",
  "Loving relationships",
  "Financial stability",
];

const EmotionalConnect = () => (
  <section className="section-ivory py-20 md:py-28 overflow-hidden">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ScrollReveal>
          <div className="relative">
            <img
              src="/images/family-connect.jpg"
              alt="Indian parents with newborn"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              loading="lazy"
              width={800}
              height={960}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-gold/30 animate-glow-pulse" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Emotional headline */}
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            ❤️ A Parent&apos;s Promise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-4">
            The Moment You Held Your Child for the First Time…{" "}
            <span className="italic text-maroon">You Took Responsibility for Their Entire Future</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4 font-body">
            Those sleepless nights… That first heartbeat… That silent promise you made —
            <em className="text-charcoal font-medium"> &ldquo;I will give you the best life possible.&rdquo;</em>
          </p>

          <p className="text-charcoal/80 font-body mb-3">You want:</p>
          <ul className="space-y-2 mb-6">
            {wants.map((w) => (
              <li key={w} className="flex items-center gap-3 text-muted-foreground font-body">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                {w}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground leading-relaxed font-body mb-6">
            But what most parents don&apos;t realise is this:
          </p>

          <p className="font-heading text-xl font-semibold text-maroon mb-8">
            👉 Everything begins with the right name.
          </p>

          {/* Authority quote */}
          <blockquote className="border-l-4 border-gold/50 pl-6 py-2 bg-gold/5 rounded-r-xl">
            <p className="text-charcoal/80 italic font-body leading-relaxed mb-3">
              &ldquo;A name is not just an identity — it is a frequency that influences every area of life.
              When aligned correctly, it opens doors. When misaligned, it creates resistance.&rdquo;
            </p>
            <cite className="text-gold font-body text-sm font-semibold not-italic">
              — Puunit Dsai, Numeroworldf®
            </cite>
          </blockquote>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default EmotionalConnect;
