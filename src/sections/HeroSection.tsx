import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "160px 20px 100px 20px",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "900px", width: "100%", zIndex: 2 }}
      >
        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: 800,
            color: theme.text,
            lineHeight: "1.1",
            letterSpacing: "-2px",
            marginBottom: "24px",
          }}
        >
          {t.heroTitle}
          <span
            style={{
              color: theme.primary,
              borderBottom: `6px solid ${theme.surface}`,
            }}
          >
            {t.heroTitleHighlight}
          </span>
          {t.heroTitleEnd}
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: theme.textSecondary,
            marginBottom: "40px",
            maxWidth: "700px",
            margin: "0 auto 40px auto",
            lineHeight: "1.6",
          }}
        >
          {t.heroSub}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: theme.primaryHover }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: theme.primary,
              color: "#ffffff",
              padding: "18px 36px",
              fontSize: "1.1rem",
              fontWeight: 600,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(15, 44, 89, 0.2)",
            }}
          >
            {t.heroCta}
          </motion.button>
          <span style={{ fontSize: "0.9rem", color: theme.textSecondary }}>
            {t.heroSubCta}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
