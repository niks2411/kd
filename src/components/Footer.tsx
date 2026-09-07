"use client";

import Link from "next/link";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0A0A0A] text-white" data-testid="footer">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Section 1: Brand & Philosophy */}
          <div className="md:col-span-4">
            <Link href="/" className="block mb-6 group w-fit">
              <span className="font-display font-bold tracking-tight text-xl text-white block leading-tight">
                KD ENGINEERS INDIA PVT. LTD.
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#fd0000] uppercase block mt-1">
                SIMPLIFYING WIRING HARNESS MAKING
              </span>
            </Link>
            <p className="text-white/55 font-light text-xs leading-relaxed max-w-sm">
              Precision engineering, intelligent wire harness automation and manufacturing excellence —
              building long-term partnerships that help global industries achieve more.
            </p>
          </div>

          {/* Section 2: Navigation (3-3 Split) */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">Navigation</span>
            <div className="mt-5 grid grid-cols-2 gap-4 max-w-[220px]">
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 3).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/70 hover:text-[#fd0000] transition-colors text-sm font-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {NAV_LINKS.slice(3, 6).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/70 hover:text-[#fd0000] transition-colors text-sm font-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">Contact Us</span>
            <div className="mt-5 space-y-4 text-xs font-light text-white/70">
              {/* Emails */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#fd0000] font-semibold block">Email Support</span>
                {CONTACT.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-[#fd0000] transition-colors">
                    {e}
                  </a>
                ))}
              </div>

              {/* Phone Numbers */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#fd0000] font-semibold block">Phone Lines</span>
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "").replace(/-/g, "")}`} className="block hover:text-[#fd0000] transition-colors">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: MANUFACTURING UNITS & BACK TO TOP */}
        <div className="mt-12 pt-8 border-t border-white/15 space-y-6">
          {/* Manufacturing Units */}
          <div className="grid md:grid-cols-2 gap-6 text-xs">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#fd0000] uppercase tracking-wider block mb-1">
                UNIT I (Faridabad Plant)
              </span>
              <p className="text-white/70 leading-relaxed font-light">
                Plot No. 56A, Gali No. 6, Krishna Colony, Industrial Area, Sector 25, Faridabad – 121004 (Hr.) INDIA
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold text-[#fd0000] uppercase tracking-wider block mb-1">
                UNIT II (Pune Plant)
              </span>
              <p className="text-white/70 leading-relaxed font-light">
                Plot No. A-7/2/F-8, Industrial Area, Phase IV, MIDC Chakan Tal Khed, Nighoje, Pune – 410501
              </p>
            </div>
          </div>

          {/* Copyright & Back to top button */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <p className="text-white/40 text-xs font-mono">© {new Date().getFullYear()} KD Engineers India Private Limited. All rights reserved.</p>
            <button onClick={top} className="group inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono uppercase tracking-widest cursor-pointer" data-testid="back-to-top">
              Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
