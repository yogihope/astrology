import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information during your baby name consultation.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed font-body space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <main className="section-ivory min-h-screen py-20">
      <div className="container max-w-3xl">
        {/* Back link */}
        <Link href="/" className="text-gold hover:text-gold-light font-body text-sm flex items-center gap-1 mb-10 transition-colors">
          ← Back to Home
        </Link>

        <p className="text-gold font-body text-xs tracking-widest uppercase mb-2">Legal</p>
        <h1 className="font-heading text-4xl font-semibold text-charcoal mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground font-body text-sm mb-10">Last updated: April 2026</p>

        <div className="gold-divider mb-10" />

        <Section title="1. Information We Collect">
          <p>
            When you book a consultation with {SITE_NAME}, we collect the following information that you voluntarily provide:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Parent&apos;s name and contact details (WhatsApp number)</li>
            <li>Baby&apos;s date of birth, time of birth, and place of birth</li>
            <li>Parents&apos; name preferences and cultural background (if shared)</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information you provide solely for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Conducting your baby name numerology consultation</li>
            <li>Preparing your personalised Numeroscope report</li>
            <li>Communicating with you via WhatsApp regarding your consultation</li>
          </ul>
          <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </Section>

        <Section title="3. Data Retention">
          <p>
            Consultation records are retained for up to 2 years to support ongoing guidance. You may request deletion of your data at any time by contacting us on WhatsApp.
          </p>
        </Section>

        <Section title="4. Data Security">
          <p>
            All communication and data exchange happens via WhatsApp&apos;s end-to-end encrypted platform. We do not store birth data on public servers.
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            This website uses minimal cookies necessary for basic functionality (session, analytics). No advertising cookies are used. You can disable cookies in your browser settings.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            We use WhatsApp Business for communication. By contacting us via WhatsApp, you agree to WhatsApp&apos;s own Privacy Policy. Our website may include fonts and icons loaded from Google Fonts and Wikimedia Commons.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, contact us via WhatsApp.</p>
        </Section>

        <Section title="8. Contact">
          <p>
            For any privacy-related queries, reach us on WhatsApp. We aim to respond within 2 business days.
          </p>
        </Section>

        <div className="gold-divider my-10" />
        <p className="text-muted-foreground font-body text-sm text-center">
          © {new Date().getFullYear()} {SITE_NAME} · All rights reserved
        </p>
      </div>
    </main>
  );
}
