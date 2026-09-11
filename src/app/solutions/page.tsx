"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/data";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Cpu,
  Wrench,
  FileText,
  Factory,
  PhoneCall,
  Send,
  Layers,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Settings,
  Award,
  Zap,
} from "lucide-react";

// Clean Solution Categories
const SOLUTION_CATEGORIES = [
  {
    id: "testing",
    num: "01",
    title: "Testing & Quality Assurance Equipment",
    subtitle: "Complete electrical continuity, insulation, & mechanical verification.",
    description:
      "Precision testing benches, high-voltage Hi-Pot stations, terminal retention verification, pneumatic leak modules, and automated cross-section analyzers designed for zero electrical or mechanical failures.",
    icon: ShieldCheck,
    capabilities: [
      "Millisecond multi-channel continuity & short-circuit detection",
      "High-voltage Hi-Pot insulation breakdown verification (DC 1500V)",
      "Tactile terminal retention & secondary lock (TPA) checking",
      "Automated barcode label printing & test record export",
    ],
    equipment: [
      { name: "Wiring Harness Testing Bench", href: "/products/wiring-harness-testing-bench" },
      { name: "High Voltage Testing Bench", href: "/products/high-voltage-testing-bench" },
      { name: "Fuse Box Testing Module", href: "/products/fuse-box-testing-module" },
      { name: "Pushback Module", href: "/products/pushback-testing-module" },
      { name: "Pneumatic Testing Module", href: "/products/pneumatic-testing-module" },
      { name: "Vision Camera Inspection System", href: "/products/vision-camera-inspection-system" },
      { name: "Terminal Cross Section Analyzer (KDE-S200)", href: "/products/kde-s200" },
      { name: "Tensile Pull Tester — KDE-930CG", href: "/products/kde-930cg-tensile-pull-tester" },
    ],
  },
  {
    id: "assembly",
    num: "02",
    title: "Harness Assembly Aids & Guided Workstations",
    tagline: "Error-proof pick-to-light routing & digitized boards.",
    description:
      "Intelligent workstations, Digitized Wiring Systems (DWS), multicolor LED routing boards, motorized tape wrapping units, and modular conveyors that eliminate human routing errors.",
    icon: Cpu,
    capabilities: [
      "CAD schematic import & real-time pick-to-light guidance",
      "Multicolor LED routing paths illuminate active wire channels",
      "Synchronized pallet conveyors for smooth line flow",
      "Ergonomic pneumatic height and angle tilt adjustment",
    ],
    equipment: [
      { name: "Digitization Assembly Wiring System (DWS)", href: "/products/digitization-assembly-wiring-system" },
      { name: "Assembly Board with LED Guided", href: "/products/assembly-board-led-guided" },
      { name: "Assembly Conveyor", href: "/products/assembly-conveyor" },
    ],
  },
  {
    id: "crimping",
    num: "03",
    title: "Terminal Crimping & Seal Insertion Solutions",
    subtitle: "Servo-driven presses with real-time Crimp Force Monitoring.",
    description:
      "Automatic dual-ended cutting, stripping, seal loading, and servo crimping centers. Paired with custom SKD11 applicators and inline Crimp Force Analyzers (CFA).",
    icon: Wrench,
    capabilities: [
      "Dual 20kN servo crimp presses with inline CFA waveform monitoring",
      "Automatic vibratory bowl seal feeding with optical seating check",
      "Custom SKD11 Japanese tool steel crimp dies & applicators",
      "Terminal housing circuit insertion with tactile retention audit",
    ],
    equipment: [
      { name: "5 Wire Fully Auto One Head Crimp One Head Tin Machine (KDE-JC5505)", href: "/products/kde-jc5505" },
      { name: "Servo Large Terminal Crimping Machine (KDE-20TS)", href: "/products/kde-20ts" },
      { name: "Automatic Wire Crimping and Tinning Machine (KDE-8050)", href: "/products/kde-8050" },
      { name: "4TS Terminal Crimping Machine", href: "/products/4ts" },
      { name: "2T European Type Terminal Crimping Machine (KDE-2TS)", href: "/products/kde-2ts" },
      { name: "8TS Terminal Crimping Machine (KDE-8TS)", href: "/products/kde-8ts" },
      { name: "KDE-3.0 Fully Automatic Cut, Strip, Crimp & Seal Machine", href: "/products/kde-3-0" },
      { name: "Fully Automatic Circuit Insertion Machine", href: "/products/automatic-circuit-insertion-machine" },
      { name: "Wire Seal Inserting Machine", href: "/products/wire-seal-inserting-machine" },
    ],
  },
  {
    id: "processing",
    num: "04",
    title: "Wiring Harness Processing Machines",
    subtitle: "High-speed wire cutting, twisting, tinning & EV cable stripping.",
    description:
      "Precision wire cutting and stripping machinery, 5-wire twisting & tinning stations, rotary strippers for EV high-voltage cables, and large 300mm² cable cutters.",
    icon: FileText,
    capabilities: [
      "10,000 Pcs/Hr cutting & double-ended stripping block",
      "5-line synchronized strand twisting with PID temperature dip tinning",
      "4-blade rotary stripper for multi-layer EV high-voltage cables",
      "Coaxial & triaxial precision multi-layer stripping",
    ],
    equipment: [
      { name: "Single Wire Strip Crimp and Seal Insert Machine (KDE-1-SCS)", href: "/products/kde-1-scs" },
      { name: "Hand Taping Machine (KDE-303B)", href: "/products/kde-303b" },
      { name: "Wire Cutting Stripping Machine (KDE-745)", href: "/products/kde-745" },
      { name: "Coaxial Cable and Sheathed Cable Stripping Machine (KDE-1105)", href: "/products/kde-1105" },
      { name: "Automatic 5 Wire Cut, Strip & Tin Machine (KDE-5508T)", href: "/products/kde-5508t" },
      { name: "Coaxial Cable Stripping Machine (KDE-8608)", href: "/products/kde-8608" },
      { name: "Multi-Core Cut And Strip Machine (KDE-05B+)", href: "/products/kde-05b-plus" },
      { name: "Ultrasonic Welding Machine (KDE-9A)", href: "/products/kde-9a" },
      { name: "Wire Cutting Stripping Machine (KDE-900)", href: "/products/kde-900" },
      { name: "Wire Tape Spot Winding Machine (KDE-5760)", href: "/products/kde-5760" },
      { name: "Fully Automatic Wire Twisting Machine", href: "/products/automatic-wire-twisting-machine" },
      { name: "5-Wire Cut, Strip, Twist & Tin Machine", href: "/products/5-wire-twisting-tinning-machine" },
      { name: "KDE-G5001S High-Voltage Rotary Stripping Machine", href: "/products/kde-g5001s" },
      { name: "KDE-9850 Coaxial Cable Stripping Machine", href: "/products/kde-9850" },
      { name: "KDE-300 SQMM Heavy Cable Cutting & Stripping Machine", href: "/products/kde-300-sqmm" },
      { name: "KDE-100A Automatic Heating Sleeve Cutter", href: "/products/kde-100a" },
    ],
  },
  {
    id: "turnkey",
    num: "05",
    title: "Turnkey Line Engineering & Custom Tooling",
    subtitle: "End-to-end plant layout, line balancing, & custom kinematics.",
    description:
      "Bespoke manufacturing lines engineered around your floor space, wire specifications, and volume targets. Includes pre-feeders, custom applicators, and complete line balancing.",
    icon: Factory,
    capabilities: [
      "Complete production line layout & line balancing consultation",
      "Custom crimp applicators, pre-feeder reels & stripping jigs",
      "72-hour continuous endurance stress test prior to plant delivery",
      "On-site installation, operator safety training & AMC maintenance",
    ],
    equipment: [
      { name: "Custom Crimping Applicators & Tooling Dies", href: "/products" },
      { name: "Automated Wire Pre-feeders & Accumulator Reels", href: "/products" },
      { name: "Pneumatic Cable Strippers & Special Fixtures", href: "/products" },
    ],
  },
];

