"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";

export default function ProductSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredProducts = [
    {
      id: "kd-9000",
      code: "KD-SERVO 9000 MAX",
      name: "Fully Automatic Wire Harness Processing Center",
      tagline: "Ultra-High Speed Dual-End Cutting, Stripping & Crimping",
      speed: "4,500 PPH",
      accuracy: "±0.01 mm",
      wireRange: "AWG 8 - 32",
      image: "/hero_industrial.png",
      tag: "FLAGSHIP AUTOMATION",
    },
    {
      id: "kd-crimp-pro",
      code: "KD-CRIMP ULTRA 4.0T",
      name: "Precision Terminal Crimping Machine",
      tagline: "20 kN Servo Crimping Press with Integrated CFA Monitor",
      speed: "5,000 PPH",
      accuracy: "±0.005 mm",
      wireRange: "AWG 10 - 28",
      image: "/hero_industrial.png",
      tag: "ZERO-DEFECT CRIMPER",
    },
    {
      id: "kd-cable-hd",
      code: "KD-CABLE HD-25",
      name: "Heavy-Duty Multi-Core Cable Processing System",
      tagline: "Rotary Jacket Stripping, Inkjet Marking & Length Measuring",
      speed: "3,200 PPH",
      accuracy: "±0.02 mm",
      wireRange: "Max 25mm Dia",
      image: "/hero_industrial.png",
      tag: "HEAVY INDUSTRIAL",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const current = featuredProducts[activeSlide];

  return (
    <div style={{ position: "relative" }}>
      {/* Active Product Showcase Hero Frame */}
      <div
        className="nike-card slider-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          background: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        {/* Left Info Column */}
        <div style={{ padding: "3.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="nike-badge">
                <Zap size={13} color="#1e40af" /> {current.tag}
              </span>
              <span style={{ fontSize: "0.8rem", color: "#737373", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                MODEL: {current.code}
              </span>
            </div>

            <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", color: "#000000", lineHeight: 1.1, marginBottom: "1rem" }}>
              {current.name}
            </h3>

            <p style={{ color: "#404040", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
              {current.tagline}
            </p>

            {/* Spec Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2.5rem", background: "#f5f5f5", padding: "1.25rem", borderRadius: "14px", border: "1px solid #e5e5e5" }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#737373", textTransform: "uppercase", fontWeight: 800 }}>SPEED</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1e40af", fontFamily: "var(--font-mono)" }}>
                  {current.speed}
                </div>
              </div>
              <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "1rem" }}>
                <div style={{ fontSize: "0.7rem", color: "#737373", textTransform: "uppercase", fontWeight: 800 }}>ACCURACY</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#000000", fontFamily: "var(--font-mono)" }}>
                  {current.accuracy}
                </div>
              </div>
              <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "1rem" }}>
                <div style={{ fontSize: "0.7rem", color: "#737373", textTransform: "uppercase", fontWeight: 800 }}>RANGE</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#d97706", fontFamily: "var(--font-mono)" }}>
                  {current.wireRange}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link href="/products" className="btn-nike-black">
              EXPLORE SPECS <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-nike-outline">
              GET PRICE QUOTE
            </Link>
          </div>
        </div>

        {/* Right Image Frame Column */}
        <div style={{ position: "relative", minHeight: "380px", background: "#f5f5f5", overflow: "hidden" }}>
          <img
            src={current.image}
            alt={current.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Navigation Controls Overlay */}
          <div style={{ position: "absolute", bottom: "2rem", right: "2rem", display: "flex", gap: "0.75rem", zIndex: 10 }}>
            <button
              onClick={prevSlide}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#000000",
                border: "none",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .slider-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </div>
  );
}
