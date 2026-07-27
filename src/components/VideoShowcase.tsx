"use client";

import React, { useState } from "react";
import { Play, Pause, Maximize2, Volume2, VolumeX, ShieldCheck, Activity, Cpu } from "lucide-react";

interface VideoShowcaseProps {
  title?: string;
  subtitle?: string;
  posterImage?: string;
}

export default function VideoShowcase({
  title = "Automated Wire Harness Machine Demonstration",
  subtitle = "High-speed multi-process cutting, stripping, and terminal crimping center in action.",
  posterImage = "/hero_industrial.png",
}: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid var(--border-light)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
        background: "#090d16",
        position: "relative",
      }}
    >
      {/* 16:9 Video Frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 Aspect Ratio
          background: "#050811",
          overflow: "hidden",
        }}
      >
        {/* Background Media Image / Video Feed */}
        <img
          src={posterImage}
          alt={title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isPlaying ? 0.95 : 0.85,
            transition: "opacity 0.5s ease",
            transform: isPlaying ? "scale(1.02)" : "scale(1.0)",
          }}
        />

        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isPlaying
              ? "linear-gradient(to top, rgba(9, 13, 22, 0.7) 0%, rgba(9, 13, 22, 0.1) 60%, rgba(9, 13, 22, 0.4) 100%)"
              : "rgba(9, 13, 22, 0.45)",
            transition: "all 0.3s ease",
          }}
        />

        {/* Center Big Play Button (when paused) */}
        {!isPlaying && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              zIndex: 10,
            }}
          >
            <button
              onClick={() => setIsPlaying(true)}
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "none",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.background = "var(--primary-accent)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1.0)";
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "var(--primary)";
              }}
            >
              <Play size={36} style={{ marginLeft: "4px" }} />
            </button>
            <div
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.5px",
                background: "rgba(9, 13, 22, 0.75)",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                backdropFilter: "blur(8px)",
              }}
            >
              Click to Play Operational Video
            </div>
          </div>
        )}

        {/* Top HUD Telemetry Bar */}
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "1.5rem",
            right: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(9, 13, 22, 0.8)",
              backdropFilter: "blur(12px)",
              padding: "0.5rem 1rem",
              borderRadius: "30px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <Activity size={14} color="#059669" className="status-beacon" />
            {isPlaying ? "LIVE FEED: 60 FPS 4K DEMO" : "LIVE MACHINE DEMO READY"}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(9, 13, 22, 0.8)",
              backdropFilter: "blur(12px)",
              padding: "0.4rem 0.85rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#94a3b8",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <Cpu size={14} color="#38bdf8" /> MODEL: KDE-9000-SERVO
          </div>
        </div>

        {/* Bottom Video Controls Bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "1.5rem",
            background: "linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0) 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            zIndex: 10,
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h4 style={{ color: "#ffffff", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              {title}
            </h4>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{subtitle}</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
              }}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
