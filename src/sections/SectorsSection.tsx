// TITLE: SectorsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const SectorsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: theme.surface,
        borderBottom: `1px solid ${theme.textSecondary}22`,
        borderTop: `1px solid ${theme.textSecondary}22`,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: theme.primary,
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "40px",
          }}
        >
          {t.sectorsTitle}
        </motion.h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {t.sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{
                y: -4,
                backgroundColor: theme.primary,
                color: theme.background,
                borderColor: theme.primary,
              }}
              style={{
                padding: "16px 32px",
                backgroundColor: theme.background,
                border: `1px solid ${theme.textSecondary}33`,
                borderRadius: "50px",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: theme.textSecondary,
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "default",
                boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
              }}
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
