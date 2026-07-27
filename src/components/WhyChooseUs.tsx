"use client";

import React, { useState } from "react";
import { Award, Cpu, ShieldCheck, Wrench, Clock, Settings, ArrowRight } from "lucide-react";

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyChooseUs({ onOpenQuoteModal }: WhyChooseUsProps) {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number>(0);

  const advantages = [
    {
      title: "Decades of Engineering Experience",
      icon: <Award size={20} color="#1e40af" />,
      short: "20+ years understanding complex industrial manufacturing.",
      details:
        "Our experienced engineering team understands the complexities of industrial manufacturing and develops practical, reliable solutions tailored to exact customer requirements.",
      metrics: "20+ Years Dedicated R&D",
    },
    {
      title: "Customized Manufacturing Solutions",
      icon: <Settings size={20} color="#0284c7" />,
      short: "Tailored machinery for your exact production line.",
      details:
        "Every production line is different. We design customized machinery and automation systems that integrate seamlessly with existing manufacturing processes.",
      metrics: "100% Tailored Integrations",
    },
    {
      title: "Advanced Technology",
      icon: <Cpu size={20} color="#059669" />,
      short: "Modern engineering, intelligent PLC automation.",
      details:
        "We utilize modern engineering techniques, intelligent automation, precision manufacturing processes, and high-quality components to ensure exceptional machine performance.",
      metrics: "Next-Gen PLC & HMI Controls",
    },
    {
      title: "Quality Assurance",
      icon: <ShieldCheck size={20} color="#2563eb" />,
      short: "Rigorous inspection before machine delivery.",
      details:
        "Each machine undergoes rigorous inspection and comprehensive testing before delivery to ensure consistent quality and dependable operation.",
      metrics: "Zero-Defect Quality Standard",
    },
    {
      title: "Complete Technical Support",
      icon: <Wrench size={20} color="#d97706" />,
      short: "Installation, training, and 24/7 assistance.",
      details:
        "From installation and operator training to preventive maintenance and technical assistance, our dedicated support team remains available throughout the machine lifecycle.",
      metrics: "24/7 Lifecycle Support",
    },
    {
      title: "Long-Term Reliability",
      icon: <Clock size={20} color="#7c3aed" />,
      short: "Durable materials built for years of heavy operation.",
      details:
        "Our machines are built using durable materials, precision-engineered components, and proven manufacturing techniques to deliver years of reliable performance.",
      metrics: "99.8% Uptime SLA",
    },
  ];

  return (
    <section id="why-choose-us" style={{ padding: "100px 0", background: "#f8fafc", position: "relative" }}>
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
            Why Choose KD Engineers
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Trusted Engineering Partner for <span className="gradient-text">Modern Manufacturing</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            Choosing the right engineering partner is critical for achieving operational efficiency and maintaining consistent production quality.
          </p>
        </div>

        {/* Advantage Grid & Detail Panel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="advantage-layout">
          {/* Left Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {advantages.map((item, idx) => (
              <div
                key={item.title}
                onClick={() => setSelectedAdvantage(idx)}
                style={{
                  padding: "1.25rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: selectedAdvantage === idx ? "#eff6ff" : "#ffffff",
                  border: selectedAdvantage === idx ? "1px solid #1e40af" : "1px solid #e2e8f0",
                  boxShadow: selectedAdvantage === idx ? "0 4px 14px rgba(30, 64, 175, 0.12)" : "var(--shadow-sm)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: selectedAdvantage === idx ? "#1e40af" : "#0f172a" }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>{item.short}</p>
              </div>
            ))}
          </div>

          {/* Right Active Advantage Deep Dive */}
          <div
            className="glass-panel"
            style={{
              borderRadius: "16px",
              padding: "2rem",
              background: "#ffffff",
              border: "1px solid #93c5fd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ padding: "0.75rem", borderRadius: "10px", background: "#eff6ff" }}>
                  {advantages[selectedAdvantage].icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#1e40af", fontWeight: 700, textTransform: "uppercase" }}>
                    FEATURED ADVANTAGE
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a" }}>
                    {advantages[selectedAdvantage].title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {advantages[selectedAdvantage].details}
              </p>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "8px",
                  background: "#f8fafc",
                  borderLeft: "4px solid #1e40af",
                  fontSize: "0.95rem",
                  color: "#1e40af",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  marginBottom: "2rem",
                  borderTop: "1px solid #e2e8f0",
                  borderRight: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Benchmark Standard: {advantages[selectedAdvantage].metrics}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={onOpenQuoteModal} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Discuss Your Requirements <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .advantage-layout {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
