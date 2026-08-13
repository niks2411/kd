"use client";

import Link from "next/link";
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0A0A0A] text-white" data-testid="footer">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <span className="grid place-items-center h-9 w-9 bg-[#C5221F] text-white font-display font-semibold text-lg">K</span>
              <span className="font-display font-semibold tracking-tight text-lg">KD ENGINEERS INDIA</span>
            </Link>
            <p className="text-white/55 font-light max-w-md leading-relaxed">
              Precision engineering, intelligent wire harness automation and manufacturing excellence —
              building long-term partnerships that help global industries achieve more.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">Navigation</span>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white transition-colors text-sm font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">Contact</span>
            <ul className="mt-5 space-y-3 text-white/70">
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors text-sm font-light">{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors text-sm font-light">{CONTACT.phone}</a></li>
              <li className="text-xs font-light text-white/50 leading-relaxed mt-2">{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <p className="text-white/40 text-xs font-mono">© {new Date().getFullYear()} KD Engineers India Private Limited. All rights reserved.</p>
          <button onClick={top} className="group inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono uppercase tracking-widest cursor-pointer" data-testid="back-to-top">
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
