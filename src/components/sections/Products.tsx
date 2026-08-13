"use client";

import Link from "next/link";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, OTHER_CAPABILITIES } from "@/lib/data";

export const Products = () => (
  <section id="products" className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#F9FAFB]" data-testid="products">
    <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
      <div className="lg:col-span-8">
        <Reveal><Overline color="text-[#C5221F]">Our Product Portfolio</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02] text-[#0A0A0A]">
            Comprehensive engineering solutions for industrial manufacturing.
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-4">
        <Reveal delay={0.2}>
          <p className="text-[#525252] font-light leading-relaxed mb-4">
            A wide range of advanced machinery designed to improve productivity, reduce manual
            operations and deliver consistent manufacturing quality.
          </p>
          <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#C5221F] hover:underline">
            View All Products Catalog <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </div>

    {/* Bento grid */}
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
      {PRODUCTS.slice(0, 4).map((p, i) => (
        <Reveal
          key={p.id}
          delay={(i % 2) * 0.08}
          className={`group relative bg-[#F9FAFB] overflow-hidden ${i % 3 === 0 ? "lg:col-span-4" : "lg:col-span-2"}`}
          data-testid={`product-${i}`}
        >
          <Link href="/products" className="block relative h-full min-h-[300px] flex flex-col justify-end p-8 md:p-10">
            <img
              src={p.img}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5221F] font-semibold">{p.tag}</span>
              <h3 className="font-display text-2xl md:text-3xl font-medium mt-3 tracking-tight flex items-center gap-2 text-[#0A0A0A]">
                {p.title}
                <ArrowUpRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C5221F]" />
              </h3>
              <p className="text-[#525252] font-light leading-relaxed mt-3 max-w-md text-sm">{p.body}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#525252] self-center mr-2">Also engineered:</span>
      {OTHER_CAPABILITIES.map((c) => (
        <span key={c} className="border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:border-[#C5221F] hover:text-[#C5221F] transition-colors duration-300">
          {c}
        </span>
      ))}
    </Reveal>
  </section>
);
