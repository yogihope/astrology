"use client";

import { ShieldCheck, Heart, CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: ShieldCheck,
    title: "Rooted in Numerology",
    desc: "Not algorithms — real numerology knowledge refined over decades of practice.",
  },
  {
    icon: Heart,
    title: "5000+ Parents Guided",
    desc: "Trusted by parents across India and the diaspora.",
  },
  {
    icon: CheckCircle2,
    title: "Precision, Not Guesswork",
    desc: "Every recommendation is backed by detailed numerological calculation.",
  },
  {
    icon: Sparkles,
    title: "Respectful & Personal",
    desc: "We honor your cultural preferences and personal traditions.",
  },
];

const stats = [
  { num: 5000, suffix: "+", label: "Parents Guided" },
  { num: 8, suffix: "", label: "Countries Served" },
  { num: 15, suffix: "+", label: "Years of Numerology Study" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => (
  <section className="section-ivory py-20 md:py-28">
    <div className="container">
      <SectionHeading
        title="Why Parents Trust Us"
        subtitle="We treat every name like a sacred responsibility."
      />

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                <p.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Stats bar */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gold/15 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold mb-1">
                <CountUp target={s.num} suffix={s.suffix} />
              </p>
              <p className="text-muted-foreground text-sm font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyChooseUs;
