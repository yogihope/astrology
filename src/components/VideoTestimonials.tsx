"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Play, X, Star, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    video: "/VID-20260414-WA0008.mp4",
    quote:
      "Connecting with Puneet Ji was very insightful. The changes he suggested made a huge difference — things are moving in the right direction.",
  },
  {
    video: "/VID-20260414-WA0006.mp4",
    quote:
      "पुनीत sir से consultation के 3 साल बाद — job में growth मिला, recently घर भी book किया। यह सब name correction और remedies के बाद हुआ।",
  },
  {
    video: "/VID-20260414-WA0009.mp4",
    quote:
      "Numerology के हिसाब से हर date of birth का career pattern होता है। सही direction में hard work expand करता है, exhaust नहीं करता।",
  },
  {
    video: "/VID-20260414-WA0010.mp4",
    quote:
      "अगर आप serious हैं और सीखना चाहते हैं, तो मैं definitely recommend करती हूँ sir का यह course।",
  },
  {
    video: "/VID-20260414-WA0012.mp4",
    quote:
      "पुनीत sir से consultation के बाद career में clarity मिली। Remedies से stability आई — अब हर decision confidence से लेती हूँ।",
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ index, onClose }: { index: number; onClose: () => void }) => {
  const t = testimonials[index];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
      onClick={onClose}
    >
      {/* Close — fixed top-right, always visible */}
      <button
        onClick={onClose}
        aria-label="Close video"
        className="fixed top-4 right-4 z-[10001] w-11 h-11 rounded-full flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/25 active:scale-95 transition-all backdrop-blur-sm"
      >
        <X className="w-5 h-5 text-white" strokeWidth={2.5} />
      </button>

      {/* Card */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        className="relative flex flex-col items-center w-full px-5"
        style={{ maxWidth: 380 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 0 1px hsl(38 40% 57% / 0.3), 0 24px 80px rgba(0,0,0,0.6), 0 0 60px hsl(38 40% 57% / 0.15)",
          }}
        >
          <video
            ref={videoRef}
            src={t.video}
            controls
            playsInline
            className="w-full block bg-black"
            style={{ maxHeight: "65vh", objectFit: "contain" }}
          />
        </div>

        {/* Caption */}
        <div className="mt-5 text-center w-full">
          <div className="flex justify-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/75 text-sm font-body italic leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Video Card ───────────────────────────────────────────────────────────────
const VideoCard = ({
  t,
  index,
  onPlay,
}: {
  t: (typeof testimonials)[0];
  index: number;
  onPlay: (i: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-gold/15 bg-charcoal/80 hover:border-gold/40 transition-all duration-300 hover:shadow-[0_4px_28px_hsl(38_40%_57%_/_0.12)] cursor-pointer select-none"
      onClick={() => onPlay(index)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-black" style={{ height: 210 }}>
        <video
          ref={videoRef}
          src={t.video}
          preload="metadata"
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedMetadata={() => {
            if (videoRef.current) videoRef.current.currentTime = 1;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/5 to-transparent" />

        {/* Stars */}
        <div className="absolute top-2.5 right-2.5 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="w-2.5 h-2.5 text-gold fill-gold drop-shadow" />
          ))}
        </div>

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-[0_0_20px_hsl(38_40%_57%_/_0.55)] group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 text-charcoal fill-charcoal ml-0.5" />
            <span className="absolute inset-0 rounded-full border-2 border-gold/70 animate-ping opacity-25" />
          </div>
        </div>

        {/* Hover hint */}
        <div className="absolute bottom-2 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Volume2 className="w-3 h-3 text-ivory/40" />
          <span className="text-ivory/40 text-[10px] font-body">Tap to watch</span>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-4">
        <p className="text-ivory/65 text-[11px] font-body italic leading-relaxed line-clamp-3">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const VideoTestimonials = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [selected, setSelected]   = useState(0);
  const [snapCount, setSnapCount] = useState(5);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="section-dark py-16 md:py-24 relative grain-overlay"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, hsl(38 40% 57% / 0.04), transparent 60%)" }}
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Stories of Sacred Name Discoveries"
            subtitle="Real families. Real stories. Real blessings."
            light
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative">
            {/* Embla viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3">
                {testimonials.map((t, i) => (
                  <div key={i} className="embla-slide">
                    <VideoCard t={t} index={i} onPlay={setLightbox} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Dot indicators — count matches actual scroll positions */}
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Slide group ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selected ? "w-6 bg-gold" : "w-1.5 bg-gold/25 hover:bg-gold/45"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-gold/55 font-body text-[11px] tracking-widest uppercase">
              ✦ 5000+ families guided across India &amp; abroad ✦
            </p>
            <a
              href="https://share.google/KDCwVG0awVMBuj7VL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, hsl(38 40% 57%), hsl(28 73% 51%))",
                color: "white",
                boxShadow: "0 4px 20px -4px hsl(38 40% 57% / 0.5)",
              }}
            >
              ✦ Read More Reviews on Google
            </a>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox index={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoTestimonials;
