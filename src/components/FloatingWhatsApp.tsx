"use client";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919524567894?text=Hi%2C%20I%20want%20your%20help%20in%20choosing%20best%20name%20for%20my%20child%20with%20help%20of%20numerology."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] hidden md:flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-3.5 font-body font-semibold text-sm shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform duration-300 animate-whatsapp-pulse"
  >
    <svg className="w-6 h-6 flex-shrink-0" fill="white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.318A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.587-5.863-1.606l-.335-.198-2.77.78.72-2.63-.222-.354A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
    <span className="hidden md:inline">Chat on WhatsApp</span>
  </a>
);

export default FloatingWhatsApp;
