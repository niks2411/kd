"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import Marquee from "react-fast-marquee";
import {
  PRODUCTS,
  PRODUCT_DROPDOWN_MENU,
  FEATURED_HERO_PRODUCTS,
  TECHNICAL_NEWS,
  OTHER_CAPABILITIES,
  CONTACT,
} from "@/lib/data";
import {
  ArrowRight,
  Check,
  ArrowUpRight,
  ChevronRight,
  Search,
  CheckCircle2,
  Send,
  Layers,
  Newspaper,
  Sparkles,
  Zap,
  Gauge,
  ShieldCheck,
  PhoneCall,
  SlidersHorizontal,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("Automatic Wire Cutting & Stripping Machine");
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Extract all categories from dropdown menu list
  const allCategories = [
    "All",
    ...PRODUCT_DROPDOWN_MENU.col1.map((c) => c.label),
    ...PRODUCT_DROPDOWN_MENU.col2.map((c) => c.label),
  ];

  // Synchronize category selection from URL param if present
  useEffect(() => {
    if (catParam) {
      const matchedCat = allCategories.find(
        (c) =>
          c.toLowerCase().replace(/[^a-z0-9]/g, "") === catParam.toLowerCase().replace(/[^a-z0-9]/g, "") ||
          catParam.toLowerCase().includes(c.toLowerCase().replace(/[^a-z0-9]/g, ""))
      );
      if (matchedCat) {
        setActiveCategory(matchedCat);
      } else {
        // Find matching product id
        const matchedProd = PRODUCTS.find((p) => p.id === catParam.toLowerCase());
        if (matchedProd) {
          setActiveCategory(matchedProd.category);
        }
      }
    }
  }, [catParam]);

  // Find personalized product object for the active category
  const currentProduct =
    activeCategory !== "All"
      ? PRODUCTS.find(
          (p) =>
            p.category.toLowerCase().replace(/[^a-z0-9]/g, "") === activeCategory.toLowerCase().replace(/[^a-z0-9]/g, "") ||
            p.id === activeCategory.toLowerCase() ||
            p.title.toLowerCase().includes(activeCategory.toLowerCase())
        ) || PRODUCTS[0]
      : null;

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === "All" && !searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const cat = activeCategory.toLowerCase();

    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(query) ||
      product.specs.toLowerCase().includes(query) ||
      product.body.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "All" ||
      product.category.toLowerCase().includes(cat) ||
      product.title.toLowerCase().includes(cat) ||
      product.tag.toLowerCase().includes(cat) ||
      product.body.toLowerCase().includes(cat) ||
      cat.includes(product.category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const displayedProducts = filteredProducts.length > 0 ? filteredProducts : PRODUCTS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your quote request has been submitted to KD Engineers.");
    setTimeout(() => setFormStatus(null), 6000);
  };

  return (
    <main className="pt-20 pb-0">
      {/* DYNAMICALLY PERSONALIZED HIGH-IMPACT HERO BANNER */}
      <section className="relative bg-[#0A0A0A] text-white py-14 md:py-20 overflow-hidden border-b border-[#262626]">
        {/* Prominently Visible Product Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url(${currentProduct ? currentProduct.img : '/images/hero.png'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content - Personalized when category selected */}
            <div className="lg:col-span-8 space-y-6">
              <Reveal key={currentProduct ? currentProduct.id : "all-hero"}>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md">
                  <Sparkles size={14} /> {currentProduct ? `${currentProduct.category} Line — ${currentProduct.tag}` : "Engineered for Extreme Precision"}
                </div>
              </Reveal>

              <Reveal delay={0.1} key={currentProduct ? `${currentProduct.id}-title` : "all-title"}>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                  {currentProduct ? currentProduct.title : <>Wire Processing & Automation <span className="text-[#fd0000] font-normal">Catalog</span></>}
                </h1>
              </Reveal>

              <Reveal delay={0.2} key={currentProduct ? `${currentProduct.id}-body` : "all-body"}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed max-w-2xl">
                  {currentProduct ? currentProduct.body : "High-speed cutting, double-ended stripping, terminal crimping presses, and automated test benches engineered for continuous 24/7 manufacturing."}
                </p>
              </Reveal>

              {/* Dynamic Specs Bar for active product OR General Metrics Bar */}
              {currentProduct ? (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-l-4 border-[#fd0000] border border-white/20 p-3 text-xs sm:text-sm font-mono text-[#fd0000] font-medium shadow-2xs">
                  <Zap size={16} className="shrink-0 text-[#fd0000]" /> {currentProduct.specs}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-white">0.001mm</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">Feed Accuracy</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-[#fd0000]">8,500</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">Pcs / Hour</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-white">5.0 Ton</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">Crimp Press Force</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-white">500+</span>
                    <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">Machines Deployed</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Card Preview - Personalized for active product */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-[#111827]/90 backdrop-blur-md border border-white/20 p-5 rounded-sm shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#fd0000] font-semibold">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> {currentProduct ? `${currentProduct.category} Spotlight` : "Flagship Machine"}</span>
                  <span className="bg-[#fd0000]/20 text-[#fd0000] px-2 py-0.5 rounded-xs">{currentProduct ? currentProduct.tag : "KD-9500"}</span>
                </div>
                <div className="aspect-[16/10] bg-black overflow-hidden rounded-xs border border-white/10">
                  <img src={currentProduct ? currentProduct.img : PRODUCTS[0].img} alt={currentProduct ? currentProduct.title : PRODUCTS[0].title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white truncate">{currentProduct ? currentProduct.title : PRODUCTS[0].title}</h3>
                  <p className="text-xs text-[#9CA3AF] font-mono mt-1 truncate">⚡ {currentProduct ? currentProduct.specs : PRODUCTS[0].specs}</p>
                </div>
                <button
                  onClick={() => {
                    if (currentProduct) setSelectedProduct(currentProduct.title);
                    const el = document.getElementById("quote-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-[#fd0000] text-white py-2.5 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-1.5 rounded-xs cursor-pointer"
                >
                  Request Quote for {currentProduct ? currentProduct.category : "Machine"} <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* AUTO-SCROLLING CATEGORY QUICK FILTER MARQUEE */}
          <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white font-bold shrink-0 bg-[#0A0A0A] pr-3 z-10">
              <SlidersHorizontal size={14} className="text-[#fd0000]" />
              <span>QUICK FILTER:</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <Marquee speed={35} gradient={false} pauseOnHover={true} autoFill>
                {allCategories.map((cat, i) => {
                  const isSelected = activeCategory === cat;
                  return (
                    <button
                      key={`${cat}-${i}`}
                      onClick={() => setActiveCategory(cat)}
                      className={`mx-1.5 px-4 py-1.5 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? "bg-[#fd0000] text-white border border-[#fd0000] shadow-lg scale-105"
                          : "bg-[#171717] text-[#D1D5DB] border border-white/20 hover:border-[#fd0000] hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED PERSONALIZED PRODUCT SPOTLIGHT BANNER (WHEN CATEGORY IS SELECTED) */}
      {currentProduct && activeCategory !== "All" && (
        <section className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 rounded-sm shadow-sm">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                  <div className="aspect-[16/10] bg-[#F9FAFB] border border-[#E5E7EB] overflow-hidden rounded-xs">
                    <img
                      src={currentProduct.img}
                      alt={currentProduct.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#fd0000] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs">
                      {currentProduct.category} Line
                    </span>
                    <span className="bg-[#0A0A0A] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 font-semibold rounded-xs">
                      {currentProduct.tag}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A0A0A]">
                    {currentProduct.title}
                  </h2>

                  <div className="inline-flex items-center gap-2 bg-[#F9FAFB] border-l-3 border-[#fd0000] px-3 py-1.5 text-xs font-mono text-[#fd0000] font-semibold">
                    ⚡ {currentProduct.specs}
                  </div>

                  <p className="text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
                    {currentProduct.body}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 pt-2">
                    {currentProduct.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-1.5 text-xs text-[#374151]">
                        <Check size={14} className="text-[#fd0000] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setSelectedProduct(currentProduct.title);
                        const el = document.getElementById("quote-section");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-[#fd0000] text-white px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#0A0A0A] transition-colors rounded-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      Request Quote for {currentProduct.category} <ArrowUpRight size={14} />
                    </button>
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="bg-[#F3F4F6] text-[#0A0A0A] px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#E5E7EB] transition-colors rounded-xs cursor-pointer"
                    >
                      View All Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WORKSPACE: STICKY LEFT SIDEBAR + PRODUCT CATALOG GRID */}
      <section className="py-14 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-6 sticky top-28">
            {/* Product Category Card */}
            <div className="bg-[#ffffff] border border-[#E5E7EB] rounded-sm overflow-hidden shadow-2xs">
              <div className="bg-[#0A0A0A] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-display text-sm font-semibold">
                  <Layers size={16} className="text-[#fd0000]" /> Product Categories
                </div>
                <span className="bg-[#fd0000] text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                  20 Lines
                </span>
              </div>

              <div className="p-2 divide-y divide-[#F3F4F6] max-h-[500px] overflow-y-auto custom-scrollbar">
                {allCategories.map((cat) => {
                  const isSelected = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-2.5 text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? "bg-[#fd0000]/10 text-[#fd0000] font-semibold border-l-4 border-[#fd0000]"
                          : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#fd0000]"
                      }`}
                    >
                      <span className="truncate pr-2">{cat}</span>
                      <ChevronRight
                        size={14}
                        className={`shrink-0 transition-transform ${
                          isSelected ? "text-[#fd0000] translate-x-1" : "text-[#9CA3AF] group-hover:text-[#fd0000]"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Latest Technical News Card */}
            <div className="bg-[#ffffff] border border-[#E5E7EB] p-4 rounded-sm shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#0A0A0A] mb-3 pb-2 border-b border-[#E5E7EB]">
                <Newspaper size={16} className="text-[#fd0000]" /> Technical Updates
              </div>
              <div className="space-y-2.5">
                {TECHNICAL_NEWS.map((news) => (
                  <Link
                    key={news.title}
                    href={news.href}
                    className="block group p-1.5 hover:bg-[#F9FAFB] transition-colors rounded-xs"
                  >
                    <span className="text-[9px] font-mono text-[#fd0000] font-semibold block">{news.date}</span>
                    <p className="text-[11px] text-[#374151] group-hover:text-[#fd0000] transition-colors line-clamp-2 leading-snug mt-0.5">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Support Contact Widget */}
            <div className="bg-[#0A0A0A] text-white p-5 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold">
                <PhoneCall size={14} /> Technical Support
              </div>
              <h4 className="text-sm font-semibold">Need Assistance Choosing a Machine?</h4>
              <p className="text-xs text-[#9CA3AF] font-light">Speak directly with our Gurugram engineering team for custom wire specs.</p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fd0000] font-semibold hover:underline"
              >
                Call: {CONTACT.phone} <ArrowUpRight size={13} />
              </a>
            </div>
          </aside>

          {/* RIGHT MAIN CATALOG GRID */}
          <main className="lg:col-span-9 space-y-6">
            {/* Search & Filter Header Bar */}
            <div className="bg-[#ffffff] border border-[#E5E7EB] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm">
              <div className="relative w-full sm:w-80">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search machines or specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] pl-9 pr-3 py-1.5 text-xs text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#525252] w-full sm:w-auto justify-between sm:justify-end">
                <span>
                  Showing <strong className="text-[#0A0A0A]">{displayedProducts.length}</strong> machines
                </span>
                {activeCategory !== "All" && (
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="text-xs font-mono text-[#fd0000] hover:underline ml-3 cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Products Cards Grid - Sleek & Compact Design */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedProducts.map((product, i) => (
                <Reveal
                  key={product.id}
                  delay={i * 0.03}
                  className="bg-white border border-[#E5E7EB] flex flex-col group hover:border-[#fd0000] transition-all duration-300 rounded-sm shadow-2xs hover:shadow-xs p-3.5"
                >
                  {/* Compact Image Container */}
                  <div className="relative aspect-[16/10] bg-[#F9FAFB] overflow-hidden rounded-xs border border-[#E5E7EB] mb-3">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      <span className="bg-[#0A0A0A] text-white text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 font-semibold">
                        {product.tag}
                      </span>
                      <span className="bg-[#fd0000] text-white text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Compact Card Content */}
                  <div className="flex flex-col flex-grow">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-display text-sm font-semibold text-[#0A0A0A] mb-1.5 group-hover:text-[#fd0000] transition-colors leading-snug line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>

                    <div className="mb-2 bg-[#F9FAFB] border-l-2 border-[#fd0000] px-2 py-1 text-[10px] font-mono text-[#fd0000] font-medium leading-tight truncate">
                      ⚡ {product.specs}
                    </div>

                    <p className="text-[11px] text-[#525252] font-light leading-relaxed mb-3 line-clamp-2">
                      {product.body}
                    </p>

                    {/* Compact Action Buttons Bar */}
                    <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-[#E5E7EB]">
                      <Link
                        href={`/products/${product.id}`}
                        className="bg-[#F3F4F6] text-[#0A0A0A] py-1.5 text-center text-[10px] font-mono uppercase tracking-wider font-semibold hover:bg-[#E5E7EB] transition-colors rounded-xs flex items-center justify-center"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedProduct(product.title);
                          const el = document.getElementById("quote-section");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-[#0A0A0A] text-white py-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold group-hover:bg-[#fd0000] transition-colors flex items-center justify-center gap-1 cursor-pointer rounded-xs"
                      >
                        Quote <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* AUXILIARY TOOLING & CAPABILITIES BANNER */}
            <div className="bg-[#ffffff] border border-[#E5E7EB] p-6 rounded-sm">
              <div className="flex items-center gap-2 text-[#fd0000] text-xs font-mono uppercase tracking-wider font-bold mb-2">
                <CheckCircle2 size={15} /> Custom Engineering Fixtures
              </div>
              <h3 className="font-display text-lg font-semibold text-[#0A0A0A] mb-2">
                Custom Crimping Applicators & Peripheral Tooling
              </h3>
              <p className="text-xs text-[#525252] leading-relaxed mb-4">
                We design and manufacture bespoke crimp dies, motorized wire pre-feeders, pneumatic cable strippers, and custom testing jigs tailored to your exact wire harness specifications.
              </p>
              <div className="flex flex-wrap gap-2">
                {OTHER_CAPABILITIES.map((cap) => (
                  <span
                    key={cap}
                    className="bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#374151]"
                  >
                    ✓ {cap}
                  </span>
                ))}
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* EMBEDDED INQUIRY SECTION ("Talk to KD ENGINEERS") */}
      <section id="quote-section" className="py-14 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <Overline color="text-[#fd0000]">Direct Technical Consultation</Overline>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0A0A0A] tracking-tight mt-2">
              Talk to <span className="text-[#fd0000] font-medium">KD ENGINEERS INDIA</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
              Send your wire specifications or request a custom machinery quotation. Our engineering specialists respond within 24 hours.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-2xs rounded-sm">
            {formStatus && (
              <div className="mb-6 p-3 bg-[#fd0000]/10 border border-[#fd0000] text-[#fd0000] text-xs font-semibold rounded-xs">
                {formStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                  Product / Machine of Interest <span className="text-[#fd0000]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                />
              </div>

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

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Phone Number <span className="text-[#fd0000]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98100 00000"
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Manufacturing Enterprise"
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
                  placeholder="Specify wire gauge (mm²), production volume/hr, terminal type, or special automation requirements..."
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#fd0000] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs rounded-xs"
              >
                <Send size={14} /> Submit Quotation Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-12 bg-[#fd0000] text-white text-center">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <h3 className="font-display text-2xl font-light">Require Custom Machinery Blueprint & Demo?</h3>
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
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />
      <Suspense fallback={<div className="pt-32 text-center text-sm font-mono">Loading machinery catalog...</div>}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
