"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-ivory/95 backdrop-blur-lg border-t border-gold/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3">
        <a
          href="#get-started"
          className="btn-gold flex-1 block text-center text-sm py-3"
        >
          Get Baby Name Guidance
        </a>
        <a
          href="https://wa.me/919524567894?text=Hi%2C%20I%20want%20your%20help%20in%20choosing%20best%20name%20for%20my%20child%20with%20help%20of%20numerology."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
