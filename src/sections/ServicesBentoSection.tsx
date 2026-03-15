// TITLE: ServicesBentoSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const ServicesBentoSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "120px 20px",
        backgroundColor: theme.background,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          @media (max-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            .bento-grid {
              grid-template-columns: 1fr;
            }
            .bento-item {
              grid-column: span 1 !important;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: "1200px", width: "100%" }}>
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
              color: theme.text,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            {t.servicesTitle}
          </h2>
        </motion.div>

        <div className="bento-grid">
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              className="bento-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover="hover"
              style={{
                backgroundColor: theme.surface,
                padding: "48px 40px",
                borderRadius: "24px",
                gridColumn: service.span === 2 ? "span 2" : "span 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${theme.textSecondary}15`,
                cursor: "pointer",
              }}
            >
              <motion.div
                variants={{
                  hover: { height: "6px" },
                }}
                initial={{ height: "0px" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: theme.primary,
                }}
              />

              <div style={{ marginBottom: "16px" }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: theme.text,
                    lineHeight: "1.2",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: theme.textSecondary,
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
