"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/data";

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}

const Field = ({ label, name, value, onChange, type = "text", required, textarea, placeholder }: FieldProps) => (
  <label className="block group">
    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
      {label}{required && <span className="text-[#FF3B30]"> *</span>}
    </span>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        placeholder={placeholder}
        data-testid={`contact-${name}`}
        className="mt-3 w-full bg-transparent border-b border-white/25 focus:border-white pb-3 outline-none text-lg font-light text-white placeholder:text-white/25 transition-colors duration-300 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        data-testid={`contact-${name}`}
        className="mt-3 w-full bg-transparent border-b border-white/25 focus:border-white pb-3 outline-none text-lg font-light text-white placeholder:text-white/25 transition-colors duration-300"
      />
    )}
  </label>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
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

      toast.success("Inquiry received! Our engineering team will contact you shortly.");
      setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please email us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#C5221F] text-white" data-testid="contact">
      {/* Headline CTA */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-28 md:pt-40">
        <Reveal>
          <Overline color="text-white/60">Ready to transform your manufacturing?</Overline>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display uppercase font-medium tracking-tighter leading-[0.9] text-[11vw] md:text-[8vw] mt-6">
            Let's build smarter<br />manufacturing<span className="text-white/40">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg font-light text-white/75 leading-relaxed">
            Whether you require a single wire processing machine or a fully integrated automated
            production line, we have the expertise, technology and commitment to deliver.
          </p>
        </Reveal>
      </div>

      {/* Form + info */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28 grid lg:grid-cols-12 gap-16">
        <form onSubmit={submit} className="lg:col-span-7 grid sm:grid-cols-2 gap-10" data-testid="contact-form">
          <Field label="Full Name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
          <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" />
          <Field label="Company" name="company" value={form.company} onChange={onChange} placeholder="Organisation" />
          <Field label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 …" />
          <div className="sm:col-span-2">
            <Field label="Area of Interest" name="interest" value={form.interest} onChange={onChange} placeholder="e.g. Wire harness processing line" />
          </div>
          <div className="sm:col-span-2">
            <Field label="Message" name="message" value={form.message} onChange={onChange} required textarea placeholder="Tell us about your production goals…" />
          </div>
          <div className="sm:col-span-2">
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="group inline-flex items-center gap-3 bg-white text-[#C5221F] px-8 py-4 font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Request a Quote <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </motion.button>
          </div>
        </form>

        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10 border-t border-white/20 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {[
            { k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { k: "Phone", v: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
            { k: "Location", v: CONTACT.address },
          ].map((c) => (
            <div key={c.k}>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">{c.k}</span>
              {c.href ? (
                <a href={c.href} className="block font-display text-xl md:text-2xl font-light mt-2 link-underline w-fit" data-testid={`contact-${c.k.toLowerCase()}`}>
                  {c.v}
                </a>
              ) : (
                <p className="font-display text-xl md:text-2xl font-light mt-2">{c.v}</p>
              )}
            </div>
          ))}
          <p className="text-white/60 font-light text-sm leading-relaxed mt-auto pt-6 border-t border-white/10">
            Professional consultation · Installation assistance · Operator training · Preventive
            maintenance · Spare parts · Long-term service partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};
