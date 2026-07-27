"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calculator, Send } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct }: QuoteModalProps) {
  const [productName, setProductName] = useState(defaultProduct || "Automatic Wire Processing Machine Series");
  const [wireGauge, setWireGauge] = useState("AWG 14 - AWG 26 (0.13mm² - 2.5mm²)");
  const [monthlyVolume, setMonthlyVolume] = useState<number>(25000);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Automotive",
    notes: "",
  });

  if (!isOpen) return null;

  // Estimation calculation
  const manualHours = Math.round((monthlyVolume * 15) / 3600); // 15s per manual prep
  const automatedHours = Math.round(monthlyVolume / 4500); // 4500 PPH machine speed
  const hoursSaved = Math.max(0, manualHours - automatedHours);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "850px",
          width: "100%",
          borderRadius: "20px",
          padding: "2rem",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* Modal Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#1e40af", letterSpacing: "1px" }}>
              KD ENGINEERS INDIA PRIVATE LIMITED
            </div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginTop: "0.2rem" }}>
              Request Technical Consultation & Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              color: "#64748b",
              padding: "0.5rem",
              cursor: "pointer",
              display: "flex",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#ecfdf5",
                border: "2px solid #059669",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
              }}
            >
              <CheckCircle2 size={40} color="#059669" />
            </div>

            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>
              Quote Request Submitted Successfully!
            </h3>
            <p style={{ color: "#475569", fontSize: "1.05rem", maxWidth: "550px", margin: "0 auto 1.5rem auto" }}>
              Thank you, <strong style={{ color: "#0f172a" }}>{formData.name || "Customer"}</strong>. Our technical engineering team at KD Engineers has received your inquiry for <strong style={{ color: "#1e40af" }}>{productName}</strong>.
            </p>

            <div
              style={{
                background: "#f8fafc",
                padding: "1rem 1.5rem",
                borderRadius: "10px",
                display: "inline-block",
                marginBottom: "2rem",
                border: "1px solid #e2e8f0",
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                color: "#059669",
                fontWeight: 700,
              }}
            >
              RFQ Reference: #KDE-{Math.floor(100000 + Math.random() * 900000)} | Response SLA: &lt; 4 Hours
            </div>

            <div>
              <button onClick={onClose} className="btn-primary">
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="modal-grid">
            {/* Form Column */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Product Selection */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#334155", marginBottom: "0.35rem" }}>
                  Select Solution / Machine Type *
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                >
                  <option value="Automatic Wire Processing Machine Series">Automatic Wire Processing Machine Series</option>
                  <option value="Fully Automatic Wire Harness Processing Center">Fully Automatic Wire Harness Processing Center</option>
                  <option value="Precision Terminal Crimping Machine">Precision Terminal Crimping Machine</option>
                  <option value="Heavy-Duty Cable Processing Equipment">Heavy-Duty Cable Processing Equipment</option>
                  <option value="Harness Inspection & Testing Systems">Harness Inspection & Testing Systems</option>
                  <option value="Precision PCB Depaneling & Processing Systems">Precision PCB Depaneling & Processing Systems</option>
                  <option value="Industrial Laser Processing Systems">Industrial Laser Processing Systems</option>
                  <option value="Custom Industrial Automation & Robotic Lines">Custom Industrial Automation & Robotic Lines</option>
                </select>
              </div>

              {/* Wire Spec & Industry */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#334155", marginBottom: "0.35rem" }}>
                    Wire / Cable Gauge Range
                  </label>
                  <select
                    value={wireGauge}
                    onChange={(e) => setWireGauge(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.85rem",
                    }}
                  >
                    <option value="AWG 8 - AWG 18 (Heavy Power)">AWG 8 - AWG 18 (Heavy Power / EV)</option>
                    <option value="AWG 14 - AWG 26 (Standard Automotive)">AWG 14 - AWG 26 (Standard Automotive)</option>
                    <option value="AWG 24 - AWG 32 (Micro Electronics)">AWG 24 - AWG 32 (Micro Electronics)</option>
                    <option value="Multi-Core / Shielded Cable">Multi-Core / Shielded Cable</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#334155", marginBottom: "0.35rem" }}>
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.85rem",
                    }}
                  >
                    <option value="Automotive">Automotive</option>
                    <option value="Electric Vehicles (EV)">Electric Vehicles (EV)</option>
                    <option value="Aerospace">Aerospace</option>
                    <option value="Electronics Manufacturing">Electronics Manufacturing</option>
                    <option value="Industrial Automation">Industrial Automation</option>
                    <option value="Medical Devices">Medical Devices</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Consumer Appliances">Consumer Appliances</option>
                  </select>
                </div>
              </div>

              {/* Volume Slider */}
              <div style={{ background: "#eff6ff", padding: "1rem", borderRadius: "10px", border: "1px solid #bfdbfe" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1e40af" }}>
                    Estimated Monthly Production Volume:
                  </label>
                  <span style={{ fontWeight: 800, fontFamily: "var(--font-mono)", color: "#0f172a" }}>
                    {monthlyVolume.toLocaleString()} units / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#1e40af", cursor: "pointer" }}
                />

                {/* Instant Efficiency Estimation */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.75rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px dashed #bfdbfe",
                    fontSize: "0.8rem",
                    color: "#475569",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Calculator size={14} color="#0284c7" /> Estimated Machine Time Saved:
                  </span>
                  <span style={{ color: "#059669", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                    ~{hoursSaved} Labor Hours / month
                  </span>
                </div>
              </div>

              {/* Name & Company */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", fontWeight: 500 }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: "6px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", fontWeight: 500 }}>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Precision Wire Solutions Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: "6px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", fontWeight: 500 }}>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: "6px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", fontWeight: 500 }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      borderRadius: "6px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", fontWeight: 500 }}>
                  Custom Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your terminal types, strip lengths, or line automation targets..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "6px",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.85rem", marginTop: "0.5rem" }}>
                Submit Official RFQ & Technical Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
