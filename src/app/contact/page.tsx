"use client";

import { useState, ChangeEvent, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/data";
import { toast } from "sonner";
import { ArrowRight, Loader2, Mail, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledInterest = searchParams ? searchParams.get("interest") || "" : "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: prefilledInterest,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      toast.success("Inquiry received! Our engineering team will contact you within 24 hours.");
      setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please email us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      {/* Form */}
      <div className="lg:col-span-7 bg-white border border-[#E5E7EB] p-8 md:p-12 shadow-sm">
        <h2 className="font-display text-2xl font-medium text-[#0A0A0A] mb-2">Request a Customized Quote</h2>
        <p className="text-xs text-[#525252] font-light mb-8">Fill in your machine requirements or project specifications below.</p>

        <form onSubmit={submit} className="space-y-6" data-testid="contact-page-form">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
                Full Name <span className="text-[#FF3B30]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="John Doe"
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
                Email Address <span className="text-[#FF3B30]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="john@company.com"
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
                Company / Organisation
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                placeholder="Acme Manufacturing Ltd."
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+91 98765 43210"
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
              Area of Interest / Machine Model
            </label>
            <input
              type="text"
              name="interest"
              value={form.interest}
              onChange={onChange}
              placeholder="e.g. Automatic Wire Cutting & Stripping Machine"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2 font-medium">
              Project Details & Requirements <span className="text-[#FF3B30]">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              placeholder="Describe wire specifications, production volume, or custom applicator requirements…"
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#525252]/50 focus:border-[#C5221F] focus:bg-white outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C5221F] text-white py-4 text-sm font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting Inquiry…
              </>
            ) : (
              <>
                Submit Quote Inquiry <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Info Cards */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white border border-[#E5E7EB] p-8">
          <h3 className="font-display text-xl font-medium text-[#0A0A0A] mb-6">Direct Contact Channels</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C5221F]/10 text-[#C5221F] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#525252] block">Sales & Support Email</span>
                <a href={`mailto:${CONTACT.email}`} className="font-display text-lg text-[#0A0A0A] hover:text-[#C5221F] font-medium transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C5221F]/10 text-[#C5221F] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#525252] block">Direct Phone</span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="font-display text-lg text-[#0A0A0A] hover:text-[#C5221F] font-medium transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C5221F]/10 text-[#C5221F] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#525252] block">Factory Location</span>
                <p className="font-display text-sm text-[#0A0A0A] font-medium mt-1 leading-relaxed">
                  {CONTACT.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] text-white p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C5221F] uppercase tracking-wider font-semibold">
            <Clock size={16} /> Operating Hours
          </div>
          <p className="text-xs text-white/70 font-light leading-relaxed">
            Monday – Saturday: 9:00 AM – 6:30 PM (IST)<br />
            Emergency technical support available 24/7 for installed lines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="bg-white border-b border-[#E5E7EB] py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="max-w-3xl">
              <Reveal>
                <Overline color="text-[#C5221F]">Get In Touch</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A0A0A] tracking-tight mt-4">
                  Contact Our <span className="text-[#C5221F] font-medium">Engineering Team</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-[#525252] font-light leading-relaxed">
                  Whether you require machine pricing, custom applicator die tooling, or factory floor installation support, we are ready to assist.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 mx-auto max-w-[1600px] px-6 md:px-12">
          <Suspense fallback={<div className="text-center py-10 font-mono text-xs">Loading form…</div>}>
            <ContactFormContent />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  );
}
