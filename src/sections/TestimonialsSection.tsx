// TITLE: TestimonialsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "120px 20px",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: theme.text,
          marginBottom: "64px",
        }}
      >
        {t.testiTitle}
      </h2>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {t.testimonials.map((testi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              flex: "1 1 300px",
              backgroundColor: theme.surface,
              padding: "40px",
              borderRadius: "16px",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                color: theme.primary,
                lineHeight: "1",
                display: "block",
                marginBottom: "16px",
              }}
            >
              "
            </span>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: theme.text,
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              {testi.quote}
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: theme.primary,
                margin: 0,
              }}
            >
              — {testi.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
