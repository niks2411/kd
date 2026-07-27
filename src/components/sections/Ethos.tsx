"use client";

import { Reveal, Overline } from "@/components/motion/Reveal";
import { PHILOSOPHY_3P, ETHOS } from "@/lib/data";

export const Ethos = () => (
  <section id="ethos" className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#F9FAFB]" data-testid="ethos">
    {/* 3P Philosophy */}
    <div className="mb-28 md:mb-40">
      <div className="max-w-3xl mb-16">
        <Reveal><Overline color="text-[#002FA7]">Our 3P Philosophy</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02] text-[#0A0A0A]">
            People. Process. Performance.
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
        {PHILOSOPHY_3P.map((p, i) => (
          <Reveal key={p.p} delay={i * 0.1} className="bg-[#F9FAFB] p-10 md:p-12 group hover:bg-white transition-colors duration-500">
            <span className="font-mono text-xs tracking-[0.2em] text-[#E53E3E] font-semibold">P{i + 1}</span>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight mt-4 mb-5 text-[#0A0A0A]">{p.p}</h3>
            <p className="text-[#525252] font-light leading-relaxed">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </div>

    {/* Ethos grid */}
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <Reveal><Overline color="text-[#002FA7]">Quality · Innovation · Responsibility</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight mt-6 leading-[1.05] text-[#0A0A0A]">
            Built to a higher standard.
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
        {ETHOS.map((e, i) => (
          <Reveal key={e.title} delay={(i % 2) * 0.08} className="bg-[#F9FAFB] p-8 md:p-10">
            <h4 className="font-display text-xl md:text-2xl font-medium mb-4 tracking-tight text-[#0A0A0A]">{e.title}</h4>
            <p className="text-[#525252] font-light leading-relaxed text-sm">{e.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
