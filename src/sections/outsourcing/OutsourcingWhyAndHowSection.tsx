// TITLE: WhyAndHowSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Users, DollarSign, Globe, CheckCircle } from "lucide-react";

const reasons = [
  { icon: <Users size={24} />, text: "Scalable Engineering Resources" },
  {
    icon: <DollarSign size={24} />,
    text: "Cost Efficiency (40–70% reduction)",
  },
  { icon: <Globe size={24} />, text: "U.S.-Based Communication" },
  { icon: <CheckCircle size={24} />, text: "Full Project Ownership" },
];

const steps = [
  { num: "01", title: "Discovery & Scope Definition" },
  { num: "02", title: "Engineering Team Setup" },
  { num: "03", title: "Development & Iteration" },
  { num: "04", title: "Delivery & Ongoing Support" },
];

export const OutsourcingWhyAndHowSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .split-container {
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
          .reasons-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 40px;
          }
          .step-item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px;
            border-bottom: 1px solid ${theme.surface};
          }
          @media (max-width: 900px) {
            .split-container { grid-template-columns: 1fr; gap: 60px; }
            .reasons-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <div className="split-container">
        {/* Why Agaspera */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: theme.text,
              margin: 0,
            }}
          >
            Why Companies Choose Agaspera
          </h2>
          <div className="reasons-grid">
            {reasons.map((reason, i) => (
              <div
                key={i}
                style={{
                  padding: "24px",
                  backgroundColor: theme.surface,
                  borderRadius: "16px",
                }}
              >
                <div style={{ color: theme.primary, marginBottom: "12px" }}>
                  {reason.icon}
                </div>
                <p
                  style={{
                    fontWeight: 600,
                    color: theme.text,
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: theme.text,
              margin: 0,
              marginBottom: "20px",
            }}
          >
            How It Works
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: theme.primary,
                    opacity: 0.5,
                  }}
                >
                  {step.num}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: theme.text,
                  }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
