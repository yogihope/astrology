"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Mumbai",
    text: "We were confused between 20+ names. The numerology analysis made it crystal clear. Our son Aarav's name carries such powerful energy — we feel it every day.",
  },
  {
    name: "Sneha & Vikram",
    location: "Bangalore",
    text: "The depth of analysis was incredible. They didn't just give us names — they explained the vibration, the destiny number, everything. Truly premium service.",
  },
  {
    name: "Meera & Arjun",
    location: "Delhi",
    text: "As NRI parents, we wanted a name that honored our roots but worked globally. They found the perfect balance. We named our daughter Anaya — meaning 'God's grace.'",
  },
  {
    name: "Kavita & Sanjay",
    location: "Pune",
    text: "The WhatsApp support was so helpful. They patiently answered all our questions and even adjusted recommendations based on our personal traditions.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-sand/30 py-20 md:py-28">
      <div className="container max-w-4xl">
        <SectionHeading
          title="Words from Blessed Parents"
          subtitle="Join hundreds of parents who trusted us with their child's first gift."
        />

        <ScrollReveal>
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card-glow text-center max-w-2xl mx-auto"
              >
                <p className="text-gold text-4xl mb-4 font-heading">&ldquo;</p>
                <p className="text-charcoal/80 text-lg leading-relaxed italic mb-6">
                  {testimonials[current].text}
                </p>
                <p className="font-heading font-semibold text-charcoal">
                  {testimonials[current].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[current].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-8" : "bg-gold/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
