"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { IMAGES } from "@/lib/data";

interface ChapterProps {
  n: string;
  tagline: string;
  title: string;
  highlight: string;
  children: ReactNode;
  img: string;
  flip?: boolean;
}

const Chapter = ({ n, tagline, title, highlight, children, img, flip }: ChapterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden aspect-[4/3] group border border-[#E5E7EB] rounded-xs shadow-2xs">
          <motion.img style={{ y }} src={img} alt={title} className="absolute inset-0 h-[116%] w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700" />
          <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] bg-[#0A0A0A] text-white px-3 py-1 font-bold">
            EXPERT {n}
          </span>
        </div>
      </div>
      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <div className="relative pt-10">
          <span className="font-display text-[8rem] sm:text-[9rem] leading-none font-extralight text-[#F3F4F6] absolute -top-12 -left-4 select-none pointer-events-none z-0">
            {n}
          </span>
          
          <div className="relative z-10 space-y-4">
            <Reveal>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#fd0000] block">
                {tagline}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">{title}</h3>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-[#525252] font-light leading-relaxed text-base md:text-lg max-w-xl">{children}</div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="inline-block pt-2 border-l-2 border-[#fd0000] pl-3 font-mono text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                {highlight}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = () => (
  <section id="about" className="py-16 md:py-24 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#ffffff]" data-testid="about">
    <div className="mb-20 md:mb-28 max-w-4xl space-y-4">
      <Reveal><Overline color="text-[#fd0000]">Three Core Expertises. One Engineering Standard.</Overline></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.02] text-[#0A0A0A]">
          Integrated Solutions for <span className="text-[#fd0000]">Wiring Harness Manufacturing</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed max-w-3xl">
          From testing and validation to harness assembly and precision machinery, KD Engineers provides integrated solutions designed to improve quality, productivity and process reliability across wiring harness manufacturing.
        </p>
      </Reveal>
    </div>

    <div className="space-y-28 md:space-y-36">
      {/* 01 Testing */}
      <Chapter
        n="01"
        tagline="VERIFY EVERY CONNECTION."
        title="Advanced Testing Solutions"
        highlight="Test with precision. Validate with confidence."
        img={IMAGES.machine3}
      >
        <p>
          KD Engineers develops precision testing systems and test benches designed to verify the electrical integrity, safety and reliability of wiring harnesses.
        </p>
        <p>
          From continuity and insulation testing to high-voltage and customized testing solutions, our systems help manufacturers identify defects, validate performance and maintain consistent quality.
        </p>
      </Chapter>

      {/* 02 Assembly */}
      <Chapter
        n="02"
        tagline="WHERE EVERY CONNECTION COMES TOGETHER."
        title="Harness Assembly Solutions"
        highlight="Designed for your process. Built for repeatability."
        img={IMAGES.lab}
        flip
      >
        <p>
          KD Engineers provides assembly boards, fixtures, jigs, workstations and customized assembly solutions engineered around your specific harness and production requirements.
        </p>
        <p>
          Our solutions enable organized workflows, repeatable processes and improved operator efficiency — turning complex harness assembly into a controlled and reliable production process.
        </p>
      </Chapter>

      {/* 03 Machineries */}
      <Chapter
        n="03"
        tagline="PRECISION THAT DRIVES PRODUCTION."
        title="Wire Processing & Automation Machinery"
        highlight="Precision in every cut. Consistency in every process."
        img={IMAGES.machine1}
      >
        <p>
          KD Engineers provides wire cutting, stripping, crimping and specialized processing machinery engineered for accuracy, repeatability and production efficiency.
        </p>
        <p>
          From individual processing machines to customized automated systems, we help manufacturers reduce process variation, improve productivity and build with greater consistency.
        </p>
      </Chapter>
    </div>

    {/* Vision & Mission */}
    <div className="grid md:grid-cols-2 gap-px bg-[#E5E7EB] mt-28 md:mt-36 border border-[#E5E7EB]">
      {[
        { k: "Our Vision", t: "The most trusted engineering partner", b: "To deliver innovative automation technologies, precision machinery and world-class engineering solutions that shape the future of industrial manufacturing." },
        { k: "Our Mission", t: "Empower manufacturers, everywhere", b: "To improve production efficiency, reduce downtime, enhance product quality and create long-term value through continuous innovation and dedicated after-sales support." },
      ].map((v, i) => (
        <Reveal key={v.k} delay={i * 0.1} className="bg-[#ffffff] p-10 md:p-16">
          <Overline color="text-[#fd0000]">{v.k}</Overline>
          <h4 className="font-display text-2xl md:text-3xl font-medium mt-6 mb-4 tracking-tight text-[#0A0A0A]">{v.t}</h4>
          <p className="text-[#525252] font-light leading-relaxed">{v.b}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
