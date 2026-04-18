import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

// ── Page-level metadata (overrides layout defaults if needed) ─────────────────
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

// Component imports
import AnnouncementBar   from "@/components/AnnouncementBar";
import HeroSection       from "@/components/HeroSection";
import TrustBar          from "@/components/TrustBar";
import PainPointSection  from "@/components/PainPointSection";
import EmotionalConnect  from "@/components/EmotionalConnect";
import WhyNumerology     from "@/components/WhyNumerology";
import CosmicBlueprint   from "@/components/CosmicBlueprint";
import WhatYouGet        from "@/components/WhatYouGet";
import RashiStrip        from "@/components/RashiStrip";
import ProcessSection    from "@/components/ProcessSection";
import WhyChooseUs       from "@/components/WhyChooseUs";
import CTAStrip          from "@/components/CTAStrip";
import VideoTestimonials from "@/components/VideoTestimonials";
import AboutExpert       from "@/components/AboutExpert";
import FAQSection        from "@/components/FAQSection";
import FinalCTA          from "@/components/FinalCTA";
import Footer            from "@/components/Footer";
import StickyMobileCTA   from "@/components/StickyMobileCTA";
import FloatingWhatsApp  from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Announcement bar sits outside <main> intentionally */}
      <AnnouncementBar />

      <main id="main-content" className="overflow-x-hidden">
        {/* HERO — H1 lives here */}
        <HeroSection />

        {/* Trust signals — E-E-A-T */}
        <TrustBar />

        {/* Problem awareness */}
        <section id="why-name-matters" aria-label="Why the right name matters">
          <PainPointSection />
          <EmotionalConnect />
          <WhyNumerology />
        </section>

        {/* Cosmic system explanation */}
        <section id="numerology-system" aria-label="Numerology system">
          <CosmicBlueprint />
          <RashiStrip />
        </section>

        {/* Services + deliverables */}
        <section id="services" aria-label="Consultation services and deliverables">
          <WhatYouGet />
        </section>

        {/* Process */}
        <section id="process" aria-label="How the consultation works">
          <ProcessSection />
        </section>

        {/* Social proof + trust */}
        <section id="trust" aria-label="Why parents trust us">
          <WhyChooseUs />
        </section>

        {/* Mid-page CTA */}
        <CTAStrip />

        {/* Video testimonials */}
        <section id="testimonials" aria-label="Client video testimonials">
          <VideoTestimonials />
        </section>

        {/* About the expert */}
        <section id="about" aria-label="About Puunit Dsai — master numerologist">
          <AboutExpert />
        </section>

        {/* FAQ — also powers FAQPage JSON-LD */}
        <section id="faq" aria-label="Frequently asked questions">
          <FAQSection />
        </section>

        {/* Final conversion CTA */}
        <FinalCTA />

        <Footer />
      </main>

      {/* Sticky / floating UI — outside main flow */}
      <StickyMobileCTA />
      <FloatingWhatsApp />
    </>
  );
}
