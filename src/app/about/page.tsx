"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CORE_VALUES, PHILOSOPHY_3P, STATS, CONTACT } from "@/lib/data";
import {
  Compass,
  Target,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send,
  Building2,
  Award,
  PhoneCall,
  Factory,
  MapPin,
  Users,
  Wrench,
  Check,
  ChevronRight,
  TrendingUp,
  Cpu,
  History,
  Layers,
  Zap,
} from "lucide-react";

// Company Milestones Data for Scroll Timeline
const MILESTONES = [
  {
    year: "1999",
    title: "Foundation & Vision",
    desc: "Established by Founder Mr. Devender Sharma in Faridabad with a vision to deliver precision toolings, crimping dies, and wire processing machinery for Indian manufacturers.",
    badge: "Origin",
    highlights: ["In-house tool steel hardening", "Custom applicator die design"],
  },
  {
    year: "2008",
    title: "In-House Toolroom & Machining",
    desc: "Expanded CNC wire-cut EDM and precision surface grinding facilities to manufacture high-durability tool steel blades and applicators under one roof.",
    badge: "Tooling Depth",
    highlights: ["SKD11 tool steel blades", "CNC EDM precision machining"],
  },
  {
    year: "2015",
    title: "Automatic Processing Machinery",
    desc: "Launched high-speed automatic wire cutting, double-ended stripping, and servo terminal crimping press series for automotive wiring looms.",
    badge: "Automation",
    highlights: ["10,000 pcs/hr wire cutting", "Servo press waveform control"],
  },
  {
    year: "2018",
    title: "Unit II Pune Facility Established",
    desc: "Opened full manufacturing and field service plant in MIDC Chakan, Pune to support Tier-1 automotive and industrial wiring harness hubs in Western India.",
    badge: "Expansion",
    highlights: ["MIDC Chakan plant opening", "Pan-India field support network"],
  },
  {
    year: "2025",
    title: "Private Limited Incorporation",
    desc: "Formally incorporated as KD Engineers India Pvt. Ltd. under Managing Director Mr. Gajesh Sharma, introducing digital DWS guidance assembly systems.",
    badge: "Incorporation",
    highlights: ["Pvt Ltd incorporation", "Digitization Assembly Wiring System"],
  },
  {
    year: "2026+",
    title: "EV & Next-Gen Automation",
    desc: "Deploying high-voltage EV orange cable processing, Crimp Force Monitoring (CFM), and expanding pan-India and international exports.",
    badge: "Future",
    highlights: ["EV orange cable stripping", "CFM waveform analysis"],
  },
];

// Interactive Manufacturing Units Data
const MANUFACTURING_UNITS = [
  {
    id: "faridabad",
    unitName: "UNIT I — Faridabad Plant",
    address: "Plot No. 56A, Gali No. 6, Krishna Colony, Industrial Area, Sector 25, Faridabad – 121004 (Haryana) INDIA",
    focus: "Machining, Applicator Die Fabrication, Machine Assembly & R&D Center",
    workforce: "50+ Skilled Engineers & Toolmakers",
    capacity: "Over 500+ Machines Manufactured Annually",
  },
  {
    id: "pune",
    unitName: "UNIT II — Pune Plant",
    address: "Plot No. A-7/2/F-8, Industrial Area, Phase IV, MIDC Chakan, Tal. Khed, Nighoje, Pune – 410501 (Maharashtra)",
    focus: "Western Regional Service, Assembly Testing, Custom SPM & Client Calibration Center",
    workforce: "40+ Engineers & Field Support Technicians",
    capacity: "24/7 Rapid Spares & Pan-India On-Site Support",
  },
];

