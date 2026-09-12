"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

interface ExpertiseCard {
  n: string;
  tagline: string;
  title: string;
  description: string[];
  highlight: string;
  img: string;
}

const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    n: "01",
    tagline: "VERIFY EVERY CONNECTION.",
    title: "Advanced Testing Solutions",
    description: [
      "KD Engineers develops precision testing systems and test benches designed to verify the electrical integrity, safety and reliability of wiring harnesses.",
      "From continuity and insulation testing to high-voltage and customized testing solutions, our systems help manufacturers identify defects, validate performance and maintain consistent quality.",
    ],
    highlight: "Test with precision. Validate with confidence.",
    img: "/images/testing_bench_station.jpg",
  },
  {
    n: "02",
    tagline: "WHERE EVERY CONNECTION COMES TOGETHER.",
    title: "Harness Assembly Solutions",
    description: [
      "KD Engineers provides assembly boards, fixtures, jigs, workstations and customized assembly solutions engineered around your specific harness and production requirements.",
      "Our solutions enable organized workflows, repeatable processes and improved operator efficiency — turning complex harness assembly into a controlled and reliable production process.",
    ],
    highlight: "Designed for your process. Built for repeatability.",
    img: "/images/assembly_board_system.jpg",
  },
  {
    n: "03",
    tagline: "PRECISION THAT DRIVES PRODUCTION.",
    title: "Wire Processing & Automation Machinery",
    description: [
      "KD Engineers provides wire cutting, stripping, crimping and specialized processing machinery engineered for accuracy, repeatability and production efficiency.",
      "From individual processing machines to customized automated systems, we help manufacturers reduce process variation, improve productivity and build with greater consistency.",
    ],
    highlight: "Precision in every cut. Consistency in every process.",
    img: "/images/wire_processing_machine.jpg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -600 : 600,
    opacity: 0,
    scale: 0.95,
  }),
};

const ExpertiseSlideshow = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % EXPERTISE_CARDS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + EXPERTISE_CARDS.length) % EXPERTISE_CARDS.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const card = EXPERTISE_CARDS[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide container */}
      <div className="relative overflow-hidden border border-[#E5E7EB] bg-white rounded-sm shadow-xs" style={{ minHeight: 520 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-0 h-full"
          >
            {/* Image side */}
            <div className="lg:col-span-5 relative overflow-hidden group">
              <div className="relative h-full min-h-[280px] lg:min-h-[520px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
                />
                {/* Expert badge */}
                <span className="absolute top-5 left-5 font-mono text-xs tracking-[0.2em] bg-[#0A0A0A] text-white px-3 py-1.5 font-bold z-10 shadow-md">
                  EXPERT {card.n}
                </span>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:bg-gradient-to-r lg:from-transparent lg:to-white pointer-events-none" />
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
              {/* Big watermark number */}
              <span className="font-display text-[10rem] sm:text-[12rem] leading-none font-extralight text-[#F3F4F6] absolute -top-8 right-4 select-none pointer-events-none z-0">
                {card.n}
              </span>

              <div className="relative z-10 space-y-5">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#fd0000] block">
                  {card.tagline}
                </span>

                <h3 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-light tracking-tight text-[#0A0A0A] leading-tight">
                  {card.title}
                </h3>

                <div className="space-y-3 text-[#525252] font-light leading-relaxed text-base md:text-lg max-w-xl">
                  {card.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="inline-block pt-3 border-l-2 border-[#fd0000] pl-3 font-mono text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                  {card.highlight}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {EXPERTISE_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-2 rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width: active === i ? 32 : 8,
                background: active === i ? "#fd0000" : "#E5E7EB",
              }}
              aria-label={`Go to slide ${i + 1}`}
            >
              {/* Auto-progress bar inside active dot */}
              {active === i && !isPaused && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#fd0000]/40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <span className="font-mono text-xs tracking-[0.15em] text-[#525252] hidden sm:block">
          {String(active + 1).padStart(2, "0")} / {String(EXPERTISE_CARDS.length).padStart(2, "0")}
        </span>

        {/* Arrow navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#fd0000] hover:border-[#fd0000] transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const About = () => (
  <section id="about" className="py-16 md:py-24 mx-auto max-w-[1600px] px-6 md:px-12 bg-[#ffffff]" data-testid="about">
    <div className="mb-16 md:mb-20 max-w-4xl space-y-4">
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

    {/* Expertise slideshow */}
    <Reveal delay={0.15}>
      <ExpertiseSlideshow />
    </Reveal>

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
