"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "bg-[#F9FAFB]/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm py-3" : "bg-transparent py-5"
        }`}
        data-testid="navbar"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group text-left" data-testid="logo-btn">
            <span className="grid place-items-center h-9 w-9 bg-[#C5221F] text-white font-display font-semibold text-lg transition-transform group-hover:scale-105">K</span>
            <span className="font-display font-semibold tracking-tight text-lg leading-none text-[#0A0A0A]">
              KD ENGINEERS
              <span className="block text-[10px] font-mono font-normal tracking-[0.22em] text-[#525252] mt-0.5">INDIA PVT. LTD.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-${l.label.toLowerCase()}`}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 relative ${
                    isActive ? "text-[#C5221F] font-semibold" : "text-[#0A0A0A] hover:text-[#C5221F]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5221F]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            data-testid="nav-quote-btn"
            className="hidden lg:inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-2.5 text-sm font-medium group hover:bg-[#C5221F] transition-colors duration-300"
          >
            Request a Quote
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button className="lg:hidden text-[#0A0A0A] p-2" onClick={() => setOpen(true)} data-testid="menu-open" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#F9FAFB] flex flex-col p-6 overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="flex justify-between items-center h-14 border-b border-[#E5E7EB]">
              <span className="font-display font-semibold text-lg text-[#0A0A0A]">KD ENGINEERS</span>
              <button onClick={() => setOpen(false)} data-testid="menu-close" aria-label="Close menu" className="text-[#0A0A0A] p-2">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-8">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block font-display text-3xl font-light tracking-tight py-3 border-b border-[#E5E7EB] ${
                      pathname === l.href ? "text-[#C5221F] font-normal" : "text-[#0A0A0A]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full bg-[#C5221F] text-white py-4 text-center font-medium text-lg flex items-center justify-center gap-2"
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
