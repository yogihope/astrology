"use client";

import SectionHeading from "./SectionHeading";

const rashis = [
  {
    symbol: "♈", name: "Mesh",      en: "Aries",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aries.jpg/240px-Aries.jpg",
  },
  {
    symbol: "♉", name: "Vrishabh",  en: "Taurus",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Taurus_poster.jpg/240px-Taurus_poster.jpg",
  },
  {
    symbol: "♊", name: "Mithun",    en: "Gemini",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Gemini_poster.jpg/240px-Gemini_poster.jpg",
  },
  {
    symbol: "♋", name: "Kark",      en: "Cancer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sidney_Hall_-_Urania%27s_Mirror_-_Cancer.png/240px-Sidney_Hall_-_Urania%27s_Mirror_-_Cancer.png",
  },
  {
    symbol: "♌", name: "Simha",     en: "Leo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Leo_poster.jpg/240px-Leo_poster.jpg",
  },
  {
    symbol: "♍", name: "Kanya",     en: "Virgo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Virgo_poster.jpg/240px-Virgo_poster.jpg",
  },
  {
    symbol: "♎", name: "Tula",      en: "Libra",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Libra_poster.jpg/240px-Libra_poster.jpg",
  },
  {
    symbol: "♏", name: "Vrishchik", en: "Scorpio",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Scorpius_poster.jpg/240px-Scorpius_poster.jpg",
  },
  {
    symbol: "♐", name: "Dhanu",     en: "Sagittarius",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sagittarius_poster.jpg/240px-Sagittarius_poster.jpg",
  },
  {
    symbol: "♑", name: "Makar",     en: "Capricorn",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Capricornus_poster.jpg/240px-Capricornus_poster.jpg",
  },
  {
    symbol: "♒", name: "Kumbh",     en: "Aquarius",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sidney_Hall_-_Urania%27s_Mirror_-_Aquarius%2C_Piscis_Australis_%26_Ballon_Aerostatique.png/240px-Sidney_Hall_-_Urania%27s_Mirror_-_Aquarius%2C_Piscis_Australis_%26_Ballon_Aerostatique.png",
  },
  {
    symbol: "♓", name: "Meen",      en: "Pisces",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pisces_poster.jpg/240px-Pisces_poster.jpg",
  },
];

// Duplicate for seamless infinite marquee loop
const track = [...rashis, ...rashis];

const RashiCard = ({ rashi }: { rashi: (typeof rashis)[0] }) => (
  <div className="flex-shrink-0 mx-2 group cursor-default">
    <div className="w-32 flex flex-col items-center gap-3 py-4 px-3 rounded-2xl border border-gold/15 bg-white/[0.04] hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2">

      {/* Image circle */}
      <div
        className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-gold/25 group-hover:border-gold/60 transition-all duration-300 bg-black/60 flex-shrink-0"
        style={{ boxShadow: "0 0 0 4px hsl(38 40% 57% / 0.06)" }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: "radial-gradient(circle, hsl(38 40% 57% / 0.2) 0%, transparent 70%)" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rashi.img}
          alt={rashi.en}
          width={72}
          height={72}
          className="w-full h-full object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback: show the astrological symbol as large text
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span style="font-size:2rem;color:hsl(38,40%,57%);display:flex;align-items:center;justify-content:center;width:100%;height:100%">${rashi.symbol}</span>`;
            }
          }}
        />
      </div>

      {/* Text info */}
      <div className="text-center leading-snug">
        <p className="text-gold font-heading text-sm font-semibold tracking-wide">
          {rashi.name}
        </p>
        <p className="text-ivory/40 font-body text-[10px] tracking-widest uppercase mt-0.5">
          {rashi.en}
        </p>
      </div>

      {/* Astrological symbol */}
      <span className="text-ivory/20 group-hover:text-gold/50 font-heading text-base leading-none transition-colors duration-300">
        {rashi.symbol}
      </span>
    </div>
  </div>
);

const RashiStrip = () => (
  <section className="section-dark py-16 overflow-hidden relative">
    {/* Subtle background radial glow */}
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, hsl(38 40% 57%), transparent 70%)",
      }}
    />

    <div className="container relative z-10">
      <SectionHeading
        title="Barah Rashiyan"
        subtitle="Every name carries the cosmic energy of your child's Janma Rashi"
        light
      />
    </div>

    {/* Marquee */}
    <div className="relative mt-2">
      {/* Left gradient fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: "linear-gradient(to right, hsl(0 0% 11%), transparent)" }}
      />
      {/* Right gradient fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: "linear-gradient(to left, hsl(0 0% 11%), transparent)" }}
      />

      <div
        className="flex animate-marquee hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {track.map((r, i) => (
          <RashiCard key={i} rashi={r} />
        ))}
      </div>
    </div>

    <div className="container mt-12 relative z-10">
      <div className="gold-divider opacity-30" />
    </div>
  </section>
);

export default RashiStrip;
