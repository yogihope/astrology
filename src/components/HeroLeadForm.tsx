"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const HeroLeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    whatsapp: "",
    dob: "",
    tob: "",
    pob: "",
    gender: "",
    consultationType: "",
    source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // silently continue — user still sees success
    }
    setLoading(false);
    setSubmitted(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-438395182/2i9UCNS-_qMcEK7ChdEB",
      });
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-white/[0.07] backdrop-blur-xl p-8 text-center">
        <p className="text-5xl mb-4">🙏</p>
        <h3 className="font-heading text-2xl font-semibold text-gold mb-3">
          Namaste!
        </h3>
        <p className="text-ivory/80 font-body leading-relaxed">
          We&apos;ll WhatsApp you within 2 hours with personalized guidance.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gold/40 bg-white/[0.07] backdrop-blur-xl p-6 md:p-8 space-y-4"
    >
      <div className="text-center mb-2">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-gold">
          Book Your Baby&apos;s Name Consultation
        </h3>
        <p className="text-ivory/60 text-sm font-body mt-1">
          Please fill this form
        </p>
      </div>

      <input
        name="parentName"
        required
        placeholder="Your full name"
        value={form.parentName}
        onChange={handleChange}
        className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
      />

      <input
        name="whatsapp"
        type="tel"
        required
        placeholder="+91 XXXXX XXXXX"
        value={form.whatsapp}
        onChange={handleChange}
        className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
      />

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-ivory/50 text-xs font-body mb-1 block">
            Date of Birth
          </label>
          <input
            name="dob"
            type="date"
            required
            value={form.dob}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="text-ivory/50 text-xs font-body mb-1 block">
            Approx. time is fine
          </label>
          <input
            name="tob"
            type="time"
            value={form.tob}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <input
        name="pob"
        required
        placeholder="City, State"
        value={form.pob}
        onChange={handleChange}
        className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
      />

      <div>
        <label className="text-ivory/50 text-xs font-body mb-2 block">
          Gender
        </label>
        <div className="flex gap-4">
          {["Boy", "Girl"].map((g) => (
            <label
              key={g}
              className="flex items-center gap-2 text-ivory/80 text-sm font-body cursor-pointer"
            >
              <input
                type="radio"
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={handleChange}
                className="accent-gold w-4 h-4"
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-ivory/50 text-xs font-body mb-2 block">
          Consultation Preference
        </label>
        <div className="flex gap-4">
          {["Online", "Offline"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 text-ivory/80 text-sm font-body cursor-pointer"
            >
              <input
                type="radio"
                name="consultationType"
                value={opt}
                checked={form.consultationType === opt}
                onChange={handleChange}
                className="accent-gold w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <select
        name="source"
        required
        value={form.source}
        onChange={handleChange}
        className="w-full rounded-lg bg-white/10 border border-gold/20 px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors appearance-none"
      >
        <option value="" disabled className="text-charcoal">
          How did you hear about us?
        </option>
        <option value="Instagram" className="text-charcoal">
          Instagram
        </option>
        <option value="YouTube" className="text-charcoal">
          YouTube
        </option>
        <option value="Google" className="text-charcoal">
          Google
        </option>
        <option value="Friend/Relative" className="text-charcoal">
          Friend/Relative
        </option>
        <option value="Other" className="text-charcoal">
          Other
        </option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full font-body font-semibold text-charcoal text-base transition-all duration-300 hover:scale-[1.02] btn-shimmer disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg, hsl(38 40% 57%), hsl(28 73% 51%))",
        }}
      >
        {loading ? "Submitting..." : "✦ Begin Sacred Journey ✦"}
      </button>

      <p className="text-saffron text-xs text-center font-body font-medium">
        ⚡ Only 7 slots remaining for April 2026
      </p>

      <p className="text-ivory/40 text-xs text-center font-body flex items-center justify-center gap-1.5">
        <Lock className="w-3 h-3" />
        Your details are 100% private &amp; secure
      </p>
    </form>
  );
};

export default HeroLeadForm;
