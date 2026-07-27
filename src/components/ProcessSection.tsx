"use client";

import React, { useState } from "react";
import { MessageSquare, Compass, Hammer, Layers, ShieldAlert, Truck, GraduationCap, Headphones, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Consultation",
      icon: <MessageSquare size={22} color="#1e40af" />,
      desc: "We understand customer requirements, production challenges, wire specifications, and manufacturing volume objectives.",
      deliverable: "Needs Analysis & Machine Scoping Document",
    },
    {
      num: "02",
      title: "Engineering Design",
      icon: <Compass size={22} color="#0284c7" />,
      desc: "Our engineers develop optimized machine CAD concepts, motion control schematics, and customized production solutions.",
      deliverable: "3D Assemblies & PLC Control Logic Blueprint",
    },
    {
      num: "03",
      title: "Manufacturing",
      icon: <Hammer size={22} color="#059669" />,
      desc: "Machines are manufactured using precision CNC machining, laser cutting, and high-quality industrial components.",
      deliverable: "Precision Mechanical & Electrical Fabrication",
    },
    {
      num: "04",
      title: "Assembly",
      icon: <Layers size={22} color="#2563eb" />,
      desc: "Every mechanical, pneumatic, and electrical sub-system is assembled under strict ISO quality control procedures.",
      deliverable: "Full Mechanical & Wiring Line Assembly",
    },
    {
      num: "05",
      title: "Testing & Validation",
      icon: <ShieldAlert size={22} color="#7c3aed" />,
      desc: "Comprehensive testing ensures crimp accuracy, pull force compliance, safety interlocks, and consistent machine performance.",
      deliverable: "Pre-Dispatch Test Certificate & Inspection Log",
    },
    {
      num: "06",
      title: "Installation & Commissioning",
      icon: <Truck size={22} color="#0284c7" />,
      desc: "Our technical experts install, integrate, and commission the equipment directly at your plant or shop floor.",
      deliverable: "On-Site Calibration & Line Integration",
    },
    {
      num: "07",
      title: "Operator Training",
      icon: <GraduationCap size={22} color="#d97706" />,
      desc: "Operators receive complete hands-on operational, programming, safety, and routine maintenance training.",
      deliverable: "Certified Operator & Maintenance Manuals",
    },
    {
      num: "08",
      title: "After-Sales Support",
      icon: <Headphones size={22} color="#059669" />,
      desc: "We continue supporting customers through preventive maintenance, genuine spare parts availability, and 24/7 hotline.",
      deliverable: "Lifetime Service Partnership & Warranty",
    },
  ];

  return (
    <section id="process" style={{ padding: "100px 0", background: "#ffffff", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#059669",
              marginBottom: "0.5rem",
            }}
          >
            OUR ENGINEERING PROCESS
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            From Concept to <span className="gradient-text">Complete Solution</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            Every machine project follows a structured engineering approach designed to deliver outstanding manufacturing results.
          </p>
        </div>

        {/* Timeline Stepper Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              style={{
                padding: "0.85rem 0.5rem",
                borderRadius: "10px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: activeStep === idx ? "#1e40af" : "#f8fafc",
                border: activeStep === idx ? "1px solid #1e40af" : "1px solid #e2e8f0",
                color: activeStep === idx ? "#ffffff" : "#475569",
                boxShadow: activeStep === idx ? "0 4px 12px rgba(30, 64, 175, 0.2)" : "var(--shadow-sm)",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: activeStep === idx ? "#93c5fd" : "#94a3b8" }}>
                STEP {s.num}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, marginTop: "0.2rem" }}>{s.title}</div>
            </button>
          ))}
        </div>

        {/* Step Detail Card */}
        <div
          className="glass-panel animate-fade-in"
          style={{
            borderRadius: "16px",
            padding: "2.5rem",
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ padding: "0.85rem", background: "#eff6ff", borderRadius: "12px" }}>
              {steps[activeStep].icon}
            </div>
            <div>
              <span style={{ fontSize: "0.8rem", color: "#1e40af", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                PHASE {steps[activeStep].num} OF 08
              </span>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a" }}>
                Step {steps[activeStep].num} – {steps[activeStep].title}
              </h3>
            </div>
          </div>

          <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: 1.8, marginBottom: "1.75rem" }}>
            {steps[activeStep].desc}
          </p>

          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "10px",
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderLeft: "4px solid #059669",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.95rem",
            }}
          >
            <CheckCircle2 size={20} color="#059669" />
            <div>
              <span style={{ color: "#047857", fontWeight: 600 }}>Key Phase Deliverable: </span>
              <span style={{ fontWeight: 700, color: "#065f46" }}>{steps[activeStep].deliverable}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
