import type { Metadata } from "next";
import Link from "next/link";
// No SITE_URL import needed here

export const metadata: Metadata = {
  title: "Page Not Found — Numeroworldf®",
  description: "The page you are looking for does not exist. Return to the Numeroworldf® homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-maroon-deep text-ivory px-6"
      aria-label="404 — Page not found"
    >
      <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">404</p>
      <h1 className="font-heading text-4xl md:text-6xl font-semibold text-ivory mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-ivory/60 font-body text-lg mb-10 text-center max-w-md">
        This page has moved or doesn&apos;t exist. Let us guide you back to the right path.
      </p>
      <Link
        href="/"
        className="btn-gold inline-flex items-center gap-2"
        aria-label="Return to Numeroworldf® homepage"
      >
        ← Return to Homepage
      </Link>
    </main>
  );
}
