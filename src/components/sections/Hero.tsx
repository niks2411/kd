"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLine, Overline } from "@/components/motion/Reveal";
import { PROMISES, IMAGES } from "@/lib/data";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-44 pb-12 bg-[#0A0A0A]" data-testid="hero">
      {/* Full width hero background video */}
      <motion.div style={{ y, scale }} className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with left directional gradient fade for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/65 to-black/30" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 md:px-12">
        <motion.div style={{ opacity: fade }}>


          {/* Refined headline scale & clean line block hierarchy */}
          <div className="max-w-full lg:max-w-[55%]">
            <h1 className="font-display uppercase font-bold tracking-tight leading-[1.05] text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] text-white">
              <MaskLine delay={0.25}>
                <span className="text-[#fd0000]">the Future</span> <span className="text-white">of</span>
              </MaskLine>
              <MaskLine delay={0.4}>Wire Harness</MaskLine>
              <MaskLine delay={0.55}>Manufacturing</MaskLine>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="text-base sm:text-[17px] font-sans font-normal leading-relaxed text-white/85"
            >
              KD Engineers delivers advanced wire processing machines, wiring harness assembly systems, testing solutions, and customized industrial automation for manufacturers who demand higher productivity, consistent quality, and scalable production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/products"
                data-testid="hero-explore-btn"
                className="group inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-7 py-4 text-sm font-medium hover:bg-[#fd0000] hover:text-white transition-colors duration-300 shadow-sm"
              >
                Explore Our Solutions
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/contact"
                data-testid="hero-quote-btn"
                className="group inline-flex items-center gap-3 border border-white text-white px-7 py-4 text-sm font-medium hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>

          {/* Promise ticker row */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 hidden md:flex flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/70"
          >
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#fd0000]" />{p}</li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-6 right-6 md:right-12 z-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60">
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
