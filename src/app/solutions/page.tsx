import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { PRODUCTS, CONTACT } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, Cpu, ShieldCheck, Wrench, FileText, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Solutions | KD Engineers India Pvt. Ltd.",
  description: "Integrated machinery and engineering solutions for every stage of wiring harness production.",
};

const SOLUTIONS_CATEGORIES = [
  {
    id: "testing",
    title: "01 — Testing & Quality Equipment",
    description: "Support wiring harness test, high-voltage, continuity, short-circuit, pull-force and inspection requirements with KD Engineers' testing portfolio.",
    icon: ShieldCheck,
    items: [
      "Wiring Harness Testing Board / Bench",
      "Wiring Harness Testing Bench",
      "Wiring Harness Testing Fixtures / Modules",
      "Wiring Harness Testing Fixtures",
    ],
  },
  {
    id: "assembly",
    title: "02 — Harness Assembly Aids",
    description: "Bring repeatable assembly support closer to the line through assembly boards, fixtures, guidance, conveyors and verification solutions.",
    icon: Cpu,
    items: [
      "Digitization Assembly Wiring System (DWS)",
      "Assembly Board with LED Guided",
      "Assembly Conveyor",
    ],
  },
  {
    id: "crimping",
    title: "03 — Terminal Crimping Solutions",
    description: "Explore crimping presses, applicators, stripping and crimping equipment for terminal processing operations.",
    icon: Wrench,
    items: [
      "KDE-3.0 Fully Automatic Both End Crimping Machine with Seal Insertion",
      "Automatic Servo Terminal Crimping Press",
      "Custom SKD11 Crimping Applicators & Tooling Dies",
    ],
  },
  {
    id: "processing",
    title: "04 — Wiring Harness Processing Machines",
    description: "Cover wire and cable cutting, stripping, length measuring, twisting, welding and customized wire processing requirements.",
    icon: FileText,
    items: [
      "Automatic Precision Wire Cut & Strip Machine",
      "Wire Stripping & Twisting Machine",
      "Ultrasonic Wire Welding & Tinning System",
    ],
  },
];

const TECHNICAL_SUPPORT = [
  {
    title: "Installation & Commissioning",
    points: ["On-site machine installation", "Applicator & tool setting support", "Trial runs & production validation"],
  },
  {
    title: "After-sales Support",
    points: ["Preventive & breakdown maintenance", "Annual Maintenance Contracts (AMC)", "Spare parts supply & support"],
  },
  {
    title: "Customization & Engineering Support",
    points: ["Machine modification as per customer process", "Line balancing & productivity improvement", "Cost reduction & cycle time optimization"],
  },
  {
    title: "Technical Consultation",
    points: ["Wiring harness process consulting", "Machine selection support", "Production layout planning"],
  },
  {
    title: "Training & Skill Development",
    points: ["Operator & maintenance training", "Process optimization guidance", "Safety & best-practice training"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HERO SECTION */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <Overline color="text-[#fd0000]">Process-Oriented Engineering</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.02]">
                  Engineering around the <span className="text-[#fd0000]">process challenge.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                  KD Engineers&apos; solutions connect every stage of wiring harness manufacturing — from wire preparation and crimping to assembly guidance and automated electrical testing.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOLUTIONS CATEGORIES GRID */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-16">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Solution Categories</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-[#0A0A0A]">
                Comprehensive capabilities across the harness line.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SOLUTIONS_CATEGORIES.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <Reveal key={cat.id} delay={idx * 0.1} className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 md:p-10 rounded-xs flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-[#fd0000]">
                        <IconComp size={22} />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">{cat.title}</span>
                      </div>
                      <p className="text-[#525252] font-light text-sm leading-relaxed">{cat.description}</p>
                      
                      <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                        <span className="font-mono text-[11px] font-bold text-[#0A0A0A] uppercase tracking-wider block mb-2">Featured Equipment:</span>
                        {cat.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#525252]">
                            <span className="h-1.5 w-1.5 bg-[#fd0000] rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#fd0000] transition-colors pt-2"
                    >
                      Explore Products <ArrowUpRight size={14} />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECHNICAL SUPPORT / LIFECYCLE SUPPORT */}
        <section className="py-16 md:py-24 bg-[#0A0A0A] text-white border-t border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="max-w-2xl">
              <Overline color="text-[#fd0000]">Production Lifecycle Support</Overline>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight mt-3 text-white">
                The work continues after machine selection.
              </h2>
              <p className="text-white/60 font-light text-sm mt-3 leading-relaxed">
                Technical support from installation and commissioning through maintenance, operator training, and process optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECHNICAL_SUPPORT.map((ts, idx) => (
                <div key={ts.title} className="bg-[#171717] border border-white/10 p-6 sm:p-8 rounded-xs space-y-4">
                  <span className="font-mono text-xs text-[#fd0000] font-bold uppercase tracking-wider">0{idx + 1}</span>
                  <h3 className="font-display text-lg font-medium text-white">{ts.title}</h3>
                  <ul className="space-y-2 border-t border-white/10 pt-4">
                    {ts.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-white/70 font-light">
                        <CheckCircle2 size={14} className="text-[#fd0000] shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
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
                Looking for a custom solution for your production floor?
              </h3>
              <p className="text-[#525252] text-sm font-light mt-1">
                Our application engineers are available to review your wire specifications and floor layout.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 text-sm font-medium hover:bg-[#fd0000] transition-colors shrink-0"
            >
              Request Technical Consultation <PhoneCall size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
