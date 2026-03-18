// TITLE: Header.tsx

import logo from "../assets/logo.png";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.sectorsTitle, href: "#sectors" },
    { label: t.servicesTitle, href: "#services" },
    { label: t.infraTitle, href: "#infrastructure" },
    { label: t.testiTitle, href: "#testimonials" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace(/^#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
          backgroundColor: theme.background,
          borderBottom: `1px solid ${theme.surface}`,
          fontFamily: "'Inter', sans-serif",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
            section {
              scroll-margin-top: 100px;
            }
            .header-logo {
              height: 32px;
              width: auto;
              display: block;
              cursor: pointer;
            }
            .desktop-nav {
              display: flex;
              gap: 32px;
            }
            .mobile-toggle {
              display: none;
              background: none;
              border: none;
              cursor: pointer;
              color: ${theme.text};
              padding: 8px;
            }
            .desktop-actions {
              display: flex;
              align-items: center;
              gap: 16px;
            }
            @media (max-width: 1124px) {
              .desktop-nav, .desktop-actions {
                display: none !important;
              }
              .mobile-toggle {
                display: flex !important;
                align-items: center;
                justify-content: center;
              }
            }
            @media (max-width: 768px) {
              header {
                padding: 16px 20px !important;
              }
              .header-logo {
                height: 24px !important;
              }
            }
          `}
        </style>

        <div style={{ display: "flex", alignItems: "flex-end", gap: "48px" }}>
          <motion.img
            src={logo}
            alt="AGASPERA Logo"
            className="header-logo"
            whileHover={{ opacity: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <nav className="desktop-nav">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                whileHover={{ color: theme.primary }}
                style={{
                  textDecoration: "none",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: theme.textSecondary,
                  transition: "color 0.2s ease",
                  lineHeight: 1,
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="desktop-actions">
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 20px",
              backgroundColor: theme.primary,
              color: "#ffffff",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: "0 4px 12px rgba(15, 44, 89, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {t.footerLinks2[1]}
          </motion.a>

          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05, backgroundColor: theme.surface }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 20px",
              cursor: "pointer",
              backgroundColor: theme.background,
              border: `1px solid ${theme.textSecondary}44`,
              color: theme.text,
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {t.switchLang}
          </motion.button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                backgroundColor: theme.background,
                borderBottom: `1px solid ${theme.surface}`,
                overflow: "hidden",
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 99,
              }}
            >
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: theme.surface,
                  borderBottom: `1px solid ${theme.textSecondary}55`,
                }}
              >
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    style={{
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: theme.text,
                      padding: "12px 20px",
                      borderBottom: `1px solid ${theme.surface}55`,
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                <div
                  style={{
                    padding: "20px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    style={{
                      padding: "16px",
                      backgroundColor: theme.primary,
                      color: "#ffffff",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {t.footerLinks2[1]}
                  </motion.a>

                  <motion.button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      padding: "16px",
                      backgroundColor: theme.surface,
                      border: `1px solid ${theme.textSecondary}22`,
                      color: theme.text,
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    {t.switchLang}
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
