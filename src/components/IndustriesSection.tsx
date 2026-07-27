"use client";

import React, { useState } from "react";
import { Car, Zap, Plane, Cpu, Factory, Stethoscope, Radio, Sun, Home, ChevronRight } from "lucide-react";

interface IndustriesSectionProps {
  onOpenQuoteModal: (industryName?: string) => void;
}

export default function IndustriesSection({ onOpenQuoteModal }: IndustriesSectionProps) {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car size={26} color="#1e40af" />,
      tag: "High Volume & ISO Compliance",
      desc: "High-performance wire harness solutions for passenger vehicles, commercial vehicles, and automotive component manufacturers.",
      applications: "Engine harnesses, ABS wiring, door modules, lighting assembly.",
    },
    {
      id: "ev",
      name: "Electric Vehicles (EV)",
      icon: <Zap size={26} color="#0284c7" />,
      tag: "High Voltage & Battery Packs",
      desc: "Advanced cable processing and automation solutions supporting next-generation EV powertrain and battery manufacturing.",
      applications: "BMS wiring, high-voltage orange cables, charging port assembly.",
    },
    {
      id: "aerospace",
      name: "Aerospace",
      icon: <Plane size={26} color="#2563eb" />,
      tag: "Ultra Precision & Zero Defect",
      desc: "Precision engineering systems designed for demanding aerospace applications requiring exceptional reliability and zero tolerance.",
      applications: "Avionics harnesses, radar cables, flight control systems.",
    },
    {
      id: "electronics",
      name: "Electronics Manufacturing",
      icon: <Cpu size={26} color="#059669" />,
      tag: "Micro Crimping & SMT",
      desc: "Complete processing solutions for USB cables, connectors, micro-pitch electronic assemblies, and PCB depaneling.",
      applications: "USB-C assemblies, FPC cables, power supply harnesses.",
    },
    {
      id: "automation",
      name: "Industrial Automation",
      icon: <Factory size={26} color="#7c3aed" />,
      tag: "Turnkey Robotics & SCADA",
      desc: "Customized engineering solutions that improve production efficiency across industrial manufacturing facilities.",
      applications: "Robotic arm harnesses, PLC control cabinet wiring, conveyor systems.",
    },
    {
      id: "medical",
      name: "Medical Equipment",
      icon: <Stethoscope size={26} color="#0284c7" />,
      tag: "Cleanroom & Biocompatible",
      desc: "Precision cable processing and testing systems supporting critical medical device manufacturing.",
      applications: "Patient monitors, imaging equipment cables, diagnostic leads.",
    },
    {
      id: "telecom",
      name: "Telecommunications",
      icon: <Radio size={26} color="#d97706" />,
      tag: "High Frequency & Fiber Sync",
      desc: "Reliable wire processing technology for communication equipment, 5G towers, and networking manufacturers.",
      applications: "Coaxial cables, fiber patch cords, base station harnesses.",
    },
    {
      id: "renewable",
      name: "Renewable Energy",
      icon: <Sun size={26} color="#ca8a04" />,
      tag: "Heavy-Gauge Solar & Storage",
      desc: "Robust processing solutions supporting solar inverter, battery storage, and sustainable energy manufacturing.",
      applications: "Solar array cabling, BESS high-current interconnects.",
    },
    {
      id: "appliances",
      name: "Consumer Appliances",
      icon: <Home size={26} color="#0284c7" />,
      tag: "Automated Mass Production",
      desc: "High-volume manufacturing systems for home appliance, HVAC, and consumer electrical equipment manufacturers.",
      applications: "Washing machine harnesses, refrigerator wiring, HVAC systems.",
    },
  ];

  return (
    <section id="industries" style={{ padding: "100px 0", background: "#f8fafc", position: "relative" }}>
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
            INDUSTRIES WE SERVE
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Engineered for <span className="gradient-text-cyan">Global Manufacturing Sectors</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            Our engineering expertise supports leading manufacturers across diverse, high-demand industrial sectors worldwide.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="glass-panel glass-panel-hover"
              onMouseEnter={() => setHoveredIndustry(ind.id)}
              onMouseLeave={() => setHoveredIndustry(null)}
              style={{
                borderRadius: "14px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff",
                border: hoveredIndustry === ind.id ? "1px solid #1e40af" : "1px solid #e2e8f0",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "#eff6ff",
                      border: "1px solid #dbeafe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ind.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#1e40af",
                      background: "#eff6ff",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    {ind.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{ind.name}</h3>

                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem" }}>{ind.desc}</p>

                <div
                  style={{
                    background: "#f8fafc",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    fontSize: "0.8rem",
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span style={{ color: "#1e40af", fontWeight: 700 }}>Key Applications:</span> {ind.applications}
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(ind.name)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#1e40af",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: 0,
                }}
              >
                Inquire for {ind.name} <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
