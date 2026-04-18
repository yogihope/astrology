"use client";

import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTAStrip = () => (
  <section className="bg-maroon-deep py-16 md:py-20 relative overflow-hidden grain-overlay">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(38 40% 57% / 0.06) 0%, transparent 60%)",
      }}
    />
    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <p className="text-gold-light font-body text-xs tracking-[0.3em] uppercase mb-3">
          ✦ Chosen by Parents Who Want the Best ✦
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory mb-3">
          Not Just a Name —{" "}
          <span className="gold-text italic">But a Future</span>
        </h2>
        <p className="text-ivory/60 mb-8 max-w-xl mx-auto font-body">
          Limited consultations available each month. Secure your child&apos;s cosmic name now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#get-started" className="btn-gold">
            Book Baby Name Consultation Today
          </a>
          <a
            href="https://wa.me/919524567894?text=Hi%2C%20I%20want%20your%20help%20in%20choosing%20best%20name%20for%20my%20child%20with%20help%20of%20numerology."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTAStrip;
