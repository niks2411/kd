"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const VIDEOS = [
  { id: 1, src: "/1.mp4" },
  { id: 2, src: "/2.mp4" },
  { id: 3, src: "/3.mp4" },
];

export const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = VIDEOS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentIndex]);

  return (
    <section className="py-0 bg-[#0A0A0A] overflow-hidden w-full border-b border-[#262626]" data-testid="video-showcase">
      <div className="w-full px-0">
        
        {/* Full-Bleed 100% Viewport Edge-to-Edge Video Stage */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-[#0A0A0A] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.video
              key={currentVideo.src}
              ref={videoRef}
              src={currentVideo.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onEnded={handleNext}
            />
          </AnimatePresence>

          {/* Minimal Controls Bar (Play/Pause & Mute) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-2 bg-[#0A0A0A]/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <button
              onClick={togglePlay}
              className="p-2 text-white hover:text-[#fd0000] transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 text-white hover:text-[#fd0000] transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          {/* Transparent Background Nav Arrows (No Background Box) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white/80 hover:text-[#fd0000] p-2 transition-all duration-300 hover:scale-125 drop-shadow-lg"
            aria-label="Previous video"
          >
            <ChevronLeft size={44} strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white/80 hover:text-[#fd0000] p-2 transition-all duration-300 hover:scale-125 drop-shadow-lg"
            aria-label="Next video"
          >
            <ChevronRight size={44} strokeWidth={1.5} />
          </button>

          {/* Bottom Clean Slide Progress Dots */}
          <div className="absolute bottom-5 inset-x-0 z-10 flex justify-center items-center gap-2.5">
            {VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  idx === currentIndex ? "w-10 bg-[#fd0000]" : "w-2.5 bg-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
