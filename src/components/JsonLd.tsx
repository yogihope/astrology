import Script from "next/script";
import { SITE_URL } from "@/lib/seo";

// All FAQ questions (keep in sync with FAQSection.tsx)
const faqItems = [
  {
    q: "What information do you need from us?",
    a: "We need the baby's date of birth, time of birth, and place of birth. If you (the parents) have name preferences or cultural requirements, please share those too.",
  },
  {
    q: "How long does the process take?",
    a: "Typically 3-5 working days from when we receive birth details. Rush consultations are available for an additional fee.",
  },
  {
    q: "Do you only suggest Hindu names?",
    a: "We work across all Indian cultures — Hindu, Sikh, Muslim, Jain, and more. We respect and incorporate your specific traditions.",
  },
  {
    q: "Can you help if the baby is already born and named?",
    a: "Yes! We offer name correction and adjustment services. Sometimes a small spelling change can significantly improve numerological alignment.",
  },
  {
    q: "Is this just superstition?",
    a: "Numerology is a systematic science rooted in thousands of years of observation. While we respect skepticism, countless parents have experienced positive changes through proper name alignment.",
  },
  {
    q: "How do I book a consultation?",
    a: "Click any 'Get Started' button on the page or message us directly on WhatsApp. We'll guide you through the process step by step.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── WebSite ──────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Numeroworldf®",
      description:
        "Newborn baby name consultation based on Chaldean numerology and birth-data analysis by Puunit Dsai, master numerologist.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── Organization ─────────────────────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Numeroworldf®",
      alternateName: "Numeroworldf",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: ["English", "Hindi"],
        contactOption: "TollFree",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "UAE" },
      ],
      // sameAs: [ "https://www.instagram.com/numeroworldf" ],  // ← add real URLs when ready
    },

    // ── Person — Puunit Dsai ─────────────────────────────────────────────────
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Puunit Dsai",
      givenName: "Puunit",
      familyName: "Dsai",
      jobTitle: "Master Numerologist — Newborn Baby Name Specialist",
      description:
        "Puunit Dsai is a master numerologist with 15+ years of experience and a dedicated specialisation in newborn baby names. Founder of Numeroworldf®, he has guided 5000+ parents across 8 countries in choosing numerologically aligned baby names.",
      url: SITE_URL,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "Chaldean Numerology",
        "Newborn Baby Name Consultation",
        "Numeroscope",
      ],
    },

    // ── Service ──────────────────────────────────────────────────────────────
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Newborn Baby Name Numerology Consultation",
      alternateName: "Baby Name by Date of Birth",
      serviceType: "Numerology Consultation",
      description:
        "A comprehensive newborn baby naming consultation based on Chaldean numerology by master numerologist Puunit Dsai. Includes 12 compatible baby names, handwritten Numeroscope, and no time limit, you can ask as many questions.",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "New Parents, Expecting Parents",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/LimitedAvailability",
        priceCurrency: "INR",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "5000",
        ratingCount: "5000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Baby Name Consultation Package",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "12 Highly Compatible Baby Names",
              description:
                "12 baby names based on Chaldean numerology, birth data analysis, lucky alphabets and sound patterns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Handwritten Numeroscope",
              description:
                "A lifetime handcrafted numerological blueprint covering lucky numbers, career direction, health sensitivity, relationship patterns, and personal year cycles.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "No Time limit, you can ask as many questions",
              description:
                "No time restriction, no question limit. Call and in-person consultation options available.",
            },
          },
        ],
      },
    },

    // ── WebPage (homepage) ────────────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Baby Name by Numerology | Newborn Baby Naming Consultation — Numeroworldf®",
      description:
        "Get a numerologically aligned baby name crafted by master numerologist Puunit Dsai, specialist in newborn baby names. Trusted by 5000+ parents. Book your consultation today.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#service` },
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "ReadAction",
        target: [SITE_URL],
      },
    },

    // ── BreadcrumbList ────────────────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },

    // ── FAQPage ───────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faqpage`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function JsonLd() {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
