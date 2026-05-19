// TITLE: KeyStatementSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

export const OutsourcingKeyStatementSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      style={{
        padding: "120px 20px",
        backgroundColor: theme.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background element to give it texture */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "-50%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)", // Responsive text sizing built-in
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          If it involves electronics or embedded systems,{" "}
          <span style={{ opacity: 0.7 }}>we can build it.</span>
        </h2>
      </motion.div>
    </section>
  );
};
