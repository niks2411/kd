"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { IMAGES } from "@/lib/data";

interface ChapterProps {
  n: string;
  title: string;
  children: ReactNode;
  img: string;
  flip?: boolean;
}

const Chapter = ({ n, title, children, img, flip }: ChapterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden aspect-[4/3] group border border-[#E5E7EB]">
          <motion.img style={{ y }} src={img} alt={title} className="absolute inset-0 h-[116%] w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700" />
          <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] bg-[#F9FAFB]/90 px-3 py-1 text-[#0A0A0A]">CH. {n}</span>
        </div>
      </div>
      <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
        <div className="relative">
          <span className="font-display text-[9rem] leading-none font-extralight text-[#E5E7EB] absolute -top-24 -left-4 select-none pointer-events-none">{n}</span>
          <Reveal>
            <h3 className="font-display text-4xl sm:text-5xl font-light tracking-tight mb-6 relative text-[#0A0A0A]">{title}</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-[#525252] font-light leading-relaxed text-base md:text-lg max-w-xl">{children}</div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export const About = () => (
  <section id="about" className="py-28 md:py-40 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#F9FAFB]" data-testid="about">
    <div className="mb-20 md:mb-28 max-w-4xl">
      <Reveal><Overline color="text-[#002FA7]">About KD Engineers</Overline></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-6 leading-[1.02] text-[#0A0A0A]">
          Engineering excellence built on <span className="text-[#002FA7]">innovation.</span>
        </h2>
      </Reveal>
    </div>

    <div className="space-y-28 md:space-y-40">
      <Chapter n="01" title="Two decades of precision" img={IMAGES.about}>
        <p>One of India's trusted engineering companies specializing in wire harness processing technology, industrial automation and precision manufacturing solutions.</p>
        <p>Our journey has always been driven by one purpose — to simplify manufacturing while helping businesses achieve higher productivity, greater accuracy and improved operational efficiency.</p>
      </Chapter>

      <Chapter n="02" title="Intelligent by design" img={IMAGES.lab} flip>
        <p>We design and manufacture advanced machinery capable of meeting the changing demands of modern production facilities.</p>
        <p>Our solutions combine intelligent automation, precision engineering, robust construction and user-friendly operation — enabling manufacturers to reduce production costs while improving product quality.</p>
      </Chapter>
    </div>

    {/* Vision & Mission */}
    <div className="grid md:grid-cols-2 gap-px bg-[#E5E7EB] mt-28 md:mt-40 border border-[#E5E7EB]">
      {[
        { k: "Our Vision", t: "The most trusted engineering partner", b: "To deliver innovative automation technologies, precision machinery and world-class engineering solutions that shape the future of industrial manufacturing." },
        { k: "Our Mission", t: "Empower manufacturers, everywhere", b: "To improve production efficiency, reduce downtime, enhance product quality and create long-term value through continuous innovation and dedicated after-sales support." },
      ].map((v, i) => (
        <Reveal key={v.k} delay={i * 0.1} className="bg-[#F9FAFB] p-10 md:p-16">
          <Overline color="text-[#E53E3E]">{v.k}</Overline>
          <h4 className="font-display text-2xl md:text-3xl font-medium mt-6 mb-4 tracking-tight text-[#0A0A0A]">{v.t}</h4>
          <p className="text-[#525252] font-light leading-relaxed">{v.b}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
