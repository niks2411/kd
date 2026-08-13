"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CORE_VALUES, PHILOSOPHY_3P, ETHOS, IMAGES } from "@/lib/data";
import { Compass, Target, Lightbulb, Shield, Users, Trophy, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Page Header */}
        <section className="bg-white border-b border-[#E5E7EB] py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl">
              <Reveal>
                <Overline color="text-[#C5221F]">About KD Engineers India</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A0A0A] tracking-tight mt-4">
                  Engineering Excellence Built on <span className="text-[#C5221F] font-medium">Innovation</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#525252] font-light leading-relaxed">
                  Specializing in advanced wire harness processing technology, industrial automation, and precision manufacturing solutions for over two decades.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Company Narrative & Vision */}
        <section className="py-20 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#E5E7EB] p-8 md:p-12 shadow-sm">
                <div className="flex gap-3 border-b border-[#E5E7EB] pb-6 mb-8 flex-wrap">
                  {[
                    { id: "about", label: "Legacy & Purpose", icon: <Sparkles size={16} /> },
                    { id: "vision", label: "Our Vision", icon: <Compass size={16} /> },
                    { id: "mission", label: "Our Mission", icon: <Target size={16} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#C5221F] text-white"
                          : "bg-[#F9FAFB] text-[#525252] border border-[#E5E7EB] hover:text-[#0A0A0A]"
                      }`}
                    >
                      {tab.icon} {tab.label}
                    </button>
                  ))}
                </div>

                <div className="text-base text-[#525252] font-light leading-relaxed space-y-4">
                  {activeTab === "about" && (
                    <>
                      <p>
                        Our journey has always been driven by one purpose — to simplify manufacturing while helping businesses achieve higher productivity, greater accuracy, and improved operational efficiency.
                      </p>
                      <p>
                        With years of engineering expertise and deep understanding of industrial manufacturing, we design and manufacture advanced machinery capable of meeting the changing demands of modern production facilities.
                      </p>
                      <p>
                        Our solutions combine intelligent automation, precision engineering, robust construction, and user-friendly operation — enabling manufacturers to reduce production costs while improving product quality.
                      </p>
                    </>
                  )}

                  {activeTab === "vision" && (
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">Shaping the Future of Industrial Automation</h3>
                      <p>
                        To become the most trusted engineering partner for manufacturers by delivering innovative automation technologies, precision machinery, and world-class engineering solutions that shape the future of industrial manufacturing globally.
                      </p>
                    </div>
                  )}

                  {activeTab === "mission" && (
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">Empowering Manufacturers Worldwide</h3>
                      <p>
                        Our mission is to empower manufacturers with intelligent engineering solutions that improve production efficiency, reduce downtime, enhance product quality, and create long-term value for every customer.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E5E7EB]">
                <img src={IMAGES.about} alt="KD Engineers Fabrication Facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 font-mono text-xs px-3 py-1 text-[#0A0A0A] border border-[#E5E7EB]">
                  R&D & Manufacturing Unit
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3P Philosophy */}
        <section className="py-20 bg-white border-y border-[#E5E7EB]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <Reveal><Overline color="text-[#C5221F]">Operational Framework</Overline></Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A0A0A] tracking-tight mt-3">
                  Our 3P Philosophy
                </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PHILOSOPHY_3P.map((p, i) => (
                <Reveal key={p.p} delay={i * 0.1} className="bg-[#F9FAFB] border border-[#E5E7EB] p-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FF3B30] font-bold">P{i + 1}</span>
                  <h3 className="font-display text-3xl font-light text-[#0A0A0A] mt-3 mb-4">{p.p}</h3>
                  <p className="text-sm text-[#525252] font-light leading-relaxed">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <Reveal><Overline color="text-[#C5221F]">Foundational Principles</Overline></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A0A0A] tracking-tight mt-3">
                Core Values Behind Every Machine
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v.k} delay={i * 0.08} className="bg-white border border-[#E5E7EB] p-8 hover:border-[#C5221F] transition-colors">
                <span className="font-mono text-xs text-[#C5221F] font-semibold">{v.k}</span>
                <h3 className="font-display text-xl font-medium text-[#0A0A0A] mt-3 mb-3">{v.title}</h3>
                <p className="text-xs text-[#525252] font-light leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ethos & Standards */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <Reveal><Overline color="text-white/60">Quality Assurance</Overline></Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-3">
                  Built to the Highest Industrial Standard
                </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ETHOS.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.08} className="border-t border-white/20 pt-6">
                  <h4 className="font-display text-xl font-medium text-white mb-3">{e.title}</h4>
                  <p className="text-xs text-white/60 font-light leading-relaxed">{e.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#C5221F] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-3xl font-light">Partner with India's Premier Engineering Team</h3>
            <p className="mt-2 text-white/80 font-light text-sm">Consult with our automation experts to design your custom production line.</p>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#C5221F] px-7 py-3.5 text-sm font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors">
                Contact Sales Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
