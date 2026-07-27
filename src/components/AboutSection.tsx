"use client";

import React, { useState } from "react";
import { Compass, Target, Lightbulb, Target as TargetIcon, Shield, Users, Trophy, Sparkles } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about");

  const coreValues = [
    {
      title: "Innovation",
      icon: <Lightbulb size={22} color="#d97706" />,
      desc: "We continuously invest in research and engineering to develop smarter manufacturing solutions that address evolving industry requirements.",
    },
    {
      title: "Precision",
      icon: <TargetIcon size={22} color="#0284c7" />,
      desc: "Accuracy is the foundation of everything we build. Every machine is designed to deliver reliable, repeatable, and high-performance results.",
    },
    {
      title: "Integrity",
      icon: <Shield size={22} color="#059669" />,
      desc: "We believe in transparency, honesty, and ethical business practices that build lasting relationships with customers and partners.",
    },
    {
      title: "Customer Success",
      icon: <Users size={22} color="#1e40af" />,
      desc: "Our success is measured by the success of our customers. Every solution is designed around their production goals and operational needs.",
    },
    {
      title: "Excellence",
      icon: <Trophy size={22} color="#7c3aed" />,
      desc: "We maintain uncompromising quality standards throughout design, manufacturing, testing, and dedicated after-sales customer support.",
    },
  ];

  return (
    <section id="about" style={{ padding: "100px 0", position: "relative", background: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
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
            About KD Engineers India Private Limited
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem" }}>
            Engineering Excellence Built on <span className="gradient-text">Innovation</span>
          </h2>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7 }}>
            KD Engineers India Private Limited has established itself as one of India's trusted engineering companies specializing in wire harness processing technology, industrial automation, and precision manufacturing solutions.
          </p>
        </div>

        {/* Vision / Mission / Overview Interactive Tabs */}
        <div
          className="glass-panel"
          style={{
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "4rem",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Tabs header */}
          <div style={{ display: "flex", gap: "1rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveTab("about")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                border: activeTab === "about" ? "1px solid #1e40af" : "1px solid #e2e8f0",
                background: activeTab === "about" ? "#1e40af" : "#f8fafc",
                color: activeTab === "about" ? "#ffffff" : "#475569",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Sparkles size={16} /> Our Legacy & Story
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                border: activeTab === "vision" ? "1px solid #1e40af" : "1px solid #e2e8f0",
                background: activeTab === "vision" ? "#1e40af" : "#f8fafc",
                color: activeTab === "vision" ? "#ffffff" : "#475569",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Compass size={16} /> Our Vision
            </button>

            <button
              onClick={() => setActiveTab("mission")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                border: activeTab === "mission" ? "1px solid #1e40af" : "1px solid #e2e8f0",
                background: activeTab === "mission" ? "#1e40af" : "#f8fafc",
                color: activeTab === "mission" ? "#ffffff" : "#475569",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <Target size={16} /> Our Mission
            </button>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in" style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.8 }}>
            {activeTab === "about" && (
              <div>
                <p style={{ marginBottom: "1rem" }}>
                  Our journey has always been driven by one purpose—to simplify manufacturing while helping businesses achieve higher productivity, greater accuracy, and improved operational efficiency.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  With years of engineering expertise and deep understanding of industrial manufacturing, we design and manufacture advanced machinery capable of meeting the changing demands of modern production facilities.
                </p>
                <p>
                  Our solutions combine intelligent automation, precision engineering, robust construction, and user-friendly operation, enabling manufacturers to reduce production costs while improving product quality. Every project reflects our commitment to engineering excellence and long-term customer relationships.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "#eff6ff", borderRadius: "10px" }}>
                    <Compass size={32} color="#1e40af" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                      Shaping the Future of Industrial Automation
                    </h3>
                    <p style={{ color: "#334155" }}>
                      To become the most trusted engineering partner for manufacturers by delivering innovative automation technologies, precision machinery, and world-class engineering solutions that shape the future of industrial manufacturing globally.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mission" && (
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ padding: "0.75rem", background: "#f0f9ff", borderRadius: "10px" }}>
                    <Target size={32} color="#0284c7" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                      Empowering Manufacturers Worldwide
                    </h3>
                    <p style={{ color: "#334155", marginBottom: "0.75rem" }}>
                      Our mission is to empower manufacturers with intelligent engineering solutions that improve production efficiency, reduce downtime, enhance product quality, and create long-term value for every customer.
                    </p>
                    <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
                      We strive to achieve this through continuous innovation, customer-focused engineering, advanced manufacturing practices, and dedicated after-sales support.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a" }}>Our Core Values</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", marginTop: "0.25rem" }}>
              The foundational principles guiding every machine we design and build.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="glass-panel glass-panel-hover"
                style={{
                  borderRadius: "12px",
                  padding: "1.5rem",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{val.icon}</div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                  {val.title}
                </h4>
                <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
