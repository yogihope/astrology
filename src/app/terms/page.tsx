import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. Understand the terms and conditions governing your baby name numerology consultation with Puunit Dsai.`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed font-body space-y-3">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <main className="section-ivory min-h-screen py-20">
      <div className="container max-w-3xl">
        <Link href="/" className="text-gold hover:text-gold-light font-body text-sm flex items-center gap-1 mb-10 transition-colors">
          ← Back to Home
        </Link>

        <p className="text-gold font-body text-xs tracking-widest uppercase mb-2">Legal</p>
        <h1 className="font-heading text-4xl font-semibold text-charcoal mb-2">Terms of Service</h1>
        <p className="text-muted-foreground font-body text-sm mb-10">Last updated: April 2026</p>

        <div className="gold-divider mb-10" />

        <Section title="1. Service Description">
          <p>
            {SITE_NAME} provides personalised newborn baby name consultation services based on Chaldean numerology and birth-data analysis. Services are provided by Puunit Dsai, a master numerologist specialising in newborn baby names.
          </p>
        </Section>

        <Section title="2. Nature of Consultation">
          <p>
            Numerology consultations are provided for <strong>guidance and informational purposes only</strong>. Results, interpretations, and recommendations are based on the Chaldean numerological framework and represent the expert opinion of the practitioner.
          </p>
          <p>
            {SITE_NAME} does not guarantee specific outcomes in career, health, relationships, or finances based on name selection.
          </p>
        </Section>

        <Section title="3. Client Responsibilities">
          <p>By booking a consultation, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate birth details (date, time, place of birth)</li>
            <li>Use the consultation guidance at your own discretion</li>
            <li>Not misrepresent the consultation outcomes to third parties</li>
          </ul>
        </Section>

        <Section title="4. Payment & Refunds">
          <p>
            Consultation fees are discussed and agreed upon before commencement of service via WhatsApp. As each consultation is a personalised service requiring significant time and expertise, <strong>refunds are not provided</strong> once the analysis has begun.
          </p>
          <p>
            If you are unsatisfied, please contact us and we will endeavour to address your concerns within the scope of the original service.
          </p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All Numeroscope reports, name lists, and consultation materials produced by {SITE_NAME} are the intellectual property of Puunit Dsai. These are provided for personal use by the parents only and may not be reproduced, shared commercially, or distributed without written consent.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            {SITE_NAME} and Puunit Dsai shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or reliance on consultation guidance. Total liability shall not exceed the amount paid for the specific consultation.
          </p>
        </Section>

        <Section title="7. Governing Law">
          <p>
            These terms are governed by the laws of India. Any disputes shall be resolved in the courts of jurisdiction applicable to the registered address of the business.
          </p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>
            We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.
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