// Simple Turnkey Workflow
const WORKFLOW_STEPS = [
  { step: "01", title: "Wire Cut & Strip", desc: "High-speed precision cutting, stripping, and strand twisting." },
  { step: "02", title: "Seal & Crimp", desc: "Automatic rubber seal loading & 5-ton servo crimping with CFA." },
  { step: "03", title: "Guided Assembly", desc: "Pick-to-light LED routing and digitized DWS workstations." },
  { step: "04", title: "Quality & HV Audit", desc: "100% electrical continuity, insulation Hi-Pot, and vision check." },
  { step: "05", title: "Label & Package", desc: "Barcode label generation, serial logging, and batch packing." },
];

// Production Lifecycle Support
const SUPPORT_SERVICES = [
  {
    title: "Installation & Commissioning",
    desc: "On-site setup, trial runs, applicator calibration, and production line validation.",
    icon: Settings,
  },
  {
    title: "Pan-India Service & AMC",
    desc: "Preventive maintenance contracts, field engineer support, and express spare parts supply.",
    icon: Wrench,
  },
  {
    title: "Custom Machine Kinematics",
    desc: "Machinery adapted to client-specific wire gauges, terminal styles, and plant constraints.",
    icon: Sliders,
  },
  {
    title: "Technical Consultation",
    desc: "Process consulting, machine capacity selection, and production layout planning.",
    icon: Award,
  },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("testing");
  const [selectedSolution, setSelectedSolution] = useState("Testing & Quality Assurance Equipment");
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const activeCategory = SOLUTION_CATEGORIES.find((cat) => cat.id === activeTab) || SOLUTION_CATEGORIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your solution consultation request has been received. Our team will contact you shortly.");
    setTimeout(() => setFormStatus(null), 6000);
  };

  const handleSelectSolution = (title: string) => {
    setSelectedSolution(title);
    const el = document.getElementById("quote-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-24 pb-0">
        {/* ELEGANT LIGHT HERO SECTION */}
        <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <Overline color="text-[#0A0A0A]">Engineering Solutions</Overline>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0A0A0A] leading-[1.05]">
                  Process-oriented engineering for <span className="underline decoration-[#E5E7EB] underline-offset-8">wiring harness lines.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-[#525252] font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                  KD Engineers provides integrated machinery solutions connecting every stage of wiring harness production — from wire preparation and crimping to assembly guidance, continuity, and high-voltage testing.
                </p>
              </Reveal>

              {/* Minimalist Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E5E7EB] mt-8">
                <div>
                  <span className="font-mono text-2xl font-light text-[#0A0A0A]">25+ Years</span>
                  <span className="block text-xs font-mono text-[#737373] mt-0.5">Industry Expertise</span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-light text-[#0A0A0A]">1,000+</span>
                  <span className="block text-xs font-mono text-[#737373] mt-0.5">Machines Deployed</span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-light text-[#0A0A0A]">±0.001mm</span>
                  <span className="block text-xs font-mono text-[#737373] mt-0.5">Feed Precision</span>
                </div>
                <div>
                  <span className="font-mono text-2xl font-light text-[#0A0A0A]">100%</span>
                  <span className="block text-xs font-mono text-[#737373] mt-0.5">Quality Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE 5-STEP PROCESS FLOW */}
        <section className="py-16 bg-[#F9FAFB] border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block mb-1">Process Flow</span>
                <h2 className="font-display text-2xl sm:text-3xl font-light text-[#0A0A0A]">
                  End-to-End Production Workflow
                </h2>
              </div>
              <p className="text-xs text-[#525252] max-w-md font-light leading-relaxed">
                Seamlessly linking wire preparation to terminal crimping, guided sub-assembly, electrical validation, and final packaging.
              </p>
            </div>

            <div className="grid sm:grid-cols-5 gap-4 pt-4 border-t border-[#E5E7EB]">
              {WORKFLOW_STEPS.map((wf, i) => (
                <div key={wf.step} className="bg-white border border-[#E5E7EB] p-5 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-semibold text-[#737373] block">{wf.step}</span>
                  <h3 className="font-display text-base font-medium text-[#0A0A0A]">{wf.title}</h3>
                  <p className="text-xs text-[#525252] font-light leading-relaxed">{wf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLEAN SOLUTION CATEGORIES EXPLORER */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block">Solution Categories</span>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-[#0A0A0A]">
                Comprehensive capabilities across the line.
              </h2>
            </div>

            {/* Clean Minimalist Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E7EB]">
              {SOLUTION_CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-5 py-2.5 text-xs font-mono font-medium transition-all shrink-0 rounded-xs cursor-pointer border ${
                      isActive
                        ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                        : "bg-white text-[#525252] border-[#E5E7EB] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                    }`}
                  >
                    <span>{cat.num}. </span>
                    <span>{cat.title.split(" ")[0]} {cat.title.split(" ")[1]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display Panel */}
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] p-8 sm:p-12 rounded-xs shadow-2xs grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#737373] uppercase tracking-wider font-semibold block mb-2">
                    Category {activeCategory.num}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-[#0A0A0A]">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs font-mono text-[#525252] mt-1">
                    {activeCategory.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#525252] font-light leading-relaxed">
                  {activeCategory.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                  <span className="font-mono text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider block">
                    Key Technological Capabilities:
                  </span>
                  <div className="space-y-2">
                    {activeCategory.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 text-xs text-[#525252] font-light">
                        <Check size={14} className="text-[#0A0A0A] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleSelectSolution(activeCategory.title)}
                    className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 text-xs font-mono uppercase tracking-wider hover:bg-[#262626] transition-colors rounded-xs cursor-pointer"
                  >
                    Request Technical Consultation <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: Featured Equipment Links */}
              <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E7EB] p-6 rounded-xs space-y-4">
                <span className="font-mono text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider block pb-2 border-b border-[#E5E7EB]">
                  Featured Equipment in Portfolio:
                </span>
                <div className="space-y-2">
                  {activeCategory.equipment.map((eq) => (
                    <Link
                      key={eq.name}
                      href={eq.href}
                      className="group flex items-center justify-between p-2.5 bg-white border border-[#E5E7EB] hover:border-[#0A0A0A] rounded-xs transition-colors"
                    >
                      <span className="text-xs text-[#374151] group-hover:text-[#0A0A0A] font-medium truncate pr-2">
                        {eq.name}
                      </span>
                      <ArrowUpRight size={14} className="text-[#9CA3AF] group-hover:text-[#0A0A0A] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALL 5 CATEGORIES EXPANDED GRID */}
        <section className="py-16 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block mb-1">Full Portfolio Overview</span>
              <h2 className="font-display text-3xl font-light text-[#0A0A0A]">
                Engineering Equipment by Category
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTION_CATEGORIES.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className="bg-white border border-[#E5E7EB] p-8 rounded-xs flex flex-col justify-between space-y-6 hover:border-[#0A0A0A] transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-[#737373]">{cat.num}</span>
                        <IconComp size={20} className="text-[#0A0A0A]" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium text-[#0A0A0A]">{cat.title}</h3>
                        <p className="text-xs text-[#737373] font-mono mt-1">{cat.subtitle}</p>
                      </div>
                      <p className="text-xs text-[#525252] font-light leading-relaxed">{cat.description}</p>
                    </div>

                    <button
                      onClick={() => handleSelectSolution(cat.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0A0A0A] font-semibold hover:underline pt-2 border-t border-[#E5E7EB] w-full cursor-pointer justify-between"
                    >
                      <span>Inquire Category</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LIFECYCLE SUPPORT SERVICES */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#737373] uppercase tracking-wider block mb-1">Production Lifecycle</span>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A]">
                Comprehensive Technical Support
              </h2>
              <p className="text-xs text-[#525252] font-light mt-2 leading-relaxed">
                Dedicated engineering support from machine selection and line balancing through commissioning, operator training, and maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUPPORT_SERVICES.map((s) => {
                const IconComp = s.icon;
                return (
                  <div key={s.title} className="bg-white border border-[#E5E7EB] p-6 rounded-xs space-y-3">
                    <IconComp size={20} className="text-[#0A0A0A]" />
                    <h3 className="font-display text-lg font-medium text-[#0A0A0A]">{s.title}</h3>
                    <p className="text-xs text-[#525252] font-light leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLEAN EMBEDDED INQUIRY FORM */}
        <section id="quote-section" className="py-16 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
          <div className="mx-auto max-w-[1100px] px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
              <span className="font-mono text-xs text-[#737373] uppercase tracking-wider">Technical Consultation</span>
              <h2 className="font-display text-3xl font-light text-[#0A0A0A]">
                Request a Custom Solution Blueprint
              </h2>
              <p className="text-xs text-[#525252] font-light leading-relaxed">
                Our application engineers are available to review your wire specifications and plant floor layout.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 sm:p-10 rounded-xs shadow-2xs">
              {formStatus && (
                <div className="mb-6 p-4 bg-[#F3F4F6] border border-[#E5E7EB] text-[#0A0A0A] text-xs font-mono font-medium rounded-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0A0A0A]" /> {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                    Solution Category / Equipment Interest <span className="text-[#737373]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors rounded-xs font-mono"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                      Full Name <span className="text-[#737373]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                      Corporate Email <span className="text-[#737373]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                      Phone Number <span className="text-[#737373]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98100 00000"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                      Company / Facility Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Enterprise Name"
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-medium mb-1">
                    Wire Specifications & Production Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify wire gauge (mm²), target volume/hr, terminal type, or special requirements..."
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#0A0A0A] focus:bg-white outline-none transition-colors resize-none rounded-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] text-white py-3.5 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#262626] transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-xs"
                >
                  <Send size={14} /> Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* MINIMALIST BOTTOM CTA */}
        <section className="py-16 bg-[#ffffff] border-t border-[#E5E7EB] text-center">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-light text-[#0A0A0A]">
              Require an On-Site Machinery Demonstration?
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] font-light max-w-xl mx-auto">
              Visit our Faridabad or Pune facility or dispatch your wire samples for automated crimp force & speed trial evaluation.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-7 py-3 text-xs font-mono uppercase tracking-wider hover:bg-[#262626] transition-colors rounded-xs"
              >
                Schedule Facility Visit <PhoneCall size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
