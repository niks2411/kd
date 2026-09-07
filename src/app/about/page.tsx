"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CORE_VALUES, PHILOSOPHY_3P, ETHOS, IMAGES, STATS, CONTACT } from "@/lib/data";
import {
  Compass,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Building2,
  Award,
  Layers,
  PhoneCall,
  Check,
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about");
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your consult request has been submitted to KD Engineers.");
    setTimeout(() => setFormStatus(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-24 pb-0">
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
                  <Sparkles size={14} /> 25+ Years of Engineering Excellence
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  About KD Engineers
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed">
                  Specializing in advanced wire harness processing machinery, custom industrial automation, and turnkey engineering solutions for global manufacturers.
                </p>
              </Reveal>

              {/* Key Live Performance Indicators Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-[#fd0000]">{s.value}</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT WORKSPACE: SIDEBAR + CONTENT */}
        <section className="py-14 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT STICKY CONTROL SIDEBAR */}
            <aside className="lg:col-span-3 space-y-6 sticky top-28">
              <div className="bg-[#ffffff] border border-[#E5E7EB] rounded-sm overflow-hidden shadow-2xs">
                <div className="bg-[#0A0A0A] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display text-sm font-semibold">
                    <Building2 size={16} className="text-[#fd0000]" /> Company Overview
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  {[
                    { id: "about", label: "Legacy & Purpose", icon: <Sparkles size={14} /> },
                    { id: "vision", label: "Our Vision", icon: <Compass size={14} /> },
                    { id: "mission", label: "Our Mission", icon: <Target size={14} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full text-left px-3 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#fd0000] text-white shadow-xs"
                          : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#fd0000]"
                      }`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Support Widget */}
              <div className="bg-[#0A0A0A] text-white p-5 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold">
                  <PhoneCall size={14} /> Direct Engineering Line
                </div>
                <h4 className="text-sm font-semibold">Connect with Our Team</h4>
                <p className="text-xs text-[#9CA3AF] font-light">Discuss your wire specifications or schedule a visit to our Faridabad or Pune plants.</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fd0000] font-semibold hover:underline"
                >
                  Call: {CONTACT.phone}
                </a>
              </div>
            </aside>

            {/* RIGHT MAIN CONTENT AREA */}
            <main className="lg:col-span-9 space-y-12">
              
              {/* Active Tab Narrative Card */}
              <div className="bg-white border border-[#E5E7EB] p-8 rounded-sm shadow-2xs">
                <div className="text-base text-[#525252] font-light leading-relaxed space-y-4">
                  {activeTab === "about" && (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-[#0A0A0A] mb-2">
                        Engineering Reliability for Wiring Harness Manufacturing
                      </h3>
                      <p>
                        Established in 1999 by Mr. Devender Sharma, KD Engineers India Pvt. Ltd. delivers precision-engineered solutions for automotive, EV, industrial, and appliance manufacturers worldwide.
                      </p>
                      <p>
                        KD Engineers specializes in end-to-end wiring harness solutions including testing systems, assembly line automation, wire and cable processing machines, and customized Special Purpose Machines (SPM).
                      </p>
                      <p>
                        Formally incorporated as a Private Limited company in 2025 under the leadership of Mr. Gajesh Sharma, Managing Director, KD Engineers continues to drive innovation, operational excellence, and customer-centric solutions from our manufacturing facilities in Faridabad (Haryana) and Pune (Maharashtra).
                      </p>
                    </>
                  )}

                  {activeTab === "vision" && (
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                        The Most Trusted Engineering Partner
                      </h3>
                      <p>
                        To deliver innovative automation technologies, precision machinery and world-class engineering solutions that shape the future of industrial manufacturing.
                      </p>
                    </div>
                  )}

                  {activeTab === "mission" && (
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                        Empower Manufacturers, Everywhere
                      </h3>
                      <p>
                        To improve production efficiency, reduce downtime, enhance product quality and create long-term value through continuous innovation and dedicated after-sales support.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 3P Philosophy Cards */}
              <div className="space-y-4">
                <Overline color="text-[#fd0000]">Operational Framework</Overline>
                <h2 className="font-display text-2xl font-semibold text-[#0A0A0A]">The 3P Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {PHILOSOPHY_3P.map((item, i) => (
                    <div key={item.p} className="bg-white border border-[#E5E7EB] p-6 rounded-sm hover:border-[#fd0000] transition-colors">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#fd0000] font-bold block mb-2">
                        P{i + 1} — {item.p}
                      </span>
                      <p className="text-xs text-[#525252] font-light leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Principles Grid */}
              <div className="space-y-4">
                <Overline color="text-[#fd0000]">Foundational Principles</Overline>
                <h2 className="font-display text-2xl font-semibold text-[#0A0A0A]">Our Engineering Core Values</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {CORE_VALUES.map((v) => (
                    <div key={v.k} className="bg-white border border-[#E5E7EB] p-6 rounded-sm hover:border-[#fd0000] transition-colors">
                      <span className="font-mono text-xs text-[#fd0000] font-semibold block mb-1">{v.k}</span>
                      <h4 className="font-display text-lg font-medium text-[#0A0A0A] mb-2">{v.title}</h4>
                      <p className="text-xs text-[#525252] font-light leading-relaxed">{v.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ethos List */}
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-8 rounded-sm space-y-4">
                <h3 className="font-display text-xl font-semibold text-[#0A0A0A] flex items-center gap-2">
                  <Award size={20} className="text-[#fd0000]" /> Manufacturing Excellence Standards
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ETHOS.map((e) => (
                    <div key={e.title} className="flex items-start gap-2 text-xs text-[#374151]">
                      <Check size={16} className="text-[#fd0000] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#0A0A0A] font-semibold">{e.title}</strong>
                        <span className="font-light text-[#525252]">{e.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </main>
          </div>
        </section>

        {/* EMBEDDED DIRECT CONSULTATION FORM */}
        <section className="py-14 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <Overline color="text-[#fd0000]">Direct Technical Consultation</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tight mt-2">
                Talk to <span className="text-[#fd0000] font-medium">KD ENGINEERS INDIA</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
                Send your wire specifications or schedule an engineering consult with our Gurugram technical team.
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="rahul@company.com"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Project Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify wire types, machinery requirements, or operational challenges..."
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fd0000] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs rounded-xs"
                >
                  <Send size={14} /> Submit Engineering Consult Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM VIVID RED CTA BANNER */}
        <section className="py-12 bg-[#fd0000] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-2xl font-light">Ready to Upgrade Your Production Line Efficiency?</h3>
            <p className="mt-1.5 text-white/90 font-light text-xs sm:text-sm">
              Visit our Gurugram facility or dispatch your wire samples for automated crimp testing.
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
