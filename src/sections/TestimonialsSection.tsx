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
      id="testimonials"
      style={{
        padding: "120px 20px",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .testimonials-grid {
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            justify-content: center;
          }
          .testimonial-card {
            background-color: ${theme.surface};
            padding: 48px 40px;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            border: 1px solid ${theme.textSecondary}11;
            transition: transform 0.3s ease;
          }
          @media (max-width: 1024px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            section {
               padding: 80px 20px !important;
            }
            .testimonials-header {
              font-size: 2.2rem !important;
              margin-bottom: 48px !important;
            }
            .testimonials-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .testimonial-card {
              padding: 32px !important;
            }
          }
        `}
      </style>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="testimonials-header"
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          color: theme.text,
          marginBottom: "72px",
          textAlign: "center",
          letterSpacing: "-1px",
        }}
      >
        {t.testiTitle}
      </motion.h2>

      <div className="testimonials-grid">
        {t.testimonials.map((testi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="testimonial-card"
          >
            <span
              style={{
                fontSize: "4rem",
                color: theme.primary,
                lineHeight: "0.5",
                display: "block",
                marginBottom: "24px",
                fontFamily: "serif",
                opacity: 0.3,
              }}
            >
              “
            </span>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: theme.text,
                lineHeight: "1.6",
                marginBottom: "32px",
                flexGrow: 1,
              }}
            >
              {testi.quote}
            </p>
            <div
              style={{
                marginTop: "auto",
                borderTop: `1px solid ${theme.textSecondary}22`,
                paddingTop: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: theme.primary,
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {testi.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
