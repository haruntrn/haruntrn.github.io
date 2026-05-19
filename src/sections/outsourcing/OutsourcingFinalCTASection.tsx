// TITLE: FinalCTASection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Mail } from "lucide-react";

export const OutsourcingFinalCTASection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: theme.background,
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .cta-box {
            max-width: 1200px;
            width: 100%;
            background-color: ${theme.surface};
            border: 1px solid ${theme.textSecondary}22;
            border-radius: 32px;
            padding: 80px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.02);
          }
          .cta-title {
            font-size: 3.5rem;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }
          @media (max-width: 768px) {
            .cta-box { padding: 60px 20px; border-radius: 24px; }
            .cta-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="cta-box"
      >
        <div
          style={{
            padding: "16px",
            backgroundColor: `${theme.primary}15`,
            borderRadius: "50%",
            color: theme.primary,
            marginBottom: "24px",
          }}
        >
          <Mail size={32} />
        </div>

        <h2
          className="cta-title"
          style={{ fontWeight: 800, color: theme.text, margin: "0 0 20px 0" }}
        >
          Build Faster.{" "}
          <span style={{ color: theme.primary }}>Spend Smarter.</span>
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: theme.textSecondary,
            maxWidth: "600px",
            margin: "0 0 40px 0",
            lineHeight: 1.6,
          }}
        >
          Let’s discuss how we can support your next engineering project.
        </p>

        <motion.a
          href="mailto:info@agaspera.com"
          target="_blank"
          whileHover={{
            scale: 1.05,
            boxShadow: `0 10px 25px -5px ${theme.primary}66`,
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "18px 40px",
            backgroundColor: theme.primary,
            color: "#ffffff",
            borderRadius: "14px",
            fontSize: "1.1rem",
            fontWeight: 700,
            textDecoration: "none",
            transition: "box-shadow 0.2s ease",
          }}
        >
          Contact Us Today
        </motion.a>
      </motion.div>
    </section>
  );
};
