// TITLE: Header.tsx

import logo from "../assets/logo.png";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Track scroll to add background blur/color after leaving the very top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { label: t.servicesTitle, href: "#services" },
    // { label: t.infraTitle, href: "#infrastructure" },
    // { label: t.testiTitle, href: "#testimonials" },
    { label: t.marketEntry, href: "/market-entry" },

    { label: t.electronicsSoftwareOutsourcing, href: "/outsourcing" },
  ];
  const handleScrollToId = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace(/^#/, "");

    setTimeout(() => {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      }
    }, 300);
  };

  return (
    <>
      <header
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: isScrolled ? "16px 40px" : "24px 40px",
          backgroundColor: isScrolled ? `${theme.background}` : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? `1px solid ${theme.surface}`
            : "1px solid transparent",
          fontFamily: "'Inter', sans-serif",
          position: "fixed", // Key change: Fixed allows it to sit on top of Hero
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease-in-out",
          boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
            section {
              scroll-margin-top: 80px;
            }
            .header-logo {
              height: 24px;
              width: auto;
              display: block;
              cursor: pointer;
            }
            .desktop-nav {
              display: flex;
              gap: 24px;
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
              header {
                padding: 16px 20px !important;
                justify-content: space-between !important;
              }
              .desktop-nav, .desktop-actions {
                display: none !important;
              }
              .mobile-toggle {
                display: flex !important;
                align-items: center;
                justify-content: center;
              }
            }
           
          `}
        </style>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link to="/">
            <motion.img
              src={logo}
              alt="AGASPERA Logo"
              className="header-logo"
              whileHover={{ opacity: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>

          {/* <nav className="desktop-nav">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/")) {
                    setIsMobileMenuOpen(false);
                  } else {
                    handleScrollToId(e, link.href);
                  }
                }}
                style={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: theme.textSecondary,
                  transition: "color 0.2s ease",
                  lineHeight: 1,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav> */}
        </div>

        <div className="desktop-actions">
          <motion.button
            onClick={() => setIsContactModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px 24px",
              backgroundColor: theme.primary,
              color: "#ffffff",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
              boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {t.footerLinks2[1]}
          </motion.button>
          {/* 
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05, backgroundColor: theme.surface }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px 20px",
              cursor: "pointer",
              backgroundColor: isScrolled ? "transparent" : theme.background,
              border: `1px solid ${theme.textSecondary}44`,
              color: theme.text,
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              width="14"
              height="14"
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
          </motion.button> */}
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
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "10px",
                  backgroundColor: theme.surface,
                }}
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/")) {
                        setIsMobileMenuOpen(false);
                      } else {
                        handleScrollToId(e, link.href);
                      }
                    }}
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
                  </Link>
                ))}
                <div
                  style={{
                    padding: "20px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <motion.button
                    onClick={() => setIsContactModalOpen(true)}
                    style={{
                      padding: "16px",
                      backgroundColor: theme.primary,
                      color: "#ffffff",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    {t.footerLinks2[1]}
                  </motion.button>
                  {/* <motion.button
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
                    {t.switchLang}
                  </motion.button> */}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
