// TITLE: HeroSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const handleContactClick = () => {
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        minHeight: "60vh",
        padding: "120px 20px 80px 20px",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .hero-title {
            font-size: 5.5rem;
          }
          .hero-sub {
            font-size: 1.5rem;
          }
          @media (max-width: 1024px) {
            .hero-title {
              font-size: 4rem !important;
            }
          }
          @media (max-width: 768px) {
            section {
              padding-top: 80px !important;
              min-height: 70vh !important;
            }
            .hero-title {
              font-size: 2.75rem !important;
              letter-spacing: -1px !important;
            }
            .hero-sub {
              font-size: 1.15rem !important;
              margin-bottom: 40px !important;
            }
            .hero-cta {
              width: 100%;
              padding: 20px 32px !important;
              font-size: 1.1rem !important;
            }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: "1100px", width: "100%", zIndex: 2 }}
      >
        <h1
          className="hero-title"
          style={{
            fontWeight: 800,
            color: theme.text,
            lineHeight: "1.1",
            letterSpacing: "-2.5px",
            marginBottom: "32px",
          }}
        >
          {t.heroTitle}
          <span
            style={{
              color: theme.primary,
              display: "inline-block",
              position: "relative",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            {t.heroTitleHighlight}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                position: "absolute",
                bottom: "8px",
                left: 0,
                height: "8px",
                backgroundColor: `${theme.primary}22`,
                zIndex: -1,
              }}
            />
          </span>
          {t.heroTitleEnd}
        </h1>

        <p
          className="hero-sub"
          style={{
            color: theme.textSecondary,
            marginBottom: "56px",
            maxWidth: "800px",
            margin: "0 auto 56px auto",
            lineHeight: "1.6",
            fontWeight: 400,
          }}
        >
          {t.heroSub}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <motion.button
            className="hero-cta"
            onClick={handleContactClick}
            whileHover={{ scale: 1.02, backgroundColor: theme.primaryHover }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: theme.primary,
              color: "#ffffff",
              padding: "24px 48px",
              fontSize: "1.25rem",
              fontWeight: 700,
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(15, 44, 89, 0.2)",
            }}
          >
            {t.heroCta}
          </motion.button>

          <span
            style={{
              fontSize: "0.95rem",
              color: theme.textSecondary,
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            {t.heroSubCta}
          </span>
        </div>
      </motion.div>
    </section>
  );
};
