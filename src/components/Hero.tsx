"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Zap, Award, Activity } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [activePromise, setActivePromise] = useState<number>(0);

  const promises = [
    { title: "Advanced Engineering Solutions", desc: "Customized multi-axis motion and state-of-the-art industrial processing." },
    { title: "Precision Manufacturing", desc: "Tolerances down to ±0.01mm for flawless crimping and wire prep." },
    { title: "Innovative Automation", desc: "Integrated PLC/HMI controls for high-speed automated assembly lines." },
    { title: "Reliable Technical Support", desc: "Lifetime technical assistance, spare parts, and on-site operator training." },
    { title: "Customized Industrial Solutions", desc: "Tailored machine configurations built for your specific production line." },
  ];

  return (
    <section
      style={{
        paddingTop: "150px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
      className="bg-radial-gradient"
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="hero-grid">
          {/* Hero Content */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "30px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                color: "#1e40af",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              <Zap size={15} /> Engineering the Future of Wire Harness Manufacturing
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1px",
                color: "#0f172a",
                marginBottom: "1.25rem",
              }}
            >
              Precision Engineering. <br />
              <span className="gradient-text">Intelligent Automation.</span> <br />
              Manufacturing Excellence.
            </h1>

            <p
              style={{
                color: "#475569",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "640px",
              }}
            >
              KD Engineers India Private Limited is a trusted manufacturer and solution provider of advanced wire harness processing machines, industrial automation systems, testing equipment, and precision engineering solutions. For over two decades, we have empowered global manufacturers to build faster, smarter, and with uncompromising quality.
            </p>

            {/* Interactive Promise Pills */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "0.75rem" }}>
                Our Core Promises to Industry:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {promises.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setActivePromise(idx)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      background: activePromise === idx ? "#1e40af" : "#ffffff",
                      border: activePromise === idx ? "1px solid #1e40af" : "1px solid #e2e8f0",
                      color: activePromise === idx ? "#ffffff" : "#475569",
                      boxShadow: activePromise === idx ? "0 4px 12px rgba(30, 64, 175, 0.2)" : "var(--shadow-sm)",
                    }}
                  >
                    <CheckCircle2 size={14} color={activePromise === idx ? "#ffffff" : "#64748b"} />
                    {p.title}
                  </button>
                ))}
              </div>
              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "0.85rem 1.15rem",
                  borderRadius: "8px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "4px solid #1e40af",
                  fontSize: "0.92rem",
                  color: "#334155",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {promises[activePromise].desc}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#products" className="btn-primary" style={{ fontSize: "1rem" }}>
                Explore Our Solutions <ArrowRight size={18} />
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-secondary"
                style={{ fontSize: "1rem" }}
              >
                Request a Custom Quote
              </button>
            </div>
          </div>

          {/* Hero Visual Card / Machine Showcase */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-panel"
              style={{
                borderRadius: "16px",
                padding: "0.75rem",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid #cbd5e1",
                position: "relative",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "380px",
                  background: "#f1f5f9",
                }}
              >
                <img
                  src="/hero_industrial.png"
                  alt="KD Engineers Wire Harness Automation Machine"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* HUD Overlay Specs */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#1e40af",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <Activity size={14} className="status-beacon" />
                  AUTOMATED LINE: OPERATIONAL
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    right: "1rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(12px)",
                    padding: "1rem",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.5rem",
                    textAlign: "center",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>CRIMP ACCURACY</div>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "#059669", fontFamily: "var(--font-mono)" }}>
                      ±0.01 mm
                    </div>
                  </div>
                  <div style={{ borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>MAX SPEED</div>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1e40af", fontFamily: "var(--font-mono)" }}>
                      4,500 PPH
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>PLC CONTROLLER</div>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0284c7", fontFamily: "var(--font-mono)" }}>
                      SMART HMI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              style={{
                position: "absolute",
                top: "-1rem",
                right: "-1rem",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Award size={24} color="#1e40af" />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>20+ Years</div>
                <div style={{ fontSize: "0.7rem", color: "#64748b" }}>Manufacturing Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
