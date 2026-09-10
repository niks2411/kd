"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { NAV_LINKS, PRODUCT_DROPDOWN_MENU } from "@/lib/data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsHovered, setProductsHovered] = useState(false);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setProductsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductsHovered(false);
      setExpandedSub(null);
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs py-0 my-0 transition-all duration-300"
        data-testid="navbar"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between py-0 my-0">
          <Link href="/" className="flex items-center gap-3.5 group py-0 my-0 pl-1.5 sm:pl-0" data-testid="logo-btn">
            <img src="/logo without bg.jpg.jpeg" alt="KD Engineers India" className="h-20 sm:h-24 md:h-28 w-auto object-contain my-0 py-0 transition-transform group-hover:scale-105" />
            <div className="hidden sm:flex flex-col justify-center my-0 py-0">
              <span className="font-display font-bold uppercase tracking-wider text-sm md:text-[19px] text-[#0A0A0A] leading-tight">
                KD ENGINEERS INDIA PVT. LTD.
              </span>
              <span className="text-[9px] md:text-[11px] font-mono font-semibold tracking-wider text-[#fd0000] uppercase mt-0.5">
                SIMPLIFYING WIRING HARNESS MAKING
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              const isProducts = l.label === "Products";

              return (
                <div
                  key={l.href}
                  className="relative py-2"
                  onMouseEnter={isProducts ? handleMouseEnter : undefined}
                  onMouseLeave={isProducts ? handleMouseLeave : undefined}
                >
                  <Link
                    href={l.href}
                    data-testid={`nav-${l.label.toLowerCase()}`}
                    className={`text-sm font-semibold tracking-wide transition-colors py-1 relative flex items-center gap-1 ${isActive || (isProducts && productsHovered)
                        ? "text-[#fd0000] font-bold"
                        : "text-[#0A0A0A] hover:text-[#fd0000]"
                      }`}
                  >
                    {l.label}
                    {isProducts && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${productsHovered ? "rotate-180 text-[#fd0000]" : ""
                          }`}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#fd0000]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isProducts && (
                    <AnimatePresence>
                      {productsHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1150px] max-w-[95vw]"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-[#ffffff] border border-[#E5E7EB] shadow-2xl rounded-xs p-8 text-[#0A0A0A] flex gap-8 items-stretch">
                            {/* Left Feature Column */}
                            <div className="w-[280px] shrink-0 flex flex-col justify-between pr-8 border-r border-[#E5E7EB]">
                              <div>
                                <span className="font-mono text-xs font-bold text-[#fd0000] uppercase tracking-wider block mb-3">
                                  {PRODUCT_DROPDOWN_MENU.overline}
                                </span>
                                <h3 className="font-display text-2xl font-bold text-[#0A0A0A] leading-snug tracking-tight">
                                  {PRODUCT_DROPDOWN_MENU.heading}
                                </h3>
                              </div>
                              <Link
                                href={PRODUCT_DROPDOWN_MENU.browseLink.href}
                                onClick={() => setProductsHovered(false)}
                                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#fd0000] hover:underline uppercase tracking-wider mt-8"
                              >
                                {PRODUCT_DROPDOWN_MENU.browseLink.label}
                              </Link>
                            </div>

                            {/* Right 4 Category Columns */}
                            <div className="grid grid-cols-4 gap-6 flex-1 pt-1">
                              {PRODUCT_DROPDOWN_MENU.categories.map((cat) => (
                                <div key={cat.title} className="flex flex-col space-y-3">
                                  {/* Category Header */}
                                  <Link
                                    href={cat.href}
                                    onClick={() => setProductsHovered(false)}
                                    className="group flex items-start justify-between gap-1 pb-2 border-b border-[#E5E7EB] hover:border-[#fd0000] transition-colors"
                                  >
                                    <span className="font-display font-bold text-[13px] text-[#0A0A0A] group-hover:text-[#fd0000] transition-colors leading-snug">
                                      {cat.title}
                                    </span>
                                    <ArrowUpRight size={14} className="text-[#fd0000] shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </Link>

                                  {/* Sub-items List */}
                                  <div className="flex flex-col space-y-2 pt-1">
                                    {cat.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setProductsHovered(false)}
                                        className="text-[12px] font-normal text-[#525252] hover:text-[#fd0000] leading-tight transition-colors py-0.5"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/contact"
              data-testid="nav-quote-btn"
              className="bg-[#0A0A0A] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest hover:bg-[#fd0000] transition-colors duration-300 shadow-xs rounded-xs font-semibold whitespace-nowrap"
            >
              Request a Quote
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-[#0A0A0A] p-1.5 hover:text-[#fd0000] transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              data-testid="mobile-menu-btn"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#ffffff] text-[#0A0A0A] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
              <span className="font-display font-bold text-lg text-[#0A0A0A]">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[#0A0A0A] hover:text-[#fd0000] transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 mt-8">
              {NAV_LINKS.map((l, i) => {
                const isProducts = l.label === "Products";

                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {isProducts ? (
                      <div>
                        <div
                          className="flex items-center justify-between py-3 border-b border-[#E5E7EB] cursor-pointer"
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        >
                          <span
                            className={`font-display text-3xl font-light tracking-tight ${pathname === l.href ? "text-[#fd0000] font-normal" : "text-[#0A0A0A]"
                              }`}
                          >
                            {l.label}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${mobileProductsOpen ? "rotate-180 text-[#fd0000]" : ""}`}
                          />
                        </div>
                        {mobileProductsOpen && (
                          <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-4 my-2 rounded flex flex-col gap-4">
                            {PRODUCT_DROPDOWN_MENU.categories.map((cat) => (
                              <div key={cat.title} className="space-y-1">
                                <Link
                                  href={cat.href}
                                  onClick={() => setOpen(false)}
                                  className="font-display text-sm font-bold text-[#0A0A0A] hover:text-[#fd0000] flex items-center justify-between"
                                >
                                  <span>{cat.title}</span>
                                  <ArrowUpRight size={14} className="text-[#fd0000]" />
                                </Link>
                                <div className="pl-2 space-y-1 border-l-2 border-[#fd0000] mt-1">
                                  {cat.items.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setOpen(false)}
                                      className="text-xs font-normal text-[#525252] hover:text-[#fd0000] block py-0.5"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block font-display text-3xl font-light tracking-tight py-3 border-b border-[#E5E7EB] ${pathname === l.href ? "text-[#fd0000] font-normal" : "text-[#0A0A0A]"
                          }`}
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full bg-[#fd0000] text-white py-4 text-center font-medium text-lg flex items-center justify-center gap-2"
              >
                Request a Quote <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
