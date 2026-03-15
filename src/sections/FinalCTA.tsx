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
        backgroundColor: theme.darkSection,
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            color: theme.darkSectionText,
            margin: 0,
            maxWidth: "500px",
          }}
        >
          {t.finalTitle}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <motion.button
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
            }}
          >
            {t.heroCta}
          </motion.button>
          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
            {t.heroSubCta}
          </span>
        </div>
      </div>
    </section>
  );
};
