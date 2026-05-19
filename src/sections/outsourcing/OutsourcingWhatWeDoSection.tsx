// TITLE: WhatWeDoSection.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Cpu } from "lucide-react";

export const OutsourcingWhatWeDoSection: React.FC = () => {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="what-we-do"
      style={{
        paddingTop: "180px",
        paddingBottom: "120px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: theme.primary, // Changed to primary
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .wwd-container {
            max-width: 900px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 2;
          }
          .wwd-title {
            font-size: 3.5rem;
            line-height: 1.15;
            letter-spacing: -0.02em;
          }
          .wwd-icon-wrapper {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          .wwd-icon-wrapper::before {
            content: '';
            position: absolute;
            inset: -8px;
            border-radius: 50%;
            border: 1px dashed rgba(255, 255, 255, 0.4);
            animation: spin 30s linear infinite;
          }
         
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            .wwd-title { font-size: 2.25rem !important; }
            section { padding-top: 140px !important; padding-bottom: 80px !important; }
          }
        `}
      </style>

      <div className="wwd-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <motion.div variants={itemVariants} className="wwd-icon-wrapper">
            <Cpu size={36} color="#ffffff" strokeWidth={1.5} />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="wwd-title"
            style={{ fontWeight: 800, color: "#ffffff", margin: 0 }}
          >
            Flexible Engineering,
            <br />
            <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Built Around Your Needs
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: "1.7",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Agaspera helps U.S.-based companies design, develop, and scale
              electronic systems and software solutions.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.8",
                maxWidth: "750px",
                margin: "0 auto",
              }}
            >
              Whether you’re building a new product from scratch or improving an
              existing system, we provide the engineering resources and project
              coordination you need — without the overhead of building an
              internal team.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
