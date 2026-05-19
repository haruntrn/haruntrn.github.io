// TITLE: ServicesSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Zap, Server, Code } from "lucide-react";

const capabilities = [
  {
    icon: <Zap size={28} />,
    title: "Electronics Engineering",
    items: [
      "Custom electronic system design",
      "PCB design & layout (Altium, KiCad, etc.)",
      "Analog & digital circuit design",
      "Power systems & control electronics",
      "Hardware prototyping & validation",
    ],
  },
  {
    icon: <Server size={28} />,
    title: "Embedded & Firmware",
    items: [
      "Firmware development (C/C++)",
      "Microcontrollers & embedded platforms",
      "Sensor integration & control systems",
      "Communication protocols (UART, SPI, I2C, CAN)",
    ],
  },
  {
    icon: <Code size={28} />,
    title: "Software Development",
    items: [
      "Web & mobile applications",
      "Backend systems & APIs",
      "Cloud & IoT platforms",
      "Data dashboards & system integration",
    ],
  },
];

export const OutsourcingServicesSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      style={{
        padding: "100px 20px",
        backgroundColor: theme.surface,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1200px;
            width: 100%;
            margin-top: 60px;
          }
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: theme.text,
          textAlign: "center",
          margin: 0,
        }}
      >
        Our Capabilities
      </motion.h2>

      <div className="services-grid">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
              backgroundColor: theme.background,
              padding: "40px",
              borderRadius: "24px",
              border: `1px solid ${theme.textSecondary}22`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ color: theme.primary, marginBottom: "20px" }}>
              {cap.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: "20px",
              }}
            >
              {cap.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {cap.items.map((item, j) => (
                <li
                  key={j}
                  style={{
                    color: theme.textSecondary,
                    fontSize: "0.95rem",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: theme.primary, fontWeight: "bold" }}>
                    —
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: "60px",
          maxWidth: "800px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: `${theme.primary}11`,
          borderRadius: "12px",
          border: `1px solid ${theme.primary}33`,
        }}
      >
        <span style={{ fontWeight: 700, color: theme.text }}>
          Selected Experience Includes:{" "}
        </span>
        <span style={{ color: theme.textSecondary }}>
          Energy systems, battery technologies, industrial electronics, IoT
          devices, and custom hardware products.
        </span>
      </motion.div>
    </section>
  );
};
