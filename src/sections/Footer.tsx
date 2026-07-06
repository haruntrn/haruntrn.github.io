// TITLE: Footer.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/logo.png";
import { LegalModal } from "./LegalModal";
import { Link } from "react-router-dom";

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
            grid-template-columns: 1fr 1fr 1fr;
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
          .footer-link:hover {
            color: #ffffff;
            transform: translateX(2px);
            transition: all 0.5s;
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
            <a
              href="mailto:info@agaspera.com"
              className="contact-item"
              style={{ textDecoration: "none" }}
            >
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
            </a>

            <a
              href="tel:+1 (540) 423-5350"
              target="_blank"
              className="contact-item"
              style={{ textDecoration: "none" }}
            >
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
              <span>+1 (540) 423-5350</span>
            </a>

            <a
              href="https://wa.me/+15404235350"
              target="_blank"
              className="contact-item"
              style={{ textDecoration: "none" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>+1 (540) 423-5350</span>
            </a>

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
            <Link to="/market-entry" className="footer-link">
              {t.marketEntry}
            </Link>
            <Link to="/outsourcing" className="footer-link">
              {t.electronicsSoftwareOutsourcing}
            </Link>
          </div>

          <div>
            <motion.button
              onClick={() => openLegal("privacy")}
              className="footer-link"
            >
              {t.legalTabs.privacy}{" "}
              {t.privacyContent.title.includes("Policy")
                ? "Policy"
                : "Politikası"}
            </motion.button>
            <motion.button
              onClick={() => openLegal("cookies")}
              className="footer-link"
            >
              {t.legalTabs.cookies}{" "}
              {t.cookieContent.title.includes("Policy")
                ? "Policy"
                : "Politikası"}
            </motion.button>
            <motion.button
              onClick={() => openLegal("terms")}
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
              href="https://www.linkedin.com/company/agaspera"
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
