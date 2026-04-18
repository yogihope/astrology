"use client";

import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section
    id="get-started"
    className="relative py-20 md:py-28 overflow-hidden grain-overlay"
  >
    <div className="absolute inset-0 bg-maroon-deep" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at bottom center, hsl(38 40% 57% / 0.1) 0%, transparent 50%)",
      }}
    />

    <div className="container relative z-10 text-center max-w-3xl">
      <ScrollReveal>
        <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-6">
          ✦ The Right Decision at the Right Time ✦
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-ivory leading-tight mb-6">
          Your Child Has Come Into This World{" "}
          <span className="gold-text italic">With a Purpose</span>
        </h2>

        <p className="text-ivory/60 text-lg mb-4">Their name will either:</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2">
            <span className="text-gold text-sm font-body">✦ Support that journey</span>
          </div>
          <span className="text-ivory/30 font-body text-sm">or</span>
          <div className="flex items-center gap-2 bg-saffron/10 border border-saffron/30 rounded-full px-6 py-2">
            <span className="text-saffron text-sm font-body">Create resistance in it</span>
          </div>
        </div>

        <p className="text-ivory/60 text-base mb-2 font-body">
          👉 The choice is yours.
        </p>
        <p className="text-ivory/60 text-base mb-10 font-body">
          Make the right decision at the right time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919524567894?text=Hi%2C%20I%20want%20your%20help%20in%20choosing%20best%20name%20for%20my%20child%20with%20help%20of%20numerology."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Book Your Baby Name Consultation Today
          </a>
        </div>
        <p className="text-ivory/40 text-sm mt-6">
          👉 WhatsApp Now · Limited slots available
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
