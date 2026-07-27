"use client";

import { Reveal, Overline } from "@/components/motion/Reveal";
import { CORE_VALUES, WHY } from "@/lib/data";

export const Values = () => (
  <section className="bg-[#0A0A0A] text-white py-28 md:py-40" data-testid="values">
    <div className="mx-auto max-w-[1600px] px-6 md:px-12">
      {/* Core values */}
      <div className="grid lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-6">
          <Reveal><Overline color="text-white/50">Our Core Values</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02]">
              The principles behind every machine.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/15">
        {CORE_VALUES.map((v, i) => (
          <Reveal
            key={v.k}
            delay={(i % 3) * 0.08}
            className="group border-b border-r border-white/15 p-8 md:p-10 hover:bg-[#002FA7] transition-colors duration-500 relative"
            data-testid={`value-${v.title.toLowerCase().replace(/\s/g, "-")}`}
          >
            <span className="font-mono text-sm text-white/40 group-hover:text-white/70 transition-colors">{v.k}</span>
            <h3 className="font-display text-2xl md:text-3xl font-medium mt-6 mb-4 tracking-tight">{v.title}</h3>
            <p className="text-white/55 font-light leading-relaxed group-hover:text-white/85 transition-colors">{v.body}</p>
          </Reveal>
        ))}
      </div>

      {/* Why choose us */}
      <div id="why" className="mt-32 md:mt-44">
        <div className="max-w-3xl mb-16">
          <Reveal><Overline color="text-white/50">Why Choose KD Engineers</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight mt-6 leading-[1.05]">
              A trusted engineering partner for modern manufacturing.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08} className="py-8 border-t border-white/15 pr-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[#E53E3E] text-sm mt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-display text-xl font-medium mb-3">{w.title}</h4>
                  <p className="text-white/55 font-light leading-relaxed text-sm">{w.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
