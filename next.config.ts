import type { NextConfig } from "next";

const SITE_URL = "https://numeroworldf.com";

const nextConfig: NextConfig = {
  // ── Images ─────────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/npm/**",
      },
      {
        protocol: "https",
        hostname: "pdr-assets.b-cdn.net",
        pathname: "/**",
      },
    ],
  },

  // ── Compression ────────────────────────────────────────────────────────────
  compress: true,

  // ── Power-user: generate ETags for static assets ───────────────────────────
  generateEtags: true,

  // ── Trailing slash — pick one and stick to it (canonical consistency) ───────
  trailingSlash: false,

  // ── Security & SEO HTTP Headers ────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent content type sniffing
          { key: "X-Content-Type-Options",    value: "nosniff" },
          // Clickjacking protection
          { key: "X-Frame-Options",            value: "SAMEORIGIN" },
          // XSS filter (legacy browsers)
          { key: "X-XSS-Protection",           value: "1; mode=block" },
          // Referrer — passes full URL to same-origin, origin-only to cross-origin
          { key: "Referrer-Policy",             value: "strict-origin-when-cross-origin" },
          // Permissions policy — lock unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // HSTS — only enable once your SSL cert is active on the real domain
          // { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      // Long-lived cache for Next.js static assets (they have content hashes)
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache public images for 30 days
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      // Explicit cache for sitemap & robots
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=3600" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },

  // ── Redirects — enforce canonical domain & no trailing slash ───────────────
  async redirects() {
    return [
      // www → non-www (or flip if you prefer www)
      {
        source: "/(.*)",
        has: [{ type: "host", value: `www.numeroworldf.com` }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
