"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Sparkles, Play, Pause } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface ReelItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

const REELS: ReelItem[] = [
  {
    id: 1,
    title: "Precision Cut & Strip",
    subtitle: "High-Speed Wire Processing",
    src: "/r1.mp4",
  },
  {
    id: 2,
    title: "Terminal Crimping",
    subtitle: "Servo Controlled Accuracy",
    src: "/r2.mp4",
  },
  {
    id: 3,
    title: "Harness Automation",
    subtitle: "Turnkey Industrial Assembly",
    src: "/r3.mp4",
  },
];

export const ReelsShowcase = () => {
  // Track mute state per reel card (all muted by default for browser autoplay policy)
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
  });

  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
  });

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const toggleMute = (id: number) => {
    setMutedStates((prev) => {
      const isMuted = !prev[id];
      if (videoRefs.current[id]) {
        videoRefs.current[id]!.muted = isMuted;
      }
      return { ...prev, [id]: isMuted };
    });
  };

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#ffffff] text-[#0A0A0A] overflow-hidden border-b border-[#E5E7EB]" data-testid="reels-showcase">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-xs shadow-md">
              <Sparkles size={14} /> FACTORY REELS
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0A0A0A]">
              Engineering Excellence <span className="font-normal text-[#fd0000]">In Motion</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-[#525252] font-light leading-relaxed">
              Watch our precision wire harness machinery, automatic terminal crimping presses, and assembly automation in action.
            </p>
          </Reveal>
        </div>

        {/* 3 Reels Grid matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REELS.map((reel, index) => {
            const isMuted = mutedStates[reel.id];
            const isPlaying = playingStates[reel.id];

            return (
              <Reveal key={reel.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[9/16] w-full bg-[#171717] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group select-none"
                >
                  {/* Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.src}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => togglePlay(reel.id)}
                  />

                  {/* Sound Toggle Button (Top Right matching screenshot) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(reel.id);
                    }}
                    className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white p-2.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  {/* Play/Pause Overlay Indicator on Click */}
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer"
                      onClick={() => togglePlay(reel.id)}
                    >
                      <div className="bg-[#fd0000] text-white p-4 rounded-full shadow-2xl">
                        <Play size={28} className="translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Gradient & Text Overlay (Matching reference image footer styling) */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none">
                    <span className="font-mono text-[11px] font-bold text-[#fd0000] uppercase tracking-wider mb-1">
                      {reel.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                      {reel.title}
                    </h3>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
