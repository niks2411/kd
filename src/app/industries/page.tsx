"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { INDUSTRIES, IMAGES } from "@/lib/data";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="bg-white border-b border-[#E5E7EB] py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl">
              <Reveal>
                <Overline color="text-[#C5221F]">Application Sectors</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A0A0A] tracking-tight mt-4">
                  Engineering Solutions for <span className="text-[#C5221F] font-medium">Diverse Industries</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#525252] font-light leading-relaxed">
                  From high-voltage EV battery cables to mil-spec defense wire harnesses, our machinery powers high-volume production for tier-1 OEMs across India.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sectors Breakdown */}
        <section className="py-20 mx-auto max-w-[1600px] px-6 md:px-12 space-y-16">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 0.05} className="bg-white border border-[#E5E7EB] p-8 md:p-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="font-mono text-xs text-[#C5221F] font-bold uppercase tracking-wider bg-[#C5221F]/10 px-3 py-1 rounded-sm">
                    Sector 0{i + 1} — {ind.tag}
                  </span>
                  <h2 className="font-display text-3xl font-medium text-[#0A0A0A] mt-4 mb-4">
                    {ind.name}
                  </h2>
                  <p className="text-base text-[#525252] font-light leading-relaxed mb-6">
                    {ind.body}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold block">Key Processing Highlights:</span>
                    {ind.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-sm text-[#525252] font-light">
                        <CheckCircle2 size={16} className="text-[#C5221F] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?interest=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#C5221F] transition-colors"
                  >
                    Discuss Sector Solutions <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E7EB] p-8 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-mono text-[#C5221F]">
                      <Zap size={18} />
                      <span className="font-semibold">Automated Machine Line Match</span>
                    </div>
                    <p className="text-xs text-[#525252] font-light leading-relaxed">
                      Custom applicator die tooling, multi-stage stripping, and automated continuity test benches configured for {ind.name.toLowerCase()} specifications.
                    </p>
                    <div className="pt-4 border-t border-[#E5E7EB] text-xs text-[#0A0A0A] font-medium">
                      ✓ Guaranteed Cpk ≥ 1.67 crimp capability
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#C5221F] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-3xl font-light">Have Unique Harness Requirements?</h3>
            <p className="mt-2 text-white/80 font-light text-sm">Our R&D team custom designs machines around non-standard wire insulations and specialized terminals.</p>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#C5221F] px-7 py-3.5 text-sm font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors">
                Schedule Engineering Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
