// TITLE: SectorsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import cargo_containers from "../assets/cargo-containers.jpeg";

export const SectorsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="sectors"
      style={{
        padding: "64px 20px",
        backgroundImage: `linear-gradient(to bottom, ${theme.surface}F2, ${theme.surface}F2), url(${cargo_containers})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        borderBottom: `1px solid ${theme.textSecondary}11`,
        borderTop: `1px solid ${theme.textSecondary}11`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .sectors-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .sector-pill {
            padding: 18px 36px;
            background-color: ${theme.background};
            border: 1px solid ${theme.textSecondary}22;
            border-radius: 100px;
            font-size: 1rem;
            font-weight: 700;
            color: ${theme.textSecondary};
            text-transform: uppercase;
            letter-spacing: 1.5px;
            cursor: default;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
      

          @media (max-width: 768px) {
            section {
              min-height: auto !important;
              padding: 80px 20px !important;
              background-attachment: scroll !important; /* Fixed bg issues on mobile */
            }
            .sectors-container {
              gap: 12px;
            }
            .sector-pill {
              padding: 12px 24px !important;
              font-size: 0.85rem !important;
              letter-spacing: 0.5px !important;
            }
            .sectors-header {
              font-size: 0.9rem !important;
              margin-bottom: 30px !important;
            }
          }
        `}
      </style>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sectors-header"
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: theme.primary,
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "60px",
          }}
        >
          {t.sectorsTitle}
        </motion.h3>

        <div className="sectors-container">
          {t.sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{
                y: -6,
                backgroundColor: theme.primary,
                color: "#ffffff",
                borderColor: theme.primary,
                boxShadow: `0 15px 30px ${theme.primary}33`,
              }}
              className="sector-pill"
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
