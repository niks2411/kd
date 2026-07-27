"use client";

import React, { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

interface ProductItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  features: string[];
  specs: { [key: string]: string };
}

interface ProductsSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const categories = [
    "All",
    "Wire Processing",
    "Wire Harness",
    "Terminal Crimping",
    "Cable Processing",
    "Testing Equipment",
    "PCB Processing",
    "Laser Systems",
    "Industrial Automation",
  ];

  const products: ProductItem[] = [
    {
      id: "wire-processing",
      category: "Wire Processing",
      name: "Automatic Wire Processing Machine Series",
      tagline: "High-speed, accurate, and efficient wire preparation for all industrial cable types.",
      description:
        "Designed for high-speed, accurate, and efficient cable preparation across various applications. Built for both small-scale production and high-volume manufacturing, our machines ensure exceptional precision while minimizing material wastage.",
      capabilities: [
        "Wire Cutting",
        "Wire Stripping",
        "Wire Twisting",
        "Wire Tinning",
        "Wire Crimping",
        "Wire Bending",
        "Multi-Core Cable Processing",
        "Automatic Wire Feeding",
      ],
      features: ["Programmable length setting", "Multi-layer stripping", "High-torque servo drives", "Zero-waste cutting algorithm"],
      specs: {
        "Wire Gauge Range": "AWG 8 to AWG 32 (0.03mm² - 10mm²)",
        "Max Cutting Length": "99,999 mm",
        "Processing Speed": "Up to 5,000 pcs / hr",
        "Feeding Accuracy": "± (0.002 x L) mm",
      },
    },
    {
      id: "wire-harness",
      category: "Wire Harness",
      name: "Fully Automatic Wire Harness Processing Center",
      tagline: "Automates multiple manufacturing processes within a single production cycle.",
      description:
        "Our advanced wire harness machines are engineered to automate cutting, stripping, terminal crimping, and quality check operations in one seamless automated workflow.",
      capabilities: [
        "Automotive Wiring Harness",
        "Electric Vehicle Harness",
        "Industrial Harness Assembly",
        "Control Panel Wiring",
        "Appliance Manufacturing",
      ],
      features: [
        "Fully Automatic Operation",
        "High-Speed Dual-End Crimping",
        "Intelligent Control Systems",
        "Integrated Crimp Force Monitoring",
        "Automatic Seal Insertion",
      ],
      specs: {
        "Cycle Speed": "3,800 to 4,500 terminals/hr",
        "Crimp Force": "20 kN Servo Press",
        "Control Interface": "12.1-inch Color Touchscreen",
        "Quality Monitoring": "Inline CFA (Crimp Force Analyzer)",
      },
    },
    {
      id: "terminal-crimping",
      category: "Terminal Crimping",
      name: "Precision Terminal Crimping Machine",
      tagline: "Delivers accurate terminal connections with excellent repeatability and long-term reliability.",
      description:
        "Our crimping solutions ensure consistent electrical and mechanical connectivity across open-barrel and closed-barrel terminals.",
      capabilities: [
        "Automotive Connectors",
        "Industrial Terminals",
        "Flag Terminals",
        "Loose-Piece Crimping",
        "Chain Terminal Crimping",
      ],
      features: [
        "Accurate Crimp Force Control",
        "High Production Speed",
        "Reduced Human Error",
        "Stable Heavy-Duty Frame",
        "Ultra-Quiet Servo Drive",
      ],
      specs: {
        "Crimping Capacity": "2.0 Ton / 4.0 Ton Servo",
        "Stroke Length": "30mm / 40mm Adjustable",
        "Noise Level": "< 68 dB",
        "Repeatability": "±0.01 mm",
      },
    },
    {
      id: "cable-processing",
      category: "Cable Processing Equipment",
      name: "Heavy-Duty Cable Processing Equipment",
      tagline: "Specialized equipment for processing complex multi-conductor and shielded cables.",
      description:
        "Provides precise processing solutions for multi-core cables, coax, and heavy power cables used in industrial and automotive sectors.",
      capabilities: [
        "Multi-Core Cable Cutting",
        "Outer Jacket Stripping",
        "Cable Measuring & Feeding",
        "Cable Marking & Inkjet Printing",
        "Connector Assembly Integration",
      ],
      features: [
        "Rotary stripping head",
        "Programmable blade depth",
        "Non-marking belt feeding system",
        "Inline inkjet marking sync",
      ],
      specs: {
        "Cable Diameter": "Max 25 mm Outer Dia",
        "Stripping Length": "Up to 500 mm",
        "Blade Material": "Tungsten Carbide Steel",
        "Memory Slots": "100 Production Programs",
      },
    },
    {
      id: "testing-equipment",
      category: "Testing Equipment",
      name: "Harness Inspection & Testing Systems",
      tagline: "Comprehensive testing benches ensuring 100% component quality compliance.",
      description:
        "Quality inspection plays a vital role in manufacturing excellence. Our testing systems guarantee zero electrical or mechanical defects before dispatch.",
      capabilities: [
        "Pull Force Testing",
        "Voltage Test Benches",
        "Continuity & Short Circuit Testing",
        "Functional Logic Testing",
        "Harness Inspection Systems",
      ],
      features: [
        "Automated pull-test graphs",
        "High-voltage insulation resistance testing",
        "Custom fixture blocks",
        "Traceability label generator",
      ],
      specs: {
        "Test Voltage": "DC 12V to 1500V",
        "Continuity Test Time": "10ms / 512 Points",
        "Pull Force Range": "0 to 1000 N",
        "Data Export": "USB / Ethernet / CSV",
      },
    },
    {
      id: "pcb-processing",
      category: "PCB Processing",
      name: "Precision PCB Depaneling & Processing Systems",
      tagline: "Clean, accurate, and environmentally friendly cutting for electronic manufacturing.",
      description:
        "High-precision depaneling and router systems engineered for stress-free PCB cutting across high-density electronic assemblies.",
      capabilities: [
        "Consumer Electronics PCBs",
        "LED Aluminum Core Boards",
        "Electronic Assembly Lines",
        "Industrial Electronics Control Boards",
      ],
      features: [
        "Dust-free suction system",
        "High-speed spindle (60,000 RPM)",
        "CCD Vision alignment system",
        "Stress-free routing blades",
      ],
      specs: {
        "Spindle Speed": "60,000 RPM",
        "Cutting Accuracy": "±0.02 mm",
        "Max Board Size": "450 x 400 mm",
        "Vision Resolution": "5 Megapixel Camera",
      },
    },
    {
      id: "laser-systems",
      category: "Laser Systems",
      name: "Industrial Laser Processing Systems",
      tagline: "Advanced laser technology delivering unmatched precision for cutting, welding, and marking.",
      description:
        "State-of-the-art fiber and UV laser equipment for micro-processing, cable shield stripping, and permanent barcode marking.",
      capabilities: ["Laser Cable Shield Stripping", "Laser Micro Welding", "Laser Barcode & Serial Marking", "Precision Material Processing"],
      features: ["Non-contact laser processing", "Zero tool wear", "Sub-micron precision beam", "High-speed galvo scanner"],
      specs: {
        "Laser Source": "Fiber / UV / CO2 Laser",
        "Marking Speed": "Up to 12,000 mm/sec",
        "Wavelength": "1064 nm / 355 nm",
        "Lifespan": "100,000 Operating Hours",
      },
    },
    {
      id: "industrial-automation",
      category: "Industrial Automation",
      name: "Custom Industrial Automation & Robotic Lines",
      tagline: "Turnkey automated assembly lines, robotic integrators, and custom material handling.",
      description:
        "Automation has become essential for improving productivity. We build tailored industrial automation solutions to streamline complex factory operations.",
      capabilities: [
        "Material Handling Systems",
        "Robotic Arm Integration",
        "Automated Harness Assembly",
        "Precision Conveyor Systems",
        "Custom Industrial Machinery",
      ],
      features: [
        "Multi-axis articulated robots",
        "PLC + SCADA integration",
        "Automated vision inspection",
        "Safety light curtains & enclosures",
      ],
      specs: {
        "PLC Brands": "Siemens / Omron / Mitsubishi",
        "Safety Compliance": "CE / ISO Standard",
        "Payload Capacity": "Custom 5kg - 500kg",
        "Cycle Time": "Optimized per production flow",
      },
    },
  ];

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="products" style={{ padding: "100px 0", background: "#ffffff", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 3rem auto" }}>
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
            OUR PRODUCT PORTFOLIO
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Comprehensive Engineering Solutions for <span className="gradient-text">Industrial Manufacturing</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem" }}>
            KD Engineers offers a wide range of advanced machinery designed to improve productivity, reduce manual operations, and deliver consistent manufacturing quality.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: selectedCategory === cat ? "#1e40af" : "#f8fafc",
                color: selectedCategory === cat ? "#ffffff" : "#475569",
                border: selectedCategory === cat ? "none" : "1px solid #e2e8f0",
                boxShadow: selectedCategory === cat ? "0 4px 14px rgba(30, 64, 175, 0.2)" : "var(--shadow-sm)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: "14px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#1e40af",
                      background: "#eff6ff",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "4px",
                    }}
                  >
                    {p.category}
                  </span>
                  <Zap size={16} color="#0284c7" />
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{p.name}</h3>

                <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6, marginBottom: "1.25rem" }}>{p.tagline}</p>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#94a3b8", marginBottom: "0.5rem" }}>
                    Key Capabilities:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {p.capabilities.slice(0, 4).map((cap) => (
                      <span
                        key={cap}
                        style={{
                          fontSize: "0.75rem",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          color: "#334155",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                    {p.capabilities.length > 4 && (
                      <span style={{ fontSize: "0.75rem", color: "#1e40af", padding: "0.2rem 0.3rem", fontWeight: 600 }}>
                        +{p.capabilities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={() => setSelectedProductModal(p)}
                  className="btn-secondary"
                  style={{ flex: 1, fontSize: "0.85rem", justifyContent: "center", padding: "0.55rem" }}
                >
                  View Details & Specs
                </button>
                <button
                  onClick={() => onOpenQuoteModal(p.name)}
                  className="btn-primary"
                  style={{ fontSize: "0.85rem", padding: "0.55rem 0.85rem" }}
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="modal-overlay" onClick={() => setSelectedProductModal(null)}>
          <div
            className="glass-panel animate-fade-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "750px",
              width: "100%",
              borderRadius: "16px",
              padding: "2rem",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#1e40af",
                    background: "#eff6ff",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "4px",
                  }}
                >
                  {selectedProductModal.category}
                </span>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginTop: "0.5rem" }}>
                  {selectedProductModal.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  color: "#64748b",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {selectedProductModal.description}
            </p>

            {/* Capabilities list */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>
                Capabilities & Applications:
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                {selectedProductModal.capabilities.map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#475569", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={15} color="#059669" /> {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Features & Technical Specs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <h5 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0284c7", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  Key Features
                </h5>
                <ul style={{ paddingLeft: "1rem", color: "#334155", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {selectedProductModal.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <h5 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e40af", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  Technical Specs
                </h5>
                <div style={{ fontSize: "0.85rem", color: "#334155" }}>
                  {Object.entries(selectedProductModal.specs).map(([key, val]) => (
                    <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "0.25rem 0", borderBottom: "1px solid #e2e8f0" }}>
                      <span style={{ color: "#64748b" }}>{key}:</span>
                      <span style={{ fontWeight: 600, color: "#0f172a", fontFamily: "var(--font-mono)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => {
                  const pName = selectedProductModal.name;
                  setSelectedProductModal(null);
                  onOpenQuoteModal(pName);
                }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Request Machine Customization & Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
