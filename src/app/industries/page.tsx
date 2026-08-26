"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { INDUSTRIES, CONTACT } from "@/lib/data";
import {
  Car,
  Tv,
  Cpu,
  Radio,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Send,
  PhoneCall,
  ChevronRight,
  Layers,
} from "lucide-react";

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const iconsMap: Record<string, React.ReactNode> = {
    "automotive-ev": <Car size={20} />,
    "consumer-appliances": <Tv size={20} />,
    "industrial-automation": <Cpu size={20} />,
    "telecom-data": <Radio size={20} />,
    "defense-aerospace": <ShieldCheck size={20} />,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your industry consultation request has been submitted to KD Engineers.");
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
            style={{ backgroundImage: "url('/images/about.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md">
                  <Sparkles size={14} /> Multi-Sector Application Machinery
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  Engineering Solutions for <span className="text-[#fd0000] font-normal">Diverse Sectors</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed">
                  Tailored wire cutting, double-ended stripping, terminal crimping, and automated testing machinery for automotive, electric vehicles, appliances, and aerospace.
                </p>
              </Reveal>

              {/* Sector Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                <div>
                  <span className="font-display text-2xl font-semibold text-[#fd0000]">Automotive & EV</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Engine & Battery Looms</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Appliances</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">HVAC & Internal Wiring</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Industrial</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Control Panels & CNC</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Defense</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Mil-Spec Certified</span>
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
                    <Layers size={16} className="text-[#fd0000]" /> Industry Sectors
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  {INDUSTRIES.map((ind) => {
                    const isSelected = activeIndustry === ind.id;
                    return (
                      <button
                        key={ind.id}
                        onClick={() => setActiveIndustry(ind.id)}
                        className={`w-full text-left px-3 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#fd0000] text-white shadow-xs"
                            : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#fd0000]"
                        }`}
                      >
                        <span className="truncate pr-2">{ind.name}</span>
                        <ChevronRight size={14} className={isSelected ? "text-white" : "text-[#9CA3AF]"} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Support Widget */}
              <div className="bg-[#0A0A0A] text-white p-5 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold">
                  <PhoneCall size={14} /> Industry Specialists
                </div>
                <h4 className="text-sm font-semibold">Custom Sector Engineering</h4>
                <p className="text-xs text-[#9CA3AF] font-light">Discuss your wire specifications or request an on-site technical audit.</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fd0000] font-semibold hover:underline"
                >
                  Call: {CONTACT.phone}
                </a>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT AREA */}
            <main className="lg:col-span-9 space-y-8">
              <div className="space-y-6">
                {INDUSTRIES.map((ind) => (
                  <div
                    key={ind.id}
                    id={ind.id}
                    className={`bg-white border p-8 rounded-sm transition-all duration-300 ${
                      activeIndustry === ind.id ? "border-[#fd0000] shadow-md" : "border-[#E5E7EB]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#fd0000]/10 text-[#fd0000] rounded-xs">
                          {iconsMap[ind.id] || <Cpu size={20} />}
                        </div>
                        <div>
                          <span className="font-mono text-xs text-[#fd0000] font-bold uppercase tracking-wider bg-[#fd0000]/10 px-2.5 py-0.5 rounded-xs">
                            {ind.tag}
                          </span>
                          <h2 className="font-display text-2xl font-semibold text-[#0A0A0A] mt-1">{ind.name}</h2>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#fd0000] transition-colors rounded-xs"
                      >
                        Consult Team <ArrowRight size={14} />
                      </Link>
                    </div>

                    <p className="text-sm text-[#525252] font-light leading-relaxed mb-6">{ind.body}</p>

                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 rounded-sm">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-3">
                        Key Applications & Technological Highlights:
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {ind.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-[#374151] font-medium">
                            <CheckCircle2 size={15} className="text-[#fd0000] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
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
              <Overline color="text-[#fd0000]">Direct Industry Consultation</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tight mt-2">
                Talk to <span className="text-[#fd0000] font-medium">KD ENGINEERS INDIA</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
                Send your industry wiring specifications or request a custom machinery quotation.
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
                      placeholder="e.g. Vikram Sharma"
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
                      placeholder="vikram@company.com"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Industry Sector & Wire Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify wire gauge, sector requirements (e.g. EV orange cable, appliances), or target output..."
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fd0000] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs rounded-xs"
                >
                  <Send size={14} /> Submit Sector Consultation Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM VIVID RED CTA BANNER */}
        <section className="py-12 bg-[#fd0000] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-2xl font-light">Require Custom Machinery Blueprint for Your Sector?</h3>
            <p className="mt-1.5 text-white/90 font-light text-xs sm:text-sm">
              Visit our Gurugram facility or dispatch your wire samples for automated crimp & throughput evaluation.
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
