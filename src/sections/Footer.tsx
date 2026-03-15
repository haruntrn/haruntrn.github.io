// TITLE: Footer.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer
      style={{
        padding: "80px 20px 40px 20px",
        backgroundColor: theme.darkSection,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "60px",
            marginBottom: "80px",
          }}
        >
          <div style={{ maxWidth: "300px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: theme.darkSectionText,
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              AGASPERA
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                marginBottom: "12px",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              Culpeper, Virginia, United States
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                marginBottom: "12px",
                fontSize: "1rem",
              }}
            >
              info@agaspera.com
            </p>
            <p
              style={{
                color: theme.background,
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              +1 (540) 227 6909
            </p>
          </div>

          <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {t.footerLinks1.map((link, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    display: "inline-block",
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {t.footerLinks2.map((link, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    display: "inline-block",
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
            {t.footerRights}
          </span>

          <div style={{ display: "flex", gap: "24px" }}>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff" }}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
