"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { PROCESS } from "@/lib/data";
import { ArrowRight, CheckCircle2, ShieldCheck, Cog, Cpu, Wrench } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="bg-white border-b border-[#E5E7EB] py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl">
              <Reveal>
                <Overline color="text-[#002FA7]">Engineering Workflow</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A0A0A] tracking-tight mt-4">
                  Our 8-Step <span className="text-[#002FA7] font-medium">Turnkey Engineering</span> Process
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#525252] font-light leading-relaxed">
                  From initial wire spec audit to 72-hour stress testing and on-site factory installation, every machine undergoes a rigorous quality lifecycle.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 8-Step Process Grid */}
        <section className="py-20 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.07} className="bg-white border border-[#E5E7EB] p-8 flex flex-col hover:border-[#002FA7] transition-all">
                <span className="font-display text-5xl font-extralight text-[#002FA7]/30 font-bold mb-4">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-medium text-[#0A0A0A] mb-3">
                  {step.t}
                </h3>
                <p className="text-xs text-[#525252] font-light leading-relaxed">
                  {step.d}
                </p>
                <div className="mt-auto pt-6 border-t border-[#E5E7EB] flex items-center gap-1.5 text-[11px] font-mono text-[#002FA7]">
                  <CheckCircle2 size={14} /> Stage Verified
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quality Assurance Highlight */}
          <div className="mt-20 bg-[#0A0A0A] text-white p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2">Rigorous Calibration</span>
                <h3 className="font-display text-3xl font-light mb-4">72-Hour Continuous Endurance Run</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                  Before dispatching any machine, it undergoes 72 hours of uninterrupted continuous operation under full rated speed to guarantee zero thermal expansion drift, perfect crimp height stability, and pneumatic seal longevity.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="bg-[#002FA7] text-white px-7 py-4 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-white hover:text-[#002FA7] transition-colors inline-flex items-center gap-2"
                >
                  Start Project Audit <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
