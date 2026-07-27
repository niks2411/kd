"use client";

import React from "react";
import { Award, Cpu, ShieldCheck, Globe, Wrench } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: <Award size={24} color="#1e40af" />, value: "20+", label: "Years of Engineering Expertise" },
    { icon: <Cpu size={24} color="#0284c7" />, value: "500+", label: "Automated Systems Deployed" },
    { icon: <ShieldCheck size={24} color="#059669" />, value: "99.9%", label: "Precision Repeatability Rate" },
    { icon: <Globe size={24} color="#2563eb" />, value: "9+", label: "Industrial Sectors Served" },
    { icon: <Wrench size={24} color="#d97706" />, value: "24/7", label: "Technical & Lifecycle Support" },
  ];

  return (
    <section
      style={{
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        background: "#f8fafc",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.2rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
