// TITLE: StatsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const StatsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: theme.surface,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {t.stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ textAlign: "center", flex: "1 1 200px" }}
          >
            <span
              style={{
                fontSize: "3.5rem",
                fontWeight: 800,
                color: theme.text,
                display: "block",
                marginBottom: "8px",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "1rem",
                color: theme.textSecondary,
                fontWeight: 500,
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
