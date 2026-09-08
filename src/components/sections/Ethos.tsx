"use client";

import { Reveal, Overline } from "@/components/motion/Reveal";
import { PHILOSOPHY_3P, ETHOS } from "@/lib/data";

export const Ethos = () => (
  <section id="ethos" className="py-16 md:py-24 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#ffffff]" data-testid="ethos">
    {/* 3P Philosophy */}
    <div>
      <div className="max-w-3xl mb-16">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.02] text-[#0A0A0A]">
            Our 3P&apos;s
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
        {PHILOSOPHY_3P.map((p, i) => (
          <Reveal key={p.p} delay={i * 0.1} className="bg-[#ffffff] p-10 md:p-12 group hover:bg-white transition-colors duration-500">
            <span className="font-mono text-xs tracking-[0.2em] text-[#fd0000] font-semibold">P{i + 1}</span>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight mt-4 mb-5 text-[#0A0A0A]">{p.p}</h3>
            <p className="text-[#525252] font-light leading-relaxed">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
