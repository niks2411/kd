"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Users, Cpu, Activity, Award } from "lucide-react";

export default function QualityAndPhilosophy() {
  const qualitySteps = [
    "Incoming Material Inspection",
    "Precision Manufacturing",
    "Component Verification",
    "Machine Calibration",
    "Performance Testing",
    "Functional Inspection",
    "Final Quality Validation",
  ];

  const threeP = [
    {
      title: "People",
      badge: "ENGINEERING TEAM",
      icon: <Users size={28} color="#1e40af" />,
      desc: "Our experienced engineers, technicians, and support professionals work collaboratively to deliver reliable engineering solutions and exceptional customer service.",
    },
    {
      title: "Process",
      badge: "STANDARDIZED QA",
      icon: <Cpu size={28} color="#0284c7" />,
      desc: "Structured engineering practices, standardized manufacturing procedures, and disciplined quality systems ensure consistency in every project.",
    },
    {
      title: "Performance",
      badge: "MAXIMUM UPTIME",
      icon: <Activity size={28} color="#059669" />,
      desc: "Our machines are built for speed, accuracy, durability, and long-term operational efficiency, helping customers maximize productivity and minimize downtime.",
    },
  ];

  return (
    <section id="philosophy" style={{ padding: "100px 0", background: "#f8fafc", position: "relative" }}>
      <div className="container">
        {/* 3P Philosophy Section */}
        <div style={{ marginBottom: "6rem" }}>
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
              OUR GUIDING PRINCIPLE
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
              The <span className="gradient-text">3P Philosophy</span>
            </h2>
            <p style={{ color: "#475569", fontSize: "1.05rem" }}>
              People, Process, and Performance form the foundation of our engineering identity and operational commitment.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {threeP.map((item) => (
              <div
                key={item.title}
                className="glass-panel glass-panel-hover"
                style={{
                  borderRadius: "16px",
                  padding: "2rem",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ padding: "0.75rem", borderRadius: "12px", background: "#eff6ff" }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1e40af", fontFamily: "var(--font-mono)" }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>

                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Protocol Section */}
        <div
          className="glass-panel"
          style={{
            borderRadius: "20px",
            padding: "3rem 2rem",
            background: "#ffffff",
            border: "1px solid #a7f3d0",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }} className="qa-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#059669", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                <ShieldCheck size={18} /> UNCOMPROMISING STANDARDS
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                7-Point Quality Assurance Protocol
              </h3>
              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Quality is at the heart of every engineering solution we deliver. Every machine is thoroughly evaluated across a 7-stage quality checklist before dispatch to ensure dependable operation and long-term reliability.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  background: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#059669",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <Award size={16} /> 100% Pre-Delivery Factory Acceptance Testing (FAT)
              </div>
            </div>

            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem" }}>
                {qualitySteps.map((qStep, idx) => (
                  <div
                    key={qStep}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      fontSize: "0.9rem",
                      color: "#0f172a",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#059669", fontWeight: 700 }}>
                      0{idx + 1}
                    </span>
                    <CheckCircle2 size={16} color="#059669" />
                    <span>{qStep}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .qa-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
