"use client";

import Marquee from "react-fast-marquee";

const ITEMS = [
  "Automatic Wire Processing",
  "Wire Cutting & Stripping",
  "Terminal Crimping Machines",
  "Harness Assembly Solutions",
  "Precision Testing Benches",
  "Custom Industrial Automation",
];

export const EditorialMarquee = () => (
  <section className="py-4 md:py-6 border-y border-[#E5E7EB] bg-[#ffffff] overflow-hidden" data-testid="marquee">
    <Marquee speed={45} gradient={false} autoFill>
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display uppercase font-medium tracking-tighter text-3xl md:text-5xl px-6 text-outline">
            {t}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#fd0000] mx-3" />
        </span>
      ))}
    </Marquee>
  </section>
);