// SCROLL-DRIVEN ANIMATED ZIG-ZAG TIMELINE COMPONENT
function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Explicit saw-tooth zig-zag path string connecting 6 milestone card nodes
  const zigZagPath = [
    "M 25 8",
    "L 45 11.5 L 35 15 L 65 18.5 L 55 22 L 75 25",
    "L 55 28.5 L 65 32 L 35 35.5 L 45 39 L 25 42",
    "L 45 45.5 L 35 49 L 65 52.5 L 55 56 L 75 58",
    "L 55 61.5 L 65 65 L 35 68.5 L 45 72 L 25 75",
    "L 45 78.5 L 35 82 L 65 85.5 L 55 89 L 75 92"
  ].join(" ");

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-6">
      
      {/* SVG Animated Saw-tooth Zig-Zag Line Path that Draws on Scroll */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block overflow-visible z-0"
      >
        {/* Grey Background Track */}
        <path
          d={zigZagPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />

        {/* Vivid Red Glowing Zig-Zag Path line that draws on scroll */}
        <motion.path
          d={zigZagPath}
          fill="none"
          stroke="#fd0000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Mobile vertical indicator line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E5E7EB] sm:hidden" />

      {/* Timeline Milestone Cards List */}
      <div className="space-y-10 sm:space-y-14 relative z-10">
        {MILESTONES.map((m, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative flex flex-col sm:flex-row items-center"
            >
              {/* Desktop Node Dot Ring positioned on the Zig-Zag Line */}
              <div className={`hidden sm:flex absolute top-6 -translate-x-1/2 z-20 ${isEven ? "left-[25%]" : "left-[75%]"}`}>
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd0000] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#fd0000] border-2 border-[#ffffff] shadow-md"></span>
                </span>
              </div>

              {/* Mobile Node Dot */}
              <div className="sm:hidden absolute left-4 top-6 -translate-x-1/2 z-20">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fd0000] border-2 border-[#ffffff] shadow-md"></span>
                </span>
              </div>

              {/* Left or Right Card Wrapper */}
              <div className={`w-full pl-12 sm:pl-0 ${isEven ? "sm:pr-12 sm:mr-auto sm:w-1/2" : "sm:pl-12 sm:ml-auto sm:w-1/2"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#ffffff] border border-[#E5E7EB] p-6 sm:p-7 rounded-xs space-y-3.5 hover:border-[#fd0000] transition-colors shadow-md group relative"
                >
                  <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                    <span className="font-mono text-3xl font-bold text-[#fd0000] tracking-tight">
                      {m.year}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A] bg-[#FAFAFA] border border-[#E5E7EB] px-3 py-1 rounded-full">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0A0A0A] group-hover:text-[#fd0000] transition-colors leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
                    {m.desc}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {m.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-mono text-[#0A0A0A] bg-[#FAFAFA] px-2.5 py-1 rounded-xs border border-[#E5E7EB] flex items-center gap-1.5 font-medium">
                        <Check size={12} className="text-[#fd0000]" /> {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about");
  const [activePlant, setActivePlant] = useState<"faridabad" | "pune">("faridabad");
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Thank you! Your consult request has been submitted to KD Engineers.");
      setTimeout(() => setFormStatus(null), 6000);
    }, 800);
  };

  const selectedUnit = MANUFACTURING_UNITS.find((u) => u.id === activePlant)!;

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-24 pb-0">
        {/* HERO STAGE */}
        <section className="relative bg-[#0A0A0A] text-white py-20 md:py-28 overflow-hidden border-b border-[#262626]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none transition-all duration-700"
            style={{ backgroundImage: "url('/images/about.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-4xl space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-xs shadow-md">
                  <Sparkles size={14} /> ESTABLISHED 1999 · ISO 9001:2015
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
                  Engineering Reliability for <span className="text-[#fd0000] font-normal">Wiring Harness Manufacturing.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed max-w-3xl">
                  KD Engineers India Pvt. Ltd. delivers machinery, testing systems, assembly automation, and customized engineering solutions spanning wire preparation, crimping, assembly guidance, and quality validation.
                </p>
              </Reveal>

              {/* Key Live Performance Indicators Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/15">
                {STATS.map((s) => (
                  <div key={s.label} className="space-y-1">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#fd0000]">{s.value}</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-widest font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE NAVIGATION TABBED OVERVIEW */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E7EB] pb-8">
              <div>
                <Overline color="text-[#fd0000]">Company Overview</Overline>
                <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-2 text-[#0A0A0A]">
                  Purpose, Vision &amp; Leadership
                </h2>
              </div>

              {/* Interactive Tabs Pill Switcher */}
              <div className="flex flex-wrap gap-2 bg-[#FAFAFA] border border-[#E5E7EB] p-1.5 rounded-xs">
                {[
                  { id: "about", label: "Legacy & Purpose", icon: <Building2 size={15} /> },
                  { id: "vision", label: "Our Vision", icon: <Compass size={15} /> },
                  { id: "mission", label: "Our Mission", icon: <Target size={15} /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#fd0000] text-white shadow-md"
                        : "text-[#525252] hover:text-[#0A0A0A] hover:bg-[#E5E7EB]/50"
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Tab Card Showcase with Animation */}
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 md:p-12 rounded-xs shadow-xs min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-8 space-y-4 text-base text-[#525252] font-light leading-relaxed">
                      <span className="font-mono text-xs font-bold text-[#fd0000] uppercase tracking-wider block">
                        Leadership &amp; Growth
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A0A0A]">
                        Founded by Mr. Devender Sharma &amp; Led by Mr. Gajesh Sharma, MD
                      </h3>
                      <p>
                        Established in 1999 by Founder Mr. Devender Sharma, KD Engineers India Pvt. Ltd. delivers precision wire processing machinery and turnkey automation for automotive, EV, industrial, and appliance manufacturers worldwide.
                      </p>
                      <p>
                        Formally incorporated as a Private Limited company in 2025 under the leadership of Mr. Gajesh Sharma, Managing Director, KD Engineers combines deep toolmaking depth with digital process control across manufacturing plants in Faridabad and Pune.
                      </p>
                    </div>

                    <div className="md:col-span-4 bg-[#0A0A0A] text-white p-6 rounded-xs space-y-4 border border-white/10">
                      <div className="inline-flex p-3 bg-[#fd0000] text-white rounded-xs">
                        <Award size={24} />
                      </div>
                      <h4 className="font-display text-xl font-medium">Quality &amp; Precision First</h4>
                      <p className="text-xs text-white/70 font-light leading-relaxed">
                        Every applicator blade, die set, and machine frame undergoes strict micro-section analysis and 72-hour endurance run before shipment.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "vision" && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 max-w-4xl"
                  >
                    <span className="font-mono text-xs font-bold text-[#fd0000] uppercase tracking-wider block">
                      Our Vision
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#0A0A0A]">
                      The Most Trusted Engineering Partner
                    </h3>
                    <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
                      &ldquo;To deliver innovative automation technologies, precision machinery and world-class engineering solutions that shape the future of industrial manufacturing.&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === "mission" && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 max-w-4xl"
                  >
                    <span className="font-mono text-xs font-bold text-[#fd0000] uppercase tracking-wider block">
                      Our Mission
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#0A0A0A]">
                      Empower Manufacturers, Everywhere
                    </h3>
                    <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
                      &ldquo;To improve production efficiency, reduce downtime, enhance product quality and create long-term value through continuous innovation and dedicated after-sales support.&rdquo;
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* SCROLL-DRIVEN ANIMATED VERTICAL ZIG-ZAG TIMELINE SECTION (LIGHT BACKGROUND) */}
        <section className="py-14 md:py-20 bg-[#FAFAFA] text-[#0A0A0A] border-y border-[#E5E7EB] relative overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-10 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-xs shadow-sm">
                  <History size={14} /> SCROLL TIMELINE
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0A0A0A]">
                  25+ Years of <span className="font-normal text-[#fd0000]">Industrial Progress</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
                  Scroll down to watch our history and technological breakthroughs unfold in a zig-zag timeline.
                </p>
              </Reveal>
            </div>

            {/* Scroll-Driven Animated Vertical Zig-Zag Timeline */}
            <ScrollTimeline />

          </div>
        </section>

        {/* DUAL MANUFACTURING PLANTS INTERACTIVE EXPLORER */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Pan-India Infrastructure</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-2 text-[#0A0A0A]">
                Two Strategic Manufacturing Plants
              </h2>
              <p className="text-[#525252] font-light text-sm mt-2">
                Operating 90+ skilled professionals from our manufacturing facilities in Faridabad (North India) and Pune (West India).
              </p>
            </div>

            {/* Plant Selector Switcher */}
            <div className="flex gap-4 border-b border-[#E5E7EB] pb-4">
              <button
                onClick={() => setActivePlant("faridabad")}
                className={`font-display text-lg font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                  activePlant === "faridabad"
                    ? "border-[#fd0000] text-[#fd0000]"
                    : "border-transparent text-[#525252] hover:text-[#0A0A0A]"
                }`}
              >
                Unit I · Faridabad (Haryana)
              </button>
              <button
                onClick={() => setActivePlant("pune")}
                className={`font-display text-lg font-semibold pb-2 border-b-2 transition-colors cursor-pointer ${
                  activePlant === "pune"
                    ? "border-[#fd0000] text-[#fd0000]"
                    : "border-transparent text-[#525252] hover:text-[#0A0A0A]"
                }`}
              >
                Unit II · Pune (MIDC Chakan)
              </button>
            </div>

            {/* Plant Details Card */}
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 md:p-12 rounded-xs grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#fd0000] uppercase tracking-wider">
                  <MapPin size={16} /> {selectedUnit.unitName}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A0A0A]">
                  Address &amp; Operational Focus
                </h3>
                <p className="text-sm text-[#525252] font-light leading-relaxed">
                  {selectedUnit.address}
                </p>
                <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-start gap-3">
                    <Wrench size={16} className="text-[#fd0000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-mono uppercase text-[#0A0A0A]">Specialization:</strong>
                      <span className="text-xs text-[#525252]">{selectedUnit.focus}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-[#fd0000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-mono uppercase text-[#0A0A0A]">Team Strength:</strong>
                      <span className="text-xs text-[#525252]">{selectedUnit.workforce}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0A0A0A] text-white p-8 rounded-xs space-y-6">
                <span className="font-mono text-xs text-[#fd0000] font-bold uppercase tracking-wider block">
                  Capacity &amp; Support
                </span>
                <h4 className="font-display text-xl font-medium">
                  {selectedUnit.capacity}
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Equipped with high-precision CNC wire-cut EDM, tool grinders, micro-sectioning labs, and specialized test benches.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#fd0000] hover:underline pt-2"
                >
                  Schedule Plant Visit &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3P PHILOSOPHY INTERACTIVE CARDS */}
        <section className="py-16 md:py-24 bg-[#FAFAFA] border-y border-[#E5E7EB]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Operational Framework</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-2 text-[#0A0A0A]">
                Our 3P Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PHILOSOPHY_3P.map((item, i) => (
                <motion.div
                  key={item.p}
                  whileHover={{ y: -6 }}
                  className="bg-[#ffffff] border border-[#E5E7EB] p-8 rounded-xs space-y-4 hover:border-[#fd0000] transition-colors shadow-xs group"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-[#fd0000] font-bold block">
                    P{i + 1} — {item.p}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#0A0A0A] group-hover:text-[#fd0000] transition-colors">
                    {item.p}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES GRID */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Foundational Principles</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-2 text-[#0A0A0A]">
                Engineering Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((v) => (
                <div key={v.k} className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 rounded-xs space-y-3 hover:border-[#fd0000] transition-colors">
                  <span className="font-mono text-xs text-[#fd0000] font-bold block">{v.k}</span>
                  <h3 className="font-display text-xl font-medium text-[#0A0A0A]">{v.title}</h3>
                  <p className="text-xs text-[#525252] font-light leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION FORM SECTION */}
        <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <Overline color="text-[#fd0000]">Technical Consultation</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tight mt-2">
                Connect with <span className="text-[#fd0000] font-medium">KD ENGINEERS</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
                Schedule a consultation with our application engineers in Faridabad or Pune.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#E5E7EB] p-8 md:p-12 shadow-sm rounded-xs">
              {formStatus && (
                <div className="mb-6 p-4 bg-[#fd0000]/10 border border-[#fd0000] text-[#fd0000] text-xs font-mono font-bold rounded-xs flex items-center gap-2">
                  <CheckCircle2 size={16} /> {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#FAFAFA] border border-[#E5E7EB] px-4 py-3 text-xs font-mono text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      className="w-full bg-[#FAFAFA] border border-[#E5E7EB] px-4 py-3 text-xs font-mono text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    Project &amp; Machine Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify wire types, required production speed, or custom SPM machinery requirement..."
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] px-4 py-3 text-xs font-mono text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A0A0A] text-white py-4 text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#fd0000] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send size={14} /> {isSubmitting ? "Submitting..." : "Submit Engineering Consultation Request"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM VIVID RED CTA BANNER */}
        <section className="py-14 bg-[#fd0000] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-light">
              Ready to Upgrade Your Wiring Harness Line Efficiency?
            </h3>
            <p className="text-white/90 font-light text-xs sm:text-sm max-w-2xl mx-auto">
              Visit our Faridabad or Pune manufacturing facilities or dispatch wire samples for sample processing &amp; crimp testing.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#fd0000] px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#0A0A0A] hover:text-white transition-colors rounded-xs shadow-md"
              >
                Schedule Plant Visit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
