"use client";

import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <ScrollReveal className="text-center mb-16">
    <h2
      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
        light ? "text-ivory" : "text-charcoal"
      }`}
    >
      {title}
    </h2>
    <div className="gold-divider mb-6" />
    {subtitle && (
      <p
        className={`max-w-2xl mx-auto text-lg ${
          light ? "text-ivory/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
