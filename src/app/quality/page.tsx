import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { ShieldCheck, Award, CheckCircle2, Wrench, FileText, PhoneCall, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Quality & Engineering | KD Engineers India Pvt. Ltd.",
  description: "ISO 9001:2015 certified quality management system, zero-defect manufacturing philosophy, and dedicated process support.",
};

const QUALITY_PILLARS = [
  {
    title: "ISO 9001:2015 Certification",
    body: "Fully documented and audited quality management procedures governing raw material inspection, machining tolerances, and final machine assembly.",
    icon: Award,
  },
  {
    title: "In-House Inspection & Testing",
    body: "100% micro-section crimp analysis, pull-force testing, and dimensional inspection of tool steel blades and applicators before dispatch.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Process Improvement",
    body: "Ongoing R&D and process capability (Cpk) audits ensuring lower cycle times, zero mechanical drift, and extended machine lifespan.",
    icon: RefreshCw,
  },
  {
    title: "Zero-Defect Manufacturing Ethos",
    body: "Built-in optical sensors, Crimp Force Monitoring (CFM), and automatic rejection gates to eliminate defects at the source.",
    icon: CheckCircle2,
  },
];

const SUPPORT_SERVICES = [
  {
    step: "01",
    title: "Technical Consultation",
    desc: "Wiring harness process consulting, machine selection support, and production layout planning for maximum efficiency.",
  },
  {
    step: "02",
    title: "Commissioning & Validation",
    desc: "On-site machine installation, applicator tool setting support, trial runs, and operator safety training.",
  },
  {
    step: "03",
    title: "After-Sales & Lifecycle Support",
    desc: "Preventive and breakdown maintenance, Annual Maintenance Contracts (AMC), and express spare parts supply.",
  },
];

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HERO BANNER */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <Overline color="text-[#fd0000]">ISO 9001:2015 Certified System</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.02]">
                  Quality is embedded in <span className="text-[#fd0000]">every process.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                  KD Engineers&apos; quality system is shaped by rigorous inspection, crimp force validation, and continuous process optimization.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* QUALITY PILLARS GRID */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Quality Framework</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-[#0A0A0A]">
                A quality mindset built into every machine.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {QUALITY_PILLARS.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={idx * 0.1} className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 sm:p-10 rounded-xs space-y-4">
                    <div className="p-3 bg-[#0A0A0A] text-[#fd0000] rounded-xs inline-block">
                      <IconComp size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">{pillar.title}</h3>
                    <p className="text-[#525252] font-light text-sm leading-relaxed">{pillar.body}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ENGINEERING SUPPORT SECTION */}
        <section className="py-16 md:py-24 bg-[#0A0A0A] text-white border-t border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Engineering Support</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-white">
                Supporting process stability from selection to production.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SUPPORT_SERVICES.map((s) => (
                <div key={s.step} className="bg-[#171717] border border-white/10 p-8 rounded-xs space-y-4">
                  <span className="font-mono text-xs font-bold text-[#fd0000] uppercase tracking-wider">{s.step}</span>
                  <h3 className="font-display text-xl font-medium text-white">{s.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#FAFAFA] border border-[#E5E7EB] p-8 sm:p-12">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#0A0A0A]">
                Looking to improve a wire or harness production operation?
              </h3>
              <p className="text-[#525252] text-sm font-light mt-1">
                Request technical guidance and process consultation from our quality engineers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 text-sm font-medium hover:bg-[#fd0000] transition-colors shrink-0"
            >
              Request Quality Consultation <PhoneCall size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
