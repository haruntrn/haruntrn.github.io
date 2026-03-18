// TITLE: LegalModal.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "privacy" | "cookies" | "terms";
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = "privacy",
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: "privacy", label: t.legalTabs.privacy },
    { id: "cookies", label: t.legalTabs.cookies },
    { id: "terms", label: t.legalTabs.terms },
  ];

  const content = {
    privacy: (
      <div>
        <h3>{t.privacyContent.title}</h3>
        <p style={{ opacity: 0.6, fontSize: "0.85rem" }}>
          {t.privacyContent.updated}
        </p>
        <p>{t.privacyContent.sub}</p>
        {t.privacyContent.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.h}</h4>
            <p>{section.p}</p>
          </div>
        ))}
      </div>
    ),
    cookies: (
      <div>
        <h3>{t.cookieContent.title}</h3>
        <p>{t.cookieContent.sub}</p>
        {t.cookieContent.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.h}</h4>
            <p>{section.p}</p>
          </div>
        ))}
      </div>
    ),
    terms: (
      <div>
        <h3>{t.termsContent.title}</h3>
        {t.termsContent.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.h}</h4>
            <p>{section.p}</p>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(4px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "85vh",
              backgroundColor: theme.background,
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 30px 60px -12px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                padding: "32px 32px 0 32px",
                borderBottom: `1px solid ${theme.surface}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: theme.text,
                  }}
                >
                  {t.legalModalTitle}
                </h2>
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: theme.textSecondary,
                    padding: "4px",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as keyof typeof content)}
                    style={{
                      padding: "0 0 12px 0",
                      background: "none",
                      border: "none",
                      borderBottom:
                        activeTab === tab.id
                          ? `2px solid ${theme.primary}`
                          : "2px solid transparent",
                      color:
                        activeTab === tab.id
                          ? theme.primary
                          : theme.textSecondary,
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "32px",
                overflowY: "auto",
                color: theme.textSecondary,
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              <style>{`
                h3 { color: ${theme.text}; margin-top: 0; }
                h4 { color: ${theme.text}; margin-bottom: 8px; font-size: 1.1rem; }
                p { margin-bottom: 16px; }
                strong { color: ${theme.primary}; }
              `}</style>
              {content[activeTab as keyof typeof content]}
            </div>

            <div
              style={{
                padding: "20px 32px",
                backgroundColor: theme.surface,
                textAlign: "right",
              }}
            >
              <button
                onClick={onClose}
                style={{
                  padding: "10px 24px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: theme.primary,
                  color: "#ffffff",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {t.legalClose}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
