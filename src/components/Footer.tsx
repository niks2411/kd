"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white border-t border-[#1a1a1a]" data-testid="footer">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-16 pb-8">
        
        {/* 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* COLUMN 1: BRAND, TAGLINE & SOCIALS (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <img src="/favicon.png" alt="KD Engineers Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-bold uppercase tracking-wide text-base sm:text-lg text-white block leading-tight">
                  KD ENGINEERS INDIA PVT. LTD.
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#fd0000] uppercase block mt-0.5">
                  SIMPLIFYING WIRING HARNESS MAKING
                </span>
              </div>
            </Link>

            <p className="text-white font-medium text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Precision-engineered solutions for wiring harness automation, testing, wire and cable processing, crimping and assembly.
            </p>

            {/* Social Buttons (YouTube & LinkedIn) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@Kd_engineers"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 bg-[#0A0A0A] hover:border-[#fd0000] px-3 py-1.5 rounded-xs flex items-center gap-2 text-xs text-white transition-colors group font-bold"
              >
                <span className="bg-[#fd0000] text-white px-1.5 py-0.5 rounded-[2px] text-[9px] flex items-center justify-center">
                  <Play size={10} fill="white" />
                </span>
                <span className="text-xs font-bold text-white">YouTube</span>
                <ArrowUpRight size={12} className="text-white group-hover:text-[#fd0000] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/company/kd-engineers/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 bg-[#0A0A0A] hover:border-[#fd0000] px-3 py-1.5 rounded-xs flex items-center gap-2 text-xs text-white transition-colors group font-bold"
              >
                <span className="bg-[#fd0000] text-white px-1 py-0.5 rounded-[2px] text-[10px] font-bold leading-none">
                  in
                </span>
                <span className="text-xs font-bold text-white">LinkedIn</span>
                <ArrowUpRight size={12} className="text-white group-hover:text-[#fd0000] transition-colors" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#fd0000] font-bold block">
              PRODUCTS
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/products?cat=testing" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Testing & Quality Equipment
                </Link>
              </li>
              <li>
                <Link href="/products?cat=assembly" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Harness Assembly Aids
                </Link>
              </li>
              <li>
                <Link href="/products?cat=crimping" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Terminal Crimping Solutions
                </Link>
              </li>
              <li>
                <Link href="/products?cat=processing" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Wiring Harness Processing Machines
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: EXPLORE (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#fd0000] font-bold block">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/solutions" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  About KD Engineers
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Process & Methodology
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Quality & Engineering
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Exhibitions & Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white font-semibold hover:text-[#fd0000] transition-colors block">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#fd0000] font-bold block">
              CONTACT
            </span>

            <div className="space-y-1">
              <a href="tel:+919953336623" className="block text-white hover:text-[#fd0000] font-bold text-xs sm:text-[13px] transition-colors">
                +91 9953336623
              </a>
              <a href="mailto:info@kdengineers.in" className="block text-white hover:text-[#fd0000] font-bold text-xs sm:text-[13px] transition-colors">
                info@kdengineers.in
              </a>
            </div>

            {/* FARIDABAD */}
            <div className="pt-2 space-y-0.5">
              <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider block">
                FARIDABAD
              </span>
              <p className="text-white font-medium text-[11px] leading-relaxed">
                Unit I: Plot No. 56A, Gali No. 6, Krishna Colony Industrial Area, Sector 25, Faridabad - 121004 (Haryana)
              </p>
            </div>

            {/* PUNE */}
            <div className="pt-1 space-y-0.5">
              <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider block">
                PUNE
              </span>
              <p className="text-white font-medium text-[11px] leading-relaxed">
                Unit II: Plot No. A-7/2/F-8, Industrial Area, Phase-IV, MIDC Chakan, Tal. Khed, Nighoje, Pune - 410501
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL LINKS BAR */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white font-semibold">
            <span>© {new Date().getFullYear()} K.D. Engineers India Pvt. Ltd.</span>
            <Link href="/privacy" className="text-white font-semibold hover:text-[#fd0000] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white font-semibold hover:text-[#fd0000] transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 text-white hover:text-[#fd0000] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer font-bold"
          >
            Back to top <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 transition-transform text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
