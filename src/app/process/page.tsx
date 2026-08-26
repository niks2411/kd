"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { PROCESS, CONTACT } from "@/lib/data";
import { ArrowRight, Sparkles, Send, PhoneCall, ChevronRight, Layers, CheckCircle2, Shield } from "lucide-react";

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(PROCESS[0].n);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your process consultation request has been submitted to KD Engineers.");
    setTimeout(() => setFormStatus(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HIGH-IMPACT HERO BANNER */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none transition-all duration-700"
            style={{ backgroundImage: "url('/images/hero.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md">
                  <Sparkles size={14} /> ISO-Aligned Manufacturing Workflow
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  Our 8-Step <span className="text-[#fd0000] font-normal">Turnkey Process</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed">
                  From initial wire spec audit and custom CAD kinematics design to 72-hour continuous endurance stress testing and on-site factory installation.
                </p>
              </Reveal>

              {/* Turnkey Process Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                <div>
                  <span className="font-display text-2xl font-semibold text-[#fd0000]">8 Steps</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Turnkey Execution</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">ISO 9001</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Quality Aligned</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">72-Hour</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Stress Endurance Run</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Zero Drift</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Tolerance Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT WORKSPACE: SIDEBAR + CONTENT */}
        <section className="py-14 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT STICKY SIDEBAR */}
            <aside className="lg:col-span-3 space-y-6 sticky top-28">
              <div className="bg-[#ffffff] border border-[#E5E7EB] rounded-sm overflow-hidden shadow-2xs">
                <div className="bg-[#0A0A0A] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display text-sm font-semibold">
                    <Layers size={16} className="text-[#fd0000]" /> Workflow Index
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  {PROCESS.map((step) => {
                    const isSelected = activeStep === step.n;
                    return (
                      <button
                        key={step.n}
                        onClick={() => setActiveStep(step.n)}
                        className={`w-full text-left px-3 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#fd0000] text-white shadow-xs"
                            : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#fd0000]"
                        }`}
                      >
                        <span className="truncate pr-2">{step.n}. {step.t}</span>
                        <ChevronRight size={14} className={isSelected ? "text-white" : "text-[#9CA3AF]"} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Support Widget */}
              <div className="bg-[#0A0A0A] text-white p-5 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold">
                  <PhoneCall size={14} /> Process Audit Line
                </div>
                <h4 className="text-sm font-semibold">Request a Production Audit</h4>
                <p className="text-xs text-[#9CA3AF] font-light">Send your wire samples to Gurugram for free crimp force & speed validation.</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fd0000] font-semibold hover:underline"
                >
                  Call: {CONTACT.phone}
                </a>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT AREA */}
            <main className="lg:col-span-9 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {PROCESS.map((step) => (
                  <div
                    key={step.n}
                    id={`step-${step.n}`}
                    className={`bg-white border p-6 rounded-sm flex flex-col transition-all duration-300 ${
                      activeStep === step.n ? "border-[#fd0000] shadow-md" : "border-[#E5E7EB]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-4xl font-extralight text-[#fd0000] font-bold">
                        {step.n}
                      </span>
                      <span className="bg-[#F9FAFB] border border-[#E5E7EB] text-[#525252] text-[10px] font-mono uppercase px-2.5 py-0.5 font-semibold">
                        Phase {step.n}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-[#0A0A0A] mb-2">{step.t}</h3>
                    <p className="text-xs text-[#525252] font-light leading-relaxed mb-4">{step.d}</p>

                    <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center gap-1.5 text-[11px] font-mono text-[#fd0000] font-medium">
                      <CheckCircle2 size={14} /> Quality Check Verified
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </section>

        {/* EMBEDDED DIRECT CONSULTATION FORM */}
        <section className="py-14 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <Overline color="text-[#fd0000]">Direct Process Consultation</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tight mt-2">
                Talk to <span className="text-[#fd0000] font-medium">KD ENGINEERS INDIA</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
                Send your wire specifications or request an engineering consultation.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-2xs rounded-sm">
              {formStatus && (
                <div className="mb-6 p-3 bg-[#fd0000]/10 border border-[#fd0000] text-[#fd0000] text-xs font-semibold rounded-xs">
                  {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Full Name <span className="text-[#fd0000]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Corporate Email <span className="text-[#fd0000]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@enterprise.com"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Project Requirements / Wire Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify target volume, wire conductor area, or process automation requirements..."
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fd0000] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs rounded-xs"
                >
                  <Send size={14} /> Submit Process Consultation Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM VIVID RED CTA BANNER */}
        <section className="py-12 bg-[#fd0000] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-2xl font-light">Ready to Audit Your Machine Kinematics & Cycle Speed?</h3>
            <p className="mt-1.5 text-white/90 font-light text-xs sm:text-sm">
              Visit our Gurugram facility or dispatch your wire samples for automated crimp force & speed testing.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#fd0000] px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors rounded-xs"
              >
                Schedule Facility Visit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
