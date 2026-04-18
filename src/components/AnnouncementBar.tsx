"use client";

const AnnouncementBar = () => (
  <div className="bg-maroon-deep py-2.5 px-4 text-center text-ivory text-[13px] font-body relative z-[60]">
    <div className="container flex items-center justify-center gap-3 flex-wrap">
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        Only 7 consultation slots left this month — Book before they&apos;re gone
      </span>
      <a
        href="#get-started"
        className="text-gold font-semibold hover:text-gold-light transition-colors whitespace-nowrap"
      >
        Book Now →
      </a>
    </div>
  </div>
);

export default AnnouncementBar;
