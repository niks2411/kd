import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { Calendar, MapPin, Sparkles, ArrowRight, Video, Mail } from "lucide-react";

export const metadata = {
  title: "Exhibitions & Events | KD Engineers India Pvt. Ltd.",
  description: "Meet KD Engineers at upcoming industrial exhibitions, trade shows, and live machinery demonstrations.",
};

const EVENT_TOPICS = [
  { title: "Exhibitions & Trade Shows", desc: "Live demonstrations of automatic crimping presses, cut & strip machinery, and testing benches." },
  { title: "Industry Conversations", desc: "Engage with our senior application engineers on wire harness automation and EV cable processing." },
  { title: "Machine Demonstrations", desc: "Hands-on trials and micro-section crimp force analysis demonstrations." },
  { title: "Engineering Updates", desc: "Product announcements, model upgrades, and new custom automation technology releases." },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-20 pb-0">
        {/* HERO BANNER */}
        <section className="relative bg-[#0A0A0A] text-white py-16 md:py-24 overflow-hidden border-b border-[#262626]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <Overline color="text-[#fd0000]">Trade Shows &amp; Industry Events</Overline>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.02]">
                  Meet KD Engineers at the <span className="text-[#fd0000]">next industry conversation.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                  Confirmed exhibition, trade-show, and product-launch records will be published here as dates are announced.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS STATUS */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] p-8 sm:p-12 rounded-xs space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#fd0000] uppercase tracking-wider bg-[#fd0000]/10 px-3 py-1 rounded-full">
                <Calendar size={14} /> Event Schedule Notice
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#0A0A0A]">
                Upcoming Event Information
              </h2>
              <p className="text-[#525252] font-light text-sm sm:text-base leading-relaxed">
                Confirmed exhibitions and industry events for 2026/2027 will appear here as dates are finalized. Please check back regularly or subscribe to receive event invitations directly to your email.
              </p>
            </div>

            {/* EVENT HIGHLIGHTS GRID */}
            <div className="space-y-6">
              <div className="max-w-2xl">
                <Overline color="text-[#fd0000]">Stay Connected</Overline>
                <h3 className="font-display text-2xl sm:text-3xl font-light tracking-tight mt-2 text-[#0A0A0A]">
                  What to expect at KD Engineers events.
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EVENT_TOPICS.map((topic) => (
                  <div key={topic.title} className="bg-[#ffffff] border border-[#E5E7EB] p-6 rounded-xs space-y-3">
                    <span className="h-2 w-2 bg-[#fd0000] rounded-full block mb-2" />
                    <h4 className="font-display text-lg font-medium text-[#0A0A0A]">{topic.title}</h4>
                    <p className="text-[#525252] font-light text-xs leading-relaxed">{topic.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#0A0A0A] text-white">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-light">
                Want a personalized machine demonstration at your factory?
              </h3>
              <p className="text-white/60 text-sm font-light mt-1">
                Our application team can arrange live machine trials and sample processing for your wire types.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#fd0000] text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-[#0A0A0A] transition-colors shrink-0"
            >
              Schedule Demonstration <Mail size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
