"use client";

import { Reveal, Overline } from "@/components/motion/Reveal";
import { PROCESS } from "@/lib/data";

export const Process = () => (
  <section id="process" className="bg-[#0A0A0A] text-white py-16 md:py-24" data-testid="process">
    <div className="mx-auto max-w-[1600px] px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
        <div className="lg:col-span-8">
          <Reveal><Overline color="text-white/50">Our Engineering Process</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02]">
              From concept to <span className="text-white/40">complete solution.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.2}>
            <p className="text-white/55 font-light leading-relaxed">
              Every project follows a structured, eight-step engineering approach designed to
              ensure outstanding, repeatable results.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/15">
        {PROCESS.map((s, i) => (
          <Reveal
            key={s.n}
            delay={(i % 4) * 0.07}
            className="group border-r border-b border-white/15 p-8 md:p-10 min-h-[220px] flex flex-col hover:bg-[#fd0000] transition-colors duration-500"
            data-testid={`process-step-${s.n}`}
          >
            <span className="font-mono text-xs sm:text-[13px] font-bold text-[#fd0000] group-hover:text-white transition-colors tracking-wider block">STEP {s.n}</span>
            <h3 className="font-display text-[22px] sm:text-[24px] font-bold mt-4 mb-2 text-white">{s.t}</h3>
            <p className="text-white/65 font-sans font-normal text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
