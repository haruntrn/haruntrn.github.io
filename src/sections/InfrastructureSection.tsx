// TITLE: InfrastructureSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const InfrastructureSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "120px 20px",
        backgroundColor: theme.darkSection,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              color: theme.darkSectionText,
              marginBottom: "16px",
            }}
          >
            {t.infraTitle}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t.infraSub}
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {t.infra.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "40px",
                borderRadius: "16px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: theme.darkSectionText,
                  marginBottom: "12px",
                }}
              >
                {block.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
