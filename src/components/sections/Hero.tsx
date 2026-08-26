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
    <section ref={ref} id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-44 pb-12 bg-[#ffffff]" data-testid="hero">
      {/* Parallax hero background image constrained strictly to right 44% */}
      <motion.div style={{ y, scale }} className="absolute top-0 right-0 h-full w-full lg:w-[44%] overflow-hidden">
        <img src={IMAGES.hero} alt="Precision engineering" className="h-full w-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff]/50 lg:via-[#ffffff]/20 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 70% 40%, transparent 40%, rgba(10,10,10,0.2) 100%)" }} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 md:px-12">
        <motion.div style={{ opacity: fade }}>


          {/* Refined headline scale & clean line block hierarchy */}
          <div className="max-w-full lg:max-w-[54%]">
            <h1 className="font-display uppercase font-medium tracking-tight leading-[1.02] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#0A0A0A]">
              <MaskLine delay={0.25}>KD</MaskLine>
              <MaskLine delay={0.4}>ENGINEERS</MaskLine>
              <MaskLine delay={0.55} className="text-[#fd0000]">the Future of</MaskLine>
              <MaskLine delay={0.7}>Wire Harness</MaskLine>
              <MaskLine delay={0.85}>Manufacturing</MaskLine>
            </h1>
          </div>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="lg:col-span-6 text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#525252] max-w-xl"
            >
              KD Engineers delivers advanced wire processing machines, wiring harness assembly systems, testing solutions, and customized industrial automation for manufacturers who demand higher productivity, consistent quality, and scalable production.
              <span className="block mt-2 font-medium text-[#0A0A0A]">
                From Wire to Finished Harness — We Engineer the Complete Process.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.9 }}
              className="lg:col-span-6 lg:col-start-7 flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                data-testid="hero-explore-btn"
                className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-7 py-4 text-sm font-medium hover:bg-[#fd0000] transition-colors duration-300 shadow-sm"
              >
                Explore Our Solutions
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/contact"
                data-testid="hero-quote-btn"
                className="group inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] px-7 py-4 text-sm font-medium hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
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
            className="mt-12 hidden md:flex flex-wrap gap-x-8 gap-y-2 border-t border-[#E5E7EB] pt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#525252]"
          >
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#fd0000]" />{p}</li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-6 right-6 md:right-12 z-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#525252]">
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
