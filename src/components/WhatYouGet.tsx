"use client";

import { FileText, BookOpen, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: FileText,
    num: "01",
    title: "12 Highly Compatible Baby Names",
    points: [
      "Based on exact birth data analysis",
      "Chaldean numerology applied",
      "Lucky alphabets and sound patterns identified",
    ],
    note: null,
    highlight: false,
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Handwritten Numeroscope",
    badge: "Signature Offering",
    points: [
      "Lucky numbers, colours, and dates",
      "Career direction and timing",
      "Health sensitivity areas",
      "Relationship patterns",
      "Important life years (peak & challenges)",
      "Personal year cycles",
    ],
    note: "This becomes a lifelong decision-making guide.",
    highlight: true,
  },
  {
    icon: Phone,
    num: "03",
    title: "Unlimited Consultation Access",
    points: [
      "No time restriction",
      "No question limit",
      "Call / In-person options available",
    ],
    note: null,
    highlight: false,
  },
];

const WhatYouGet = () => (
  <section className="section-ivory relative overflow-x-hidden" style={{ paddingTop: "7rem", paddingBottom: "9rem" }}>
    {/* Subtle background texture */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, hsl(38 40% 57% / 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(28 73% 51% / 0.04) 0%, transparent 40%)",
      }}
    />

    <div className="container relative z-10">
      <SectionHeading
        title="What You Receive"
        subtitle="A comprehensive, sacred naming package crafted with care and precision."
      />

      {/* ── Comparison table ── */}
      <ScrollReveal delay={0.05}>
        <div className="max-w-2xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_-8px_hsl(0_0%_0%/0.12)] border border-gold/20">
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="px-6 py-3 bg-[#f5f0eb] border-r border-gold/15">
                <p className="text-charcoal/40 font-body text-[10px] tracking-[0.18em] uppercase font-medium">
                  Others give you
                </p>
              </div>
              <div
                className="px-6 py-3"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(38 40% 57% / 0.15), hsl(28 73% 51% / 0.1))",
                }}
              >
                <p className="text-saffron font-body text-[10px] tracking-[0.18em] uppercase font-semibold">
                  ✦ We give you
                </p>
              </div>
            </div>

            {/* Rows */}
            {[
              { bad: "Only 4 names", good: "12 highly compatible names", boldGood: true },
              { bad: "Generic info (Google-able)", good: "Handwritten Numeroscope" },
              { bad: "No personalised report", good: "Lifelong personalised blueprint" },
              { bad: "One-time interaction", good: "Unlimited consultation access" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-gold/10"
              >
                <div className="px-6 py-3.5 bg-[#faf7f4] border-r border-gold/10 flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-400 text-[9px] font-bold">✗</span>
                  <span className="text-charcoal/40 text-sm font-body line-through decoration-charcoal/20">
                    {row.bad}
                  </span>
                </div>
                <div
                  className="px-6 py-3.5 flex items-center gap-3"
                  style={{
                    background: "hsl(38 40% 57% / 0.04)",
                  }}
                >
                  <span className="text-gold flex-shrink-0 text-xs">✦</span>
                  <span
                    className={`text-sm font-body ${
                      row.boldGood
                        ? "font-bold text-saffron"
                        : "text-charcoal/80"
                    }`}
                  >
                    {row.good}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Cards ── */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.12}>
            {item.highlight ? (
              /* Numeroscope — hero card */
              <div className="relative">
                {/* Outer glow */}
                <div
                  className="absolute -inset-2 rounded-3xl blur-xl opacity-25 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(38 40% 57%), hsl(28 73% 51%))",
                  }}
                />
                <div
                  className="relative rounded-2xl p-px"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(38 40% 57%), hsl(28 73% 51%), hsl(38 55% 65%))",
                  }}
                >
                  <div
                    className="rounded-2xl p-8 h-full flex flex-col gap-5"
                    style={{ background: "hsl(25 30% 10%)" }}
                  >
                    {/* Row: icon + number + badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "hsl(38 40% 57% / 0.18)",
                            border: "1.5px solid hsl(38 40% 57% / 0.5)",
                          }}
                        >
                          <item.icon className="w-5 h-5" style={{ color: "hsl(38 55% 70%)" }} />
                        </div>
                        <span className="font-body text-xs tracking-widest font-medium" style={{ color: "hsl(38 40% 57% / 0.5)" }}>
                          {item.num}
                        </span>
                      </div>
                      <span
                        className="text-[10px] font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap"
                        style={{
                          background: "hsl(38 40% 57% / 0.18)",
                          border: "1px solid hsl(38 40% 57% / 0.4)",
                          color: "hsl(38 55% 72%)",
                        }}
                      >
                        ✦ Signature
                      </span>
                    </div>

                    {/* Title + badge */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold leading-snug mb-2" style={{ color: "hsl(38 60% 92%)" }}>
                        {item.title}
                      </h3>
                      <p
                        className="font-body text-[11px] tracking-[0.14em] uppercase font-bold"
                        style={{ color: "hsl(38 50% 60%)" }}
                      >
                        {item.badge}
                      </p>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2.5 flex-1">
                      {item.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm font-body"
                          style={{ color: "hsl(38 20% 72%)" }}
                        >
                          <span className="mt-0.5 flex-shrink-0 text-xs leading-5" style={{ color: "hsl(38 50% 58%)" }}>✦</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Note */}
                    <div
                      className="rounded-xl px-4 py-3"
                      style={{
                        background: "hsl(38 40% 57% / 0.1)",
                        border: "1px solid hsl(38 40% 57% / 0.3)",
                      }}
                    >
                      <p
                        className="font-body text-sm font-semibold text-center leading-snug"
                        style={{ color: "hsl(38 60% 80%)" }}
                      >
                        👉 {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular card */
              <div className="card-glow h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-gold/5">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-gold/50 font-body text-xs tracking-widest">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4 leading-snug">
                  {item.title}
                </h3>

                <ul className="space-y-2.5 flex-1">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-charcoal/60 text-sm font-body"
                    >
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">✦</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>

      {/* ── Lifetime callout ── */}
      <ScrollReveal delay={0.35}>
        <div
          className="mt-24 max-w-3xl mx-auto rounded-2xl text-center"
          style={{
            padding: "3.5rem 4rem",
            background: "linear-gradient(135deg, hsl(38 40% 57% / 0.07), hsl(28 73% 51% / 0.05))",
            border: "1px solid hsl(38 40% 57% / 0.25)",
            boxShadow: "0 4px 30px -4px hsl(38 40% 57% / 0.2)",
          }}
        >
          <p className="text-saffron font-body text-xs tracking-[0.2em] uppercase font-semibold mb-5">
            📜 A Document Your Child Will Use for Life
          </p>
          <p className="text-charcoal/75 font-body leading-relaxed mb-4">
            This is not a digital file. This is a{" "}
            <span className="text-charcoal font-semibold">
              handcrafted numerological blueprint
            </span>{" "}
            — designed to guide your child at every major life decision.
          </p>
          <p className="text-charcoal/40 font-body text-sm mb-6 tracking-wide">
            Career · Marriage · Business · Timing · Direction
          </p>
          <p className="text-saffron font-heading font-semibold text-lg">
            👉 Everything becomes clearer.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WhatYouGet;
