"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { PRODUCTS, OTHER_CAPABILITIES } from "@/lib/data";
import { ArrowRight, Check, SlidersHorizontal, ArrowUpRight, Zap, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Processing", "Crimping", "Testing", "Taping", "Peripherals", "Tooling"];

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="bg-white border-b border-[#E5E7EB] py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl">
              <Reveal>
                <Overline color="text-[#C5221F]">Machine Portfolio</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A0A0A] tracking-tight mt-4">
                  Precision Wire Processing <span className="text-[#C5221F] font-medium">Machinery</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#525252] font-light leading-relaxed">
                  High-speed wire cutting, double-ended stripping, terminal crimping presses, and testing benches engineered for continuous 24/7 industrial manufacturing.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Filter Tabs & Catalog */}
        <section className="py-16 mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Category Selector */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 border-b border-[#E5E7EB] scrollbar-none">
            <span className="text-xs font-mono uppercase tracking-wider text-[#525252] mr-2 flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#C5221F] text-white shadow-sm"
                    : "bg-white text-[#525252] border border-[#E5E7EB] hover:border-[#C5221F] hover:text-[#C5221F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08} className="bg-white border border-[#E5E7EB] flex flex-col group hover:border-[#C5221F] transition-all">
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0A0A0A] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 font-semibold">
                      {product.tag}
                    </span>
                    <span className="bg-[#C5221F] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mb-3 group-hover:text-[#C5221F] transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="mb-4 bg-[#F9FAFB] border border-[#E5E7EB] p-3 text-xs font-mono text-[#C5221F] font-medium">
                    ⚡ {product.specs}
                  </div>

                  <p className="text-sm text-[#525252] font-light leading-relaxed mb-6">
                    {product.body}
                  </p>

                  <div className="mt-auto space-y-2 mb-6 pt-4 border-t border-[#E5E7EB]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#525252] block font-semibold">Key Capabilities:</span>
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-[#525252] font-light">
                        <Check size={14} className="text-[#C5221F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?interest=${encodeURIComponent(product.title)}`}
                    className="w-full bg-[#0A0A0A] text-white py-3.5 text-center text-xs font-mono uppercase tracking-widest font-semibold group-hover:bg-[#C5221F] transition-colors flex items-center justify-center gap-2"
                  >
                    Request Quote for this Machine <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Auxiliary Capabilities */}
          <div className="mt-20 bg-white border border-[#E5E7EB] p-8 md:p-12">
            <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mb-4">Custom Tooling & Auxiliary Equipment</h3>
            <p className="text-sm text-[#525252] font-light mb-6 max-w-2xl">
              We also design and fabricate bespoke crimping dies, feed mechanisms, and custom quality inspection jigs tailored to specialized cable harnesses.
            </p>
            <div className="flex flex-wrap gap-3">
              {OTHER_CAPABILITIES.map((cap) => (
                <span key={cap} className="bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-2 text-xs font-medium text-[#0A0A0A]">
                  ✓ {cap}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#C5221F] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-3xl font-light">Need a Custom Machine Specification?</h3>
            <p className="mt-2 text-white/80 font-light text-sm">Send us your wire samples or engineering blueprints for a free crimp force & throughput evaluation.</p>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#C5221F] px-7 py-3.5 text-sm font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors">
                Request Engineering Consult <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
