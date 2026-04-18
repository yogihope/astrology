import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESC, SITE_TITLE } from "@/lib/seo";

// ── Fonts ─────────────────────────────────────────────────────────────────────
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en-US": SITE_URL,
    },
  },

  keywords: [
    "baby name numerology",
    "newborn baby name consultation",
    "baby name by date of birth",
    "chaldean numerology baby name",
    "numerological baby name India",
    "newborn naming specialist",
    "Puunit Dsai numerologist",
    "Numeroworldf",
    "baby naming consultation",
    "handwritten numeroscope",
    "sacred baby name India",
  ],

  authors: [{ name: "Puunit Dsai", url: SITE_URL }],
  creator: "Puunit Dsai",
  publisher: SITE_NAME,

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Numeroworldf® — Newborn Baby Name Consultation by Puunit Dsai",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    creator: "@numeroworldf",
    site: "@numeroworldf",
    images: [`${SITE_URL}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },

  category: "Numerology",
};

// ── Viewport ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f4ef" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f2b1c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold focus:text-charcoal focus:px-4 focus:py-2 focus:rounded focus:font-body focus:font-semibold"
        >
          Skip to main content
        </a>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
