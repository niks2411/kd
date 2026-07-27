"use client";

import React from "react";
import { Lightbulb, Leaf, ShieldAlert, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

interface CommitmentSectionProps {
  onOpenQuoteModal: () => void;
}

export default function CommitmentSection({ onOpenQuoteModal }: CommitmentSectionProps) {
  const commitments = [
    {
      title: "Research & Innovation",
      icon: <Lightbulb size={24} color="#1e40af" />,
      desc: "Innovation drives our engineering philosophy. We continuously improve our products by adopting new manufacturing technologies, automation techniques, and engineering methodologies to ensure our customers benefit from future-ready solutions.",
      bullets: ["Next-gen motion controllers", "Predictive maintenance sensors", "Adaptive wire feeding algorithms"],
    },
    {
      title: "Sustainable Manufacturing",
      icon: <Leaf size={24} color="#059669" />,
      desc: "Modern manufacturing requires responsible engineering. We design machines that improve operational efficiency while reducing material wastage, minimizing energy consumption, and supporting eco-friendly production.",
      bullets: ["Zero-scrap strip algorithms", "Low-power standby modes", "Recyclable heavy-grade steel construction"],
    },
    {
      title: "Operator Safety Standards",
      icon: <ShieldAlert size={24} color="#0284c7" />,
      desc: "Operator safety remains a priority throughout machine development. Our equipment incorporates protective guards, dual emergency stops, and electrical surge protection.",
      bullets: ["Light-curtain safety barriers", "Dual-channel emergency stop circuit", "Enclosed cutter & crimping dies"],
    },
    {
      title: "Customer Partnership",
      icon: <HeartHandshake size={24} color="#7c3aed" />,
      desc: "At KD Engineers, every customer relationship extends far beyond machine delivery. We provide long-term service partnerships, operator training, and rapid spare parts dispatch.",
      bullets: ["On-site technician dispatch", "Original spare parts inventory", "Scheduled preventive maintenance"],
    },
  ];

  return (
    <section id="quality-safety" style={{ padding: "100px 0", background: "#ffffff", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#1e40af",
              marginBottom: "0.5rem",
            }}
          >
            RESPONSIBLE ENGINEERING
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Innovation, Safety & <span className="gradient-text">Sustainability</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            We don't simply manufacture machines—we build long-term partnerships that help industries achieve manufacturing excellence safely and sustainably.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {commitments.map((c) => (
            <div
              key={c.title}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: "16px",
                padding: "2rem",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ padding: "0.6rem", borderRadius: "10px", background: "#eff6ff" }}>{c.icon}</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0f172a" }}>{c.title}</h3>
              </div>

              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{c.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {c.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#334155" }}>
                    <CheckCircle2 size={15} color="#1e40af" /> {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ready to Transform Banner */}
        <div
          style={{
            borderRadius: "20px",
            padding: "3.5rem 2rem",
            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
            border: "1px solid #93c5fd",
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(30, 64, 175, 0.25)",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Ready to Transform Your Manufacturing Facility?
          </h2>
          <p style={{ color: "#e0e7ff", fontSize: "1.1rem", maxWidth: "750px", margin: "0 auto 2rem auto" }}>
            Whether you require a single wire processing machine or a fully integrated automated production line, KD Engineers India Private Limited has the expertise, technology, and commitment to deliver the right solution.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={onOpenQuoteModal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#ffffff",
                color: "#1e3a8a",
                fontWeight: 700,
                fontSize: "1.05rem",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
            >
              Let's Build Smarter Manufacturing Together <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
