"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import GoldParticles from "./GoldParticles";
import NumberParticles from "./NumberParticles";
import HeroLeadForm from "./HeroLeadForm";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
    {/* Background */}
    <div className="absolute inset-0 bg-maroon-deep" />
    <div className="absolute inset-0 opacity-20">
      <img
        src="/images/hero-family.jpg"
        alt="Indian parents with newborn baby — numerology baby naming"
        className="w-full h-full object-cover"
      />
    </div>
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center 40%, hsl(38 40% 57% / 0.08) 0%, transparent 60%)",
      }}
    />
    <GoldParticles />
    <NumberParticles />

    {/* Rotating mandala */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="w-[800px] h-[800px] rounded-full border border-gold opacity-[0.06]"
        style={{
          background:
            "repeating-conic-gradient(hsl(38 40% 57% / 0.1) 0deg 10deg, transparent 10deg 20deg)",
          animation: "spin 60s linear infinite",
        }}
      />
    </div>

    <div className="relative z-10 container px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Content */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            ✦ Trusted by 5000+ Parents ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-tight mb-4"
          >
            Your Child&apos;s Name Is Not Just a Name —{" "}
            <span className="gold-text italic">It Is Their Destiny Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-ivory/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-3 font-body"
          >
            Craft a powerful, numerologically aligned name for your newborn — designed to attract success, harmony, and lifelong stability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gold/70 text-sm max-w-xl mx-auto lg:mx-0 mb-10 font-body"
          >
            👉 Personalised, research-backed, and deeply aligned with your child&apos;s birth chart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/919524567894?text=Hi%2C%20I%20want%20your%20help%20in%20choosing%20best%20name%20for%20my%20child%20with%20help%20of%20numerology."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-shimmer inline-flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Book Consultation on WhatsApp
            </a>
            <a
              href="#get-started"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 text-base"
            >
              Explore Consultation Details
            </a>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <HeroLeadForm />
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
