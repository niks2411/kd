"use client";

import { useState } from "react";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { INDUSTRIES } from "@/lib/data";

export const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="bg-[#F9FAFB] py-28 md:py-40" data-testid="industries">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal><Overline color="text-[#002FA7]">Industries We Serve</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02] text-[#0A0A0A]">
              Engineering expertise across diverse industries.
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-[#E5E7EB]">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={0}>
              <div
                onMouseEnter={() => setActive(i)}
                data-testid={`industry-${i}`}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 border-b border-[#E5E7EB] cursor-default hover:bg-white transition-colors duration-300 px-4"
              >
                <span className="md:col-span-1 font-mono text-sm text-[#525252]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`md:col-span-4 font-display text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300 ${active === i ? "text-[#002FA7] font-medium" : "text-[#0A0A0A]"}`}>
                  {ind.name}
                </h3>
                <p className="md:col-span-7 text-[#525252] font-light leading-relaxed max-w-2xl">{ind.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
