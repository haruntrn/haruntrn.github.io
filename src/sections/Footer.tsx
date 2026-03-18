// TITLE: Footer.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/logo.png";
import { LegalModal } from "./LegalModal";

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "cookies" | "terms">(
    "privacy",
  );

  const openLegal = (tab: "privacy" | "cookies" | "terms") => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: theme.darkSection,
        padding: "80px 40px 40px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .footer-container {
            width: 100%;
            max-width: 1200px;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 2.5fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 80px;
          }
          .footer-header {
            color: #ffffff;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .footer-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.95rem;
            display: block;
            margin-bottom: 16px;
            transition: color 0.2s ease;
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            text-align: left;
            width: 100%;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 16px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            margin-bottom: 20px;
          }
          .bottom-bar {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .social-links {
            display: flex;
            gap: 24px;
          }
          @media (max-width: 1024px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 60px;
            }
          }
          @media (max-width: 640px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .bottom-bar {
              flex-direction: column;
              gap: 24px;
              align-items: flex-start;
            }
          }
        `}
      </style>

      <div className="footer-container">
        <div style={{ marginBottom: "32px" }}>
          <img
            src={logo}
            alt="AGASPERA Logo"
            style={{
              height: "32px",
              width: "auto",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
        <div className="footer-grid">
          <div>
            <div className="contact-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@agaspera.com</span>
            </div>

            <div className="contact-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (540) 227 6909</span>
            </div>

            <div className="contact-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Culpeper, Virginia, United States</span>
            </div>
          </div>

          <div>
            <motion.a
              href="#"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.footerLinks1[0]}
            </motion.a>
            <motion.a
              href="#sectors"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.sectorsTitle}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.footerLinks2[1]}
            </motion.a>
          </div>

          <div>
            <motion.a
              href="#services"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.footerLinks1[1]}
            </motion.a>
            <motion.a
              href="#infrastructure"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.infraTitle}
            </motion.a>
            <motion.a
              href="#testimonials"
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.testiTitle}
            </motion.a>
          </div>

          <div>
            <motion.button
              onClick={() => openLegal("privacy")}
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.legalTabs.privacy}{" "}
              {t.privacyContent.title.includes("Policy")
                ? "Policy"
                : "Politikası"}
            </motion.button>
            <motion.button
              onClick={() => openLegal("cookies")}
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.legalTabs.cookies}{" "}
              {t.cookieContent.title.includes("Policy")
                ? "Policy"
                : "Politikası"}
            </motion.button>
            <motion.button
              onClick={() => openLegal("terms")}
              whileHover={{ color: "#ffffff", x: 2 }}
              className="footer-link"
            >
              {t.termsContent.title}
            </motion.button>
          </div>
        </div>

        <div className="bottom-bar">
          <span
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "0.85rem",
              fontWeight: 400,
            }}
          >
            {t.footerRights}
          </span>

          <div className="social-links">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#ffffff" }}
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </footer>
  );
};
