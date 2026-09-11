"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, Volume2, VolumeX, ShieldCheck, Zap } from "lucide-react";
import { MaskLine } from "@/components/motion/Reveal";
import { PROMISES } from "@/lib/data";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="top" className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-28 sm:pt-36 pb-16 bg-[#ffffff] text-[#0A0A0A]" data-testid="hero">
      {/* Subtle Light Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/60 via-[#ffffff] to-[#ffffff] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb40_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb40_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Headline */}
            <h1 className="font-display uppercase font-extrabold tracking-tight leading-[1.04] text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] text-[#0A0A0A]">
              <MaskLine delay={0.25}>
                <span className="text-[#fd0000]">The Future</span> <span className="text-[#0A0A0A]">of</span>
              </MaskLine>
              <MaskLine delay={0.4}>Wire Harness</MaskLine>
              <MaskLine delay={0.55}>Manufacturing</MaskLine>
            </h1>

            {/* Subheadline / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-base sm:text-[17px] font-sans font-normal leading-relaxed text-slate-600 max-w-xl"
            >
              KD Engineers delivers advanced wire processing machines, wiring harness assembly systems, precision crimping equipment, and turnkey industrial automation for high-volume manufacturing.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Link
                href="/products"
                data-testid="hero-explore-btn"
                className="group inline-flex items-center gap-3 bg-[#fd0000] text-white px-7 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#0A0A0A] transition-all duration-300 shadow-md shadow-red-500/20 rounded-md"
              >
                Explore Solutions
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/contact"
                data-testid="hero-quote-btn"
                className="group inline-flex items-center gap-3 border border-slate-300 bg-slate-50 text-[#0A0A0A] px-7 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300 rounded-md shadow-2xs"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Compact Video Box (Shifted Upwards) */}
          <div className="lg:col-span-5 relative lg:-mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative group rounded-xl overflow-hidden border border-slate-200 bg-[#0A0A0A] shadow-xl shadow-slate-900/10 hover:border-red-400/50 hover:shadow-red-500/15 transition-all duration-500"
            >
              {/* Video Player Frame with Compact Sizing */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[390px] max-h-[420px] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Promises Row - Straight Horizontal Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6"
        >
          {PROMISES.map((p, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider whitespace-nowrap">
              <ShieldCheck size={16} className="text-[#fd0000] shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500"
      >
        Scroll <ArrowDown size={14} className="animate-bounce text-[#fd0000]" />
      </motion.div>
    </section>
  );
};

export default Hero;


