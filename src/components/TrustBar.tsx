"use client";

import { Users, Star, ScrollText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Users,      label: "Trusted by 5000+ Parents" },
  { icon: Star,       label: "15+ Years of Expertise" },
  { icon: ScrollText, label: "Authentic Handwritten Reports" },
];

const TrustBar = () => (
  <section className="section-ivory py-10 border-b border-gold/10">
    <div className="container">
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-charcoal/80">
              <item.icon className="w-6 h-6 text-gold" />
              <span className="font-body text-sm font-semibold tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustBar;
