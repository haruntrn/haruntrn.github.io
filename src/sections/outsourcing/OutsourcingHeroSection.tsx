// TITLE: HeroSection.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Calendar, FileText } from "lucide-react";

export const OutsourcingHeroSection: React.FC = () => {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        padding: "120px 20px",
        backgroundColor: theme.background,
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .hero-bg-grid {
            position: absolute;
            inset: 0;
            z-index: 0;
            background-image: 
              linear-gradient(${theme.text}08 1px, transparent 1px), 
              linear-gradient(90deg, ${theme.text}08 1px, transparent 1px);
            background-size: 60px 60px;
            mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
            -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          }
          .hero-title-main {
            font-size: 4.5rem;
            line-height: 1.1;
            letter-spacing: -0.02em;
            max-width: 1000px;
          }
          .hero-buttons {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
          }
          @media (max-width: 768px) {
            .hero-title-main { font-size: 2.8rem !important; }
            .hero-buttons { flexDirection: column; width: 100%; }
            .hero-buttons button, .hero-buttons a { width: 100%; justify-content: center; }
          }
        `}
      </style>

      <div className="hero-bg-grid" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: "24px" }}>
          <span
            style={{
              padding: "8px 16px",
              backgroundColor: `${theme.primary}15`,
              color: theme.primary,
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Agaspera Engineering
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="hero-title-main"
          style={{ fontWeight: 800, color: theme.text, margin: "0 0 24px 0" }}
        >
          Custom Electronics & Software Engineering —{" "}
          <span style={{ color: theme.primary }}>Without Borders</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.25rem",
            color: theme.textSecondary,
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: 0,
          }}
        >
          From concept to production-ready systems, we provide scalable
          engineering solutions powered by experienced teams in Turkey.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 25px -5px ${theme.primary}66`,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 32px",
              backgroundColor: theme.primary,
              color: "#ffffff",
              borderRadius: "12px",
              fontSize: "1.05rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <Calendar size={20} />
            Book a Call
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: theme.surface }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: theme.text,
              border: `2px solid ${theme.text}22`,
              borderRadius: "12px",
              fontSize: "1.05rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FileText size={20} />
            Get a Proposal
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
