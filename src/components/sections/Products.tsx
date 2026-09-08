"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight, Flame, CheckCircle2, Zap, Sparkles } from "lucide-react";
import { OTHER_CAPABILITIES } from "@/lib/data";

const HOT_PRODUCTS_LIST = [
  {
    id: "cut-strip",
    badge: "FLAGSHIP LINE",
    category: "Cut & Strip Line",
    title: "Automatic Wire Cut & Strip Machine",
    specs: ["8,000 pcs/hr", "0.1mm² - 16mm²", "Touchscreen HMI"],
    body: "Multi-functional automatic wire processing machine capable of precision cutting, double-ended stripping, and multi-step stripping for automotive looms.",
    img: "/images/hot_cut_strip.jpg",
    features: [
      "Titanium nitride coated tool steel stripping blades",
      "Memory storage for 100+ wire program recipes",
      "Pneumatic jacket stripper for multi-core cables",
    ],
  },
  {
    id: "crimp",
    badge: "SERVO PRECISION",
    category: "Terminal Crimping",
    title: "Terminal Crimping & Servo Applicator Press",
    specs: ["5.0 Ton Force", "Crimp Force Monitor", "Servo Motor"],
    body: "Heavy-duty semi-automatic and automatic crimping presses equipped with micro-adjustable applicators and crimp force waveform monitoring.",
    img: "/images/hot_crimp_press.jpg",
    features: [
      "Ultra-rigid cast iron frame prevents deflection under load",
      "OTP style quick-change applicator clamping system",
      "Real-time crimp height & force waveform analysis",
    ],
  },
  {
    id: "labeling-machine",
    badge: "HIGH DEMAND",
    category: "Cable Identification",
    title: "Automated Wire & Cable Labeling Machine",
    specs: ["3,200 pcs/hr", "OD 1.5mm - 12mm", "Wrap & Flag"],
    body: "High-precision automatic cable labeling machine engineered for wrap-around self-laminating vinyl labels and flag labels on wire harnesses.",
    img: "/images/hot_labeling.jpg",
    features: [
      "Bubble-free smooth wrap-around label application",
      "Compatible with barcode, QR code, and thermal print labels",
      "Microprocessor control with digital batch counter",
    ],
  },
];

export const Products = () => (
  <section id="products" className="py-12 md:py-16 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#ffffff]" data-testid="products">
    {/* Section Header */}
    <div className="grid lg:grid-cols-12 gap-6 items-end mb-10 md:mb-12">
      <div className="lg:col-span-8">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#fd0000] font-mono text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Flame size={13} className="animate-pulse text-[#fd0000]" />
            OUR HOT PRODUCTS & FEATURED MACHINERY
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-tight">
            Top-Selling & High-Demand Wire Processing Machines
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-4">
        <Reveal delay={0.2}>
          <p className="text-[#525252] font-light leading-relaxed mb-4 text-xs sm:text-sm">
            Engineered for high-volume automotive, EV, appliance, and electronics manufacturing with zero-defect quality standards.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A0A0A] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded hover:bg-[#fd0000] transition-colors duration-300 shadow-sm group"
          >
            View All Products Catalog
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </div>

    {/* Compact 3-Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {HOT_PRODUCTS_LIST.map((p, i) => (
        <Reveal
          key={p.id}
          delay={i * 0.08}
          className="group flex flex-col bg-white rounded-lg border border-gray-200 hover:border-red-400/60 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
          data-testid={`hot-product-${i}`}
        >
          {/* Compact Image Container */}
          <div className="relative h-44 sm:h-48 w-full bg-slate-50 overflow-hidden border-b border-gray-100 flex items-center justify-center p-3">
            <img
              src={p.img}
              alt={p.title}
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Hot Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-0.5 bg-[#fd0000] text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded shadow-xs">
              <Flame size={11} className="fill-white" />
              {p.badge}
            </div>
          </div>

          {/* Compact Content */}
          <div className="p-5 flex flex-col flex-grow justify-between bg-white">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#fd0000] font-bold">
                {p.category}
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold mt-1 text-[#0A0A0A] leading-snug group-hover:text-[#fd0000] transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-slate-600 font-sans text-xs leading-relaxed mt-2 line-clamp-2">
                {p.body}
              </p>

              {/* Specs Pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-700 rounded"
                  >
                    <Zap size={10} className="text-[#fd0000]" />
                    {spec}
                  </span>
                ))}
              </div>

              {/* Feature List */}
              <ul className="mt-3.5 space-y-1 border-t border-slate-100 pt-3">
                {p.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <Link
                href="/contact"
                className="flex-1 text-center py-2 px-3 bg-[#fd0000] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded hover:bg-red-700 transition-colors shadow-xs"
              >
                Get Quote
              </Link>
              <Link
                href="/products"
                className="py-2 px-3 border border-slate-300 hover:border-[#fd0000] text-slate-800 hover:text-[#fd0000] text-[11px] font-mono font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1"
              >
                Specs <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Also Engineered capabilities bar */}
    <div className="mt-12 pt-8 border-t border-gray-200">
      <Reveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-700 font-bold shrink-0">
            <Sparkles size={14} className="text-[#fd0000]" />
            ALSO ENGINEERED:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {OTHER_CAPABILITIES.map((c) => (
              <Link
                key={c}
                href="/solutions"
                className="border border-slate-200 bg-slate-50 hover:bg-white px-3 py-1 text-[11px] font-semibold text-slate-800 hover:border-[#fd0000] hover:text-[#fd0000] transition-colors rounded shadow-2xs"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);


