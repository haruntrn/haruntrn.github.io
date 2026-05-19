// TITLE: FinalCTA.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const FinalCTA: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: theme.primary,
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .final-cta-container {
            max-width: 1200px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
          }
          
          @media (max-width: 1024px) {
            .final-cta-container {
              flex-direction: column;
              text-align: center;
              gap: 48px;
            }
            
            .final-cta-actions {
              align-items: center !important;
              width: 100%;
            }

            .final-cta-title {
              font-size: 2.2rem !important;
              max-width: 100% !important;
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 80px 20px !important;
            }
            .final-cta-title {
              font-size: 1.8rem !important;
            }
            .final-cta-button {
              width: 100%;
              padding: 18px 32px !important;
            }
          }
        `}
      </style>

      <div className="final-cta-container">
        <h2
          className="final-cta-title"
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            color: theme.darkSectionText,
            margin: 0,
            maxWidth: "500px",
            lineHeight: "1.2",
          }}
        >
          {t.finalTitle}
        </h2>

        <div
          className="final-cta-actions"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <motion.a
            href="mailto:info@agaspera.com"
            target="_blank"
            className="final-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#ffffff",
              color: theme.darkSection,
              padding: "16px 32px",
              fontSize: "1.1rem",
              fontWeight: 700,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            {t.heroCta}
          </motion.a>
          <span
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}
          >
            {t.heroSubCta}
          </span>
        </div>
      </div>
    </section>
  );
};
