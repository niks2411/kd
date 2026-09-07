import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { FileText, Download, Youtube, BookOpen, HelpCircle, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Resources | KD Engineers India Pvt. Ltd.",
  description: "Explore product documentation, company profile, technical specifications, and machine videos.",
};

const RESOURCES = [
  {
    title: "KD Engineers Company Profile",
    description: "Overview of company capabilities, vision, mission, ISO certifications, product range, and manufacturing locations in Faridabad and Pune.",
    icon: FileText,
    type: "Document",
    tag: "Company Information",
  },
  {
    title: "KDPL 2026 Machine Catalogue",
    description: "Complete product catalogue featuring machine imagery, technical parameters, model references, and applicator tool specifications.",
    icon: Download,
    type: "Catalogue",
    tag: "Product References",
  },
  {
    title: "Machine Video Demonstrations",
    description: "Watch live operational demonstrations of high-speed wire cutting, terminal crimping presses, seal insertion, and testing benches on our YouTube channel.",
    icon: Youtube,
    type: "Video",
    tag: "Live Machinery",
  },
  {
    title: "Technical Guides & Case Studies",
    description: "Insights on wire processing optimization, crimp force monitoring (CFM), EV high-voltage cable stripping, and process capability (Cpk) standards.",
    icon: BookOpen,
    type: "Articles",
    tag: "Engineering Insights",
  },
];

const FAQS = [
  {
    q: "Where are KD Engineers' manufacturing plants located?",
    a: "We operate two manufacturing facilities: Unit I in Sector 25, Faridabad (Haryana) and Unit II in MIDC Chakan Phase IV, Pune (Maharashtra).",
  },
  {
    q: "Do you offer customized Special Purpose Machines (SPM)?",
    a: "Yes. Our in-house engineering team designs and fabricates custom wire processing machines, automated assembly conveyors, and specialized testing fixtures tailored to client specifications.",
  },
  {
    q: "Are KD Engineers machines ISO certified?",
    a: "Yes, KD Engineers operates under an ISO 9001:2015 certified quality management system with rigorous in-house inspection and 72-hour machine stress testing.",
  },
  {
    q: "What after-sales support and spare parts availability do you provide?",
    a: "We offer comprehensive installation, commissioning, operator safety training, Annual Maintenance Contracts (AMC), and express dispatch on replacement blades, crimp dies, and wear parts.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HERO BANNER */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <Overline color="text-[#fd0000]">Technical Documentation & Media</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.02]">
                  Product information for <span className="text-[#fd0000]">confident decisions.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                  Explore company documentation, machine catalogues, video demonstrations, and application engineering resources.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RESOURCES GRID */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Available Resources</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-[#0A0A0A]">
                Engineering references &amp; documentation.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {RESOURCES.map((r, idx) => {
                const IconComp = r.icon;
                return (
                  <Reveal key={r.title} delay={idx * 0.1} className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 md:p-10 rounded-xs space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-[#0A0A0A] text-white rounded-xs inline-block">
                          <IconComp size={22} />
                        </div>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#fd0000] bg-[#fd0000]/10 px-3 py-1 rounded-full">
                          {r.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">{r.title}</h3>
                      <p className="text-[#525252] font-light text-sm leading-relaxed">{r.description}</p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                      <span className="font-mono text-xs text-[#9CA3AF] uppercase">{r.type}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#fd0000] transition-colors"
                      >
                        Request Copy &rarr;
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Knowledge Base</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-[#0A0A0A]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-[#ffffff] border border-[#E5E7EB] p-8 rounded-xs space-y-3">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-[#fd0000] shrink-0 mt-1" />
                    <h3 className="font-display text-lg font-medium text-[#0A0A0A]">{faq.q}</h3>
                  </div>
                  <p className="text-[#525252] font-light text-sm leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0A0A0A] text-white p-8 sm:p-12">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Need detailed machine datasheets or custom technical drawings?
              </h3>
              <p className="text-white/60 text-sm font-light mt-1">
                Contact our engineering support team directly for application drawings and custom quotes.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#fd0000] text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-[#0A0A0A] transition-colors shrink-0"
            >
              Contact Engineering <PhoneCall size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
