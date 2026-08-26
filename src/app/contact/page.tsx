"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Thank you! Your message has been sent directly to our Gurugram engineering team.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HIGH-IMPACT HERO BANNER */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none transition-all duration-700"
            style={{ backgroundImage: "url('/images/hero.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs shadow-md">
                  <Sparkles size={14} /> Direct Engineering Support
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  Contact Our <span className="text-[#fd0000] font-normal">Engineering Team</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed">
                  Have questions about wire cutting, crimping machinery, or custom automation? Reach out to our Gurugram engineering facility today.
                </p>
              </Reveal>

              {/* Contact Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                <div>
                  <span className="font-display text-2xl font-semibold text-[#fd0000]">Gurugram</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Manufacturing Plant</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">&lt; 24 Hours</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Guaranteed Response</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Pan-India</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Service Network</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold text-white">Free Demo</span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] uppercase">Wire Sample Audit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT WORKSPACE: SIDEBAR + CONTACT FORM */}
        <section className="py-14 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT STICKY SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6 sticky top-28">
              {/* Contact Details Card */}
              <div className="bg-[#0A0A0A] text-white p-6 rounded-sm space-y-6 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold border-b border-white/15 pb-3">
                  <Building2 size={16} /> Corporate Headquarters
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#fd0000]/10 text-[#fd0000] shrink-0 rounded-xs">
                      <Mail size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">Email Support</span>
                      {CONTACT.emails.map((e) => (
                        <a key={e} href={`mailto:${e}`} className="block text-xs text-white hover:text-[#fd0000] font-medium transition-colors">
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#fd0000]/10 text-[#fd0000] shrink-0 rounded-xs">
                      <Phone size={18} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">Phone / Support Lines</span>
                      {CONTACT.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "").replace(/-/g, "")}`} className="block text-xs text-white hover:text-[#fd0000] font-medium transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#fd0000]/10 text-[#fd0000] shrink-0 rounded-xs">
                      <MapPin size={18} />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">Manufacturing Units</span>
                      {CONTACT.units.map((u) => (
                        <div key={u.name} className="space-y-0.5">
                          <strong className="block text-white font-semibold text-xs">{u.name}</strong>
                          <p className="text-[11px] text-[#D1D5DB] leading-relaxed font-light">{u.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-white/15">
                    <div className="p-2.5 bg-[#fd0000]/10 text-[#fd0000] shrink-0 rounded-xs">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">Working Hours</span>
                      <p className="text-xs text-[#D1D5DB] font-light">Mon - Sat: 9:00 AM - 6:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#fd0000] uppercase font-bold">
                  <CheckCircle2 size={15} /> Free Crimp Sample Testing
                </div>
                <p className="text-xs text-[#525252] leading-relaxed">
                  Dispatch your wire samples to our Gurugram plant for automated pull force and crimp cross-section analysis.
                </p>
              </div>
            </aside>

            {/* RIGHT MAIN FORM AREA */}
            <main className="lg:col-span-8">
              <div className="bg-white border border-[#E5E7EB] p-8 md:p-10 shadow-2xs rounded-sm space-y-6">
                <div>
                  <Overline color="text-[#fd0000]">Inquiry Form</Overline>
                  <h2 className="font-display text-3xl font-semibold text-[#0A0A0A] mt-1">Send Us a Direct Message</h2>
                  <p className="text-xs text-[#525252] font-light mt-1">
                    Fill out your requirements below and our engineering lead will follow up with pricing & CAD specifications.
                  </p>
                </div>

                {formStatus && (
                  <div className="p-4 bg-[#fd0000]/10 border border-[#fd0000] text-[#fd0000] text-xs font-semibold rounded-xs">
                    {formStatus}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                        Full Name <span className="text-[#fd0000]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
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
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
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
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Enterprise Name"
                        className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Project Details & Wire Specifications <span className="text-[#fd0000]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Specify wire gauge (mm²), production volume/hr, terminal type, or special automation requirements..."
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-2.5 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#fd0000] text-white py-3.5 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shadow-2xs rounded-xs"
                  >
                    <Send size={15} /> {isSubmitting ? "Sending Request..." : "Submit Inquiry to KD Engineers"}
                  </button>
                </form>
              </div>
            </main>
          </div>
        </section>

        {/* BOTTOM VIVID RED CTA BANNER */}
        <section className="py-12 bg-[#fd0000] text-white text-center">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <h3 className="font-display text-2xl font-light">Visit Our Gurugram Manufacturing Facility</h3>
            <p className="mt-1.5 text-white/90 font-light text-xs sm:text-sm">
              Experience live machine demonstrations and automated crimp force testing on your own wire samples.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white text-[#fd0000] px-6 py-2.5 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors rounded-xs"
              >
                Call Engineer Now: {CONTACT.phone} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
