"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  TECHNICAL_NEWS,
  OTHER_CAPABILITIES,
  CONTACT,
  ProductCategoryInfo,
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
  ShieldCheck,
  PhoneCall,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const catParam = searchParams.get("cat");

  const [activeCategoryKey, setActiveCategoryKey] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("KDE-3.0 Fully Automatic Cutting, Stripping, Crimping & Seal Insertion Machine");
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Category navigation items with product counts
  const categoryItems = [
    {
      key: "all",
      slug: "all",
      title: "All Machinery Catalog",
      shortTitle: "All Equipment",
      count: PRODUCTS.length,
    },
    ...Object.entries(PRODUCT_CATEGORIES).map(([key, cat]) => ({
      key,
      slug: cat.slug,
      title: cat.title,
      shortTitle: cat.title,
      count: PRODUCTS.filter((p) => p.categoryGroup === key).length,
    })),
  ];

  // Synchronize category selection from URL param
  useEffect(() => {
    if (catParam) {
      const normalizedParam = catParam.toLowerCase().trim();
      
      // Match by exact key/slug in PRODUCT_CATEGORIES
      if (PRODUCT_CATEGORIES[normalizedParam]) {
        setActiveCategoryKey(normalizedParam);
        return;
      }

      // Match by slug comparison or partial name
      const foundEntry = Object.entries(PRODUCT_CATEGORIES).find(
        ([key, cat]) =>
          cat.slug.toLowerCase() === normalizedParam ||
          cat.title.toLowerCase().replace(/[^a-z0-9]/g, "") === normalizedParam.replace(/[^a-z0-9]/g, "") ||
          normalizedParam.includes(key)
      );

      if (foundEntry) {
        setActiveCategoryKey(foundEntry[0]);
      } else {
        // Fallback: check if catParam is a product id
        const matchedProd = PRODUCTS.find((p) => p.id === normalizedParam);
        if (matchedProd && matchedProd.categoryGroup) {
          setActiveCategoryKey(matchedProd.categoryGroup);
        } else {
          setActiveCategoryKey("all");
        }
      }
    } else {
      setActiveCategoryKey("all");
    }
  }, [catParam]);

  const handleCategoryChange = (key: string) => {
    setActiveCategoryKey(key);
    if (key === "all") {
      router.push("/products");
    } else {
      router.push(`/products?cat=${key}`);
    }
  };

  // Active Category Info (if a specific category is active)
  const currentCategoryInfo: ProductCategoryInfo | null =
    activeCategoryKey !== "all" && PRODUCT_CATEGORIES[activeCategoryKey]
      ? PRODUCT_CATEGORIES[activeCategoryKey]
      : null;

  // Filter products by categoryGroup and optional search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategoryKey === "all" || product.categoryGroup === activeCategoryKey;

    if (!searchQuery) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      product.title.toLowerCase().includes(query) ||
      product.specs.toLowerCase().includes(query) ||
      product.body.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tag.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Featured spotlight product for the right hero card
  const spotlightProduct =
    filteredProducts.length > 0 ? filteredProducts[0] : PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your quote request has been submitted to KD Engineers.");
    setTimeout(() => setFormStatus(null), 6000);
  };

  return (
    <main className="pt-20 pb-0">
      {/* DYNAMICALLY PERSONALIZED HIGH-IMPACT HERO BANNER */}
      <section className="relative bg-[#0A0A0A] text-white py-14 md:py-20 overflow-hidden border-b border-[#262626]">
        {/* Prominently Visible Category Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: `url(${
              currentCategoryInfo ? currentCategoryInfo.bannerImage : "/images/hero.png"
            })`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content - Dynamic according to active category */}
            <div className="lg:col-span-8 space-y-6">
              <Reveal key={activeCategoryKey ? `${activeCategoryKey}-badge` : "all-badge"}>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md">
                  <Sparkles size={14} />
                  {currentCategoryInfo
                    ? currentCategoryInfo.badge
                    : "Precision Wire Harness Automation"}
                </div>
              </Reveal>

              <Reveal delay={0.1} key={activeCategoryKey ? `${activeCategoryKey}-title` : "all-title"}>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                  {currentCategoryInfo ? (
                    <>
                      {currentCategoryInfo.title}
                    </>
                  ) : (
                    <>
                      Wire Processing & Automation{" "}
                      <span className="text-[#fd0000] font-normal">Catalog</span>
                    </>
                  )}
                </h1>
                {currentCategoryInfo && (
                  <p className="text-sm sm:text-base font-mono text-[#fd0000] font-semibold mt-1">
                    {currentCategoryInfo.tagline}
                  </p>
                )}
              </Reveal>

              <Reveal delay={0.2} key={activeCategoryKey ? `${activeCategoryKey}-desc` : "all-desc"}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed max-w-2xl">
                  {currentCategoryInfo
                    ? currentCategoryInfo.description
                    : "High-speed cutting, double-ended stripping, terminal crimping presses, and automated test benches engineered for continuous 24/7 manufacturing."}
                </p>
              </Reveal>

              {/* Dynamic Metrics Bar: Category-Specific OR General Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                {currentCategoryInfo ? (
                  currentCategoryInfo.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="font-display text-2xl sm:text-3xl font-semibold text-white">
                        {m.value}
                      </span>
                      <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                        {m.label}
                      </span>
                    </div>
                  ))
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>

            {/* Right Card Preview - Featured Machine Spotlight */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-[#111827]/95 backdrop-blur-md border border-white/20 p-5 rounded-sm shadow-2xl space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#fd0000] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} />{" "}
                    {currentCategoryInfo ? `${currentCategoryInfo.title} Spotlight` : "Featured Machine"}
                  </span>
                  <span className="bg-[#fd0000]/20 text-[#fd0000] px-2 py-0.5 rounded-xs font-mono text-[10px]">
                    {spotlightProduct.tag}
                  </span>
                </div>
                <div className="aspect-[16/10] bg-black overflow-hidden rounded-xs border border-white/10">
                  <img
                    src={spotlightProduct.img}
                    alt={spotlightProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white truncate">
                    {spotlightProduct.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] font-mono mt-1 truncate">
                    ⚡ {spotlightProduct.specs}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(spotlightProduct.title);
                    const el = document.getElementById("quote-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-[#fd0000] text-white py-2.5 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-1.5 rounded-xs cursor-pointer"
                >
                  Request Quote for {spotlightProduct.title} <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* QUICK CATEGORY FILTER BAR */}
          <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white font-bold shrink-0 bg-[#0A0A0A] pr-3 z-10">
              <SlidersHorizontal size={14} className="text-[#fd0000]" />
              <span>CATEGORY:</span>
            </div>
            <div className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2 py-1">
              {categoryItems.map((cat) => {
                const isSelected = activeCategoryKey === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`px-4 py-2 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#fd0000] text-white border border-[#fd0000] shadow-lg scale-105"
                        : "bg-[#171717] text-[#D1D5DB] border border-white/20 hover:border-[#fd0000] hover:text-white"
                    }`}
                  >
                    <span>{cat.shortTitle}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white text-[#fd0000]" : "bg-white/10 text-white/80"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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
                  {PRODUCTS.length} Machines
                </span>
              </div>

              <div className="p-2 divide-y divide-[#F3F4F6]">
                {categoryItems.map((cat) => {
                  const isSelected = activeCategoryKey === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryChange(cat.key)}
                      className={`w-full text-left px-3 py-3 text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? "bg-[#fd0000]/10 text-[#fd0000] font-bold border-l-4 border-[#fd0000]"
                          : "text-[#374151] hover:bg-[#F9FAFB] hover:text-[#fd0000]"
                      }`}
                    >
                      <span className="truncate pr-2">{cat.title}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-[#fd0000] text-white font-bold"
                              : "bg-[#F3F4F6] text-[#6B7280] group-hover:bg-[#fd0000]/10 group-hover:text-[#fd0000]"
                          }`}
                        >
                          {cat.count}
                        </span>
                        <ChevronRight
                          size={14}
                          className={`transition-transform ${
                            isSelected
                              ? "text-[#fd0000] translate-x-1"
                              : "text-[#9CA3AF] group-hover:text-[#fd0000]"
                          }`}
                        />
                      </div>
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
                    <span className="text-[9px] font-mono text-[#fd0000] font-semibold block">
                      {news.date}
                    </span>
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
              <p className="text-xs text-[#9CA3AF] font-light">
                Speak directly with our engineering team for custom wire specs.
              </p>
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

              <div className="flex items-center gap-3 text-xs text-[#525252] w-full sm:w-auto justify-between sm:justify-end">
                <span>
                  Showing <strong className="text-[#0A0A0A]">{filteredProducts.length}</strong>{" "}
                  {currentCategoryInfo ? (
                    <>machines in <strong className="text-[#fd0000]">{currentCategoryInfo.title}</strong></>
                  ) : (
                    "total machines"
                  )}
                </span>
                {(activeCategoryKey !== "all" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      handleCategoryChange("all");
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#fd0000] hover:underline cursor-pointer bg-[#fd0000]/10 px-2.5 py-1 rounded-xs"
                  >
                    <RotateCcw size={12} /> Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Products Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product, i) => (
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
                        <h3 className="font-display text-sm font-semibold text-[#0A0A0A] mb-1.5 group-hover:text-[#fd0000] transition-colors leading-snug line-clamp-2 min-h-[2.5rem]">
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
            ) : (
              <div className="bg-white border border-[#E5E7EB] p-12 text-center rounded-sm space-y-4">
                <p className="text-sm text-[#525252]">
                  No machines found matching your filter or search query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    handleCategoryChange("all");
                  }}
                  className="bg-[#fd0000] text-white px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold rounded-xs cursor-pointer"
                >
                  View All Machinery
                </button>
              </div>
            )}

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
            Visit our Faridabad or Pune facility or dispatch your wire samples for automated crimp force & speed testing.
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
