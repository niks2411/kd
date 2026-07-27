"use client";

import Marquee from "react-fast-marquee";

const ITEMS = ["Manufacturing Excellence", "Intelligent Automation", "Precision Engineering", "Reliable Technology"];

export const EditorialMarquee = () => (
  <section className="py-12 md:py-16 border-y border-[#E5E7EB] bg-[#F9FAFB] overflow-hidden" data-testid="marquee">
    <Marquee speed={45} gradient={false} autoFill>
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display uppercase font-medium tracking-tighter text-6xl md:text-8xl px-8 text-outline">
            {t}
          </span>
          <span className="h-3 w-3 rounded-full bg-[#E53E3E] mx-4" />
        </span>
      ))}
    </Marquee>
  </section>
);
