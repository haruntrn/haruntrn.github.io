// TITLE: ContactModal.tsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  const contactMethods = [
    {
      id: "email",
      icon: <Mail size={24} />,
      title: "Email",
      value: "info@agaspera.com",
      href: "mailto:info@agaspera.com",
      color: "#3B82F6",
      bg: "rgba(59, 130, 246, 0.1)",
    },
    {
      id: "phone",
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+1 (540) 227 6909",
      href: "tel:+15402276909",
      color: "#10B981",
      bg: "rgba(16, 185, 129, 0.1)",
    },
    {
      id: "whatsapp",
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "+1 (540) 423 5350",
      href: "https://wa.me/15404235350",
      color: "#25D366",
      bg: "rgba(37, 211, 102, 0.1)",
    },
    {
      id: "address",
      icon: <MapPin size={24} />,
      title: "Address",
      value: "United States & Turkey",
      href: "#",
      color: "#F59E0B",
      bg: "rgba(245, 158, 11, 0.1)",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        // Wrapper container using Flexbox to center children
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px", // Prevents the modal from touching the screen edges on mobile
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 0, // Behind the modal
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              width: "100%",
              maxWidth: "600px",
              zIndex: 1, // Above the backdrop
              position: "relative", // Needed so zIndex works against absolute backdrop
            }}
          >
            <div
              style={{
                backgroundColor: theme.surface,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: `1px solid ${theme.textSecondary}22`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "24px 32px",
                  borderBottom: `1px solid ${theme.textSecondary}15`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: theme.background,
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: theme.text,
                    }}
                  >
                    {"Contact Us"}
                  </h2>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "0.95rem",
                      color: theme.textSecondary,
                    }}
                  >
                    {"Choose a channel below for quick communication."}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: theme.textSecondary,
                    cursor: "pointer",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = `${theme.textSecondary}15`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <X size={24} />
                </button>
              </div>

              <div
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.id}
                    href={method.href}
                    target={method.id === "address" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: theme.background,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px",
                      borderRadius: "16px",
                      border: `1px solid ${theme.textSecondary}22`,
                      textDecoration: "none",
                      color: theme.text,
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          backgroundColor: method.bg,
                          color: method.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            color: theme.textSecondary,
                            marginBottom: "4px",
                          }}
                        >
                          {method.title}
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: theme.text,
                          }}
                        >
                          {method.value}
                        </span>
                      </div>
                    </div>
                    {method.id !== "address" && (
                      <ExternalLink
                        size={20}
                        style={{ color: theme.textSecondary, opacity: 0.5 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
