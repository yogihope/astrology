"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-charcoal py-14 text-ivory/40 font-body text-sm"
      aria-label="Site footer"
    >
      <div className="container">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Image
              src="/logo.png"
              alt="Numeroworldf® — Puunit Dsai"
              width={240}
              height={80}
              className="h-16 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="text-ivory/50 text-sm">
            Newborn Baby Name Consultation · Chaldean Numerology · Birth-Data Analysis
          </p>
        </div>

        {/* Navigation links — internal anchor links help crawlers */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-xs"
        >
          {[
            { href: "#main-content",   label: "Home" },
            { href: "#services",       label: "Services" },
            { href: "#process",        label: "How It Works" },
            { href: "#about",          label: "About Puunit Dsai" },
            { href: "#testimonials",   label: "Testimonials" },
            { href: "#faq",            label: "FAQ" },
            { href: "#get-started",    label: "Book Consultation" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-ivory/40 hover:text-gold transition-colors"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs text-ivory/30">
          <span>✦ 5000+ Parents Guided</span>
          <span>✦ 15+ Years of Expertise</span>
          <span>✦ 8 Countries Served</span>
          <span>✦ Authentic Handwritten Reports</span>
        </div>

        <div className="gold-divider opacity-20 my-6" />

        {/* Legal */}
        <div className="text-center space-y-2 text-xs text-ivory/30">
          <p>© {year} Numeroworldf® by Puunit Dsai. All rights reserved.</p>
          <p>
            Results vary by individual. Numerology consultations are for guidance purposes only.
          </p>
          <div className="flex justify-center gap-6 mt-3">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
