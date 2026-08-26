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
        className={`fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs transition-all duration-300 ${
          scrolled || productsHovered ? "py-2.5" : "py-3.5"
        }`}
        data-testid="navbar"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" data-testid="logo-btn">
            <img src="/logo without bg.jpg.jpeg" alt="KD Engineers India" className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold tracking-tight text-sm sm:text-base text-[#0A0A0A] leading-tight">
                KD ENGINEERS INDIA PVT. LTD.
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider text-[#fd0000] uppercase mt-0.5">
                ( SIMPLIFYING WIRING HARNESS MAKING )
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
                    className={`text-sm font-medium tracking-wide transition-colors py-1 relative flex items-center gap-1 ${
                      isActive || (isProducts && productsHovered)
                        ? "text-[#fd0000] font-semibold"
                        : "text-[#0A0A0A] hover:text-[#fd0000]"
                    }`}
                  >
                    {l.label}
                    {isProducts && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          productsHovered ? "rotate-180 text-[#fd0000]" : ""
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[760px]"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-[#EDEFF2] border border-[#D1D5DB] shadow-2xl rounded-sm p-8 text-[#111827]">
                            <h3 className="font-serif text-2xl text-[#2B2D31] font-medium mb-6 tracking-tight">
                              {PRODUCT_DROPDOWN_MENU.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                              {/* Column 1 */}
                              <div className="flex flex-col gap-2.5">
                                {PRODUCT_DROPDOWN_MENU.col1.map((item) => (
                                  <div key={item.label} className="relative group">
                                    <div
                                      className="flex items-center justify-between cursor-pointer py-0.5 hover:text-[#fd0000] transition-colors"
                                      onMouseEnter={() =>
                                        item.subItems ? setExpandedSub(item.label) : setExpandedSub(null)
                                      }
                                    >
                                      <Link
                                        href={item.href}
                                        onClick={() => setProductsHovered(false)}
                                        className="font-sans text-[15px] font-semibold text-[#1F2937] hover:text-[#fd0000] tracking-wide"
                                      >
                                        {item.label}
                                      </Link>
                                      {item.subItems && (
                                        <ChevronDown
                                          size={15}
                                          className={`text-[#4B5563] group-hover:text-[#fd0000] transition-transform ${
                                            expandedSub === item.label ? "-rotate-90 text-[#fd0000]" : ""
                                          }`}
                                        />
                                      )}
                                    </div>

                                    {/* Sub-items flyout */}
                                    {item.subItems && expandedSub === item.label && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="mt-1 ml-3 pl-3 border-l-2 border-[#fd0000] flex flex-col gap-1.5 py-1"
                                      >
                                        {item.subItems.map((sub) => (
                                          <Link
                                            key={sub.label}
                                            href={sub.href}
                                            onClick={() => setProductsHovered(false)}
                                            className="text-xs font-medium text-[#4B5563] hover:text-[#fd0000] transition-colors flex items-center gap-1"
                                          >
                                            <ChevronRight size={12} className="text-[#fd0000]" />
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {/* Column 2 */}
                              <div className="flex flex-col gap-2.5">
                                {PRODUCT_DROPDOWN_MENU.col2.map((item) => (
                                  <div key={item.label} className="relative group">
                                    <div
                                      className="flex items-center justify-between cursor-pointer py-0.5 hover:text-[#fd0000] transition-colors"
                                      onMouseEnter={() =>
                                        item.subItems ? setExpandedSub(item.label) : setExpandedSub(null)
                                      }
                                    >
                                      <Link
                                        href={item.href}
                                        onClick={() => setProductsHovered(false)}
                                        className="font-sans text-[15px] font-semibold text-[#1F2937] hover:text-[#fd0000] tracking-wide"
                                      >
                                        {item.label}
                                      </Link>
                                      {item.subItems && (
                                        <ChevronDown
                                          size={15}
                                          className={`text-[#4B5563] group-hover:text-[#fd0000] transition-transform ${
                                            expandedSub === item.label ? "-rotate-90 text-[#fd0000]" : ""
                                          }`}
                                        />
                                      )}
                                    </div>

                                    {/* Sub-items flyout */}
                                    {item.subItems && expandedSub === item.label && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="mt-1 ml-3 pl-3 border-l-2 border-[#fd0000] flex flex-col gap-1.5 py-1"
                                      >
                                        {item.subItems.map((sub) => (
                                          <Link
                                            key={sub.label}
                                            href={sub.href}
                                            onClick={() => setProductsHovered(false)}
                                            className="text-xs font-medium text-[#4B5563] hover:text-[#fd0000] transition-colors flex items-center gap-1"
                                          >
                                            <ChevronRight size={12} className="text-[#fd0000]" />
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </div>
                                ))}
                              </div>
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

          <Link
            href="/contact"
            data-testid="nav-quote-btn"
            className="hidden lg:inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-2.5 text-sm font-medium group hover:bg-[#fd0000] transition-colors duration-300"
          >
            Request a Quote
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <button
            className="lg:hidden text-[#0A0A0A] p-2"
            onClick={() => setOpen(true)}
            data-testid="menu-open"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#ffffff] flex flex-col p-6 overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="flex justify-between items-center h-14 border-b border-[#E5E7EB]">
              <span className="font-display font-semibold text-lg text-[#0A0A0A]">KD ENGINEERS</span>
              <button
                onClick={() => setOpen(false)}
                data-testid="menu-close"
                aria-label="Close menu"
                className="text-[#0A0A0A] p-2"
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
                            className={`font-display text-3xl font-light tracking-tight ${
                              pathname === l.href ? "text-[#fd0000] font-normal" : "text-[#0A0A0A]"
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
                          <div className="bg-[#EDEFF2] p-4 my-2 rounded flex flex-col gap-3">
                            <span className="font-serif text-lg font-medium text-[#2B2D31]">New Product</span>
                            <div className="grid grid-cols-1 gap-2">
                              {[...PRODUCT_DROPDOWN_MENU.col1, ...PRODUCT_DROPDOWN_MENU.col2].map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="text-sm font-semibold text-[#1F2937] hover:text-[#fd0000] flex items-center justify-between"
                                >
                                  <span>{item.label}</span>
                                  {item.subItems && <span className="text-xs text-[#fd0000]">∨</span>}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block font-display text-3xl font-light tracking-tight py-3 border-b border-[#E5E7EB] ${
                          pathname === l.href ? "text-[#fd0000] font-normal" : "text-[#0A0A0A]"
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
