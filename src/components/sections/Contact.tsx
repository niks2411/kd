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
    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/90 font-semibold block">
      {label}{required && <span className="text-white font-bold"> *</span>}
    </span>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={2}
        placeholder={placeholder}
        data-testid={`contact-${name}`}
        className="mt-1 w-full bg-transparent border-b border-white/50 focus:border-white pb-1.5 outline-none text-sm sm:text-base font-medium text-white placeholder:text-white/60 transition-colors duration-200 resize-none"
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
        className="mt-1 w-full bg-transparent border-b border-white/50 focus:border-white pb-1.5 outline-none text-sm sm:text-base font-medium text-white placeholder:text-white/60 transition-colors duration-200"
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
    <section id="contact" className="bg-[#fd0000] text-white py-12 md:py-16" data-testid="contact">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <Reveal>
            <Overline color="text-white/70 font-bold">Get in Touch</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mt-3 leading-[1.05] text-white">
              Let&apos;s build smarter manufacturing<span className="text-white/50">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm font-light text-white/85 leading-relaxed max-w-md">
              Whether you require a single wire processing machine or a fully integrated automated
              production line, we have the expertise, technology and commitment to deliver.
            </p>
          </Reveal>
        </div>

        {/* Right: Form */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-x-6 gap-y-4" data-testid="contact-form">
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
            <div className="sm:col-span-2 pt-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="group inline-flex items-center gap-2.5 bg-white text-[#fd0000] px-6 py-3 text-sm font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Request a Quote <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
