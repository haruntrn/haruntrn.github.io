// TITLE: HeroSection.tsx

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import bg from "../assets/background-world.webp";
import "flag-icons/css/flag-icons.min.css";

const avatars = [
  {
    top: "15%",
    left: "10%",
    delay: 0,
    code: "us",
    floatDuration: 4,
    yOffset: -12,
  },
  {
    top: "15%",
    right: "10%",
    delay: 0.2,
    code: "gb",
    floatDuration: 5,
    yOffset: -15,
  },
  {
    bottom: "25%",
    left: "15%",
    delay: 0.4,
    code: "eu",
    floatDuration: 4.5,
    yOffset: -10,
  },
  {
    bottom: "25%",
    right: "15%",
    delay: 0.6,
    code: "ca",
    floatDuration: 5.5,
    yOffset: -14,
  },
];

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const bgX = useTransform(smoothX, [0, 1], ["-3%", "3%"]);
  const bgY = useTransform(smoothY, [0, 1], ["-3%", "3%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth);
    mouseY.set(e.clientY / innerHeight);
  };

  const handleContactClick = () => {
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .hero-title {
            font-size: 5rem;
            max-width: 900px;
          }
          .hero-sub {
            font-size: 1.25rem;
            max-width: 700px;
          }
          
          .hero-bg-animated {
            position: absolute;
            inset: -5%;
            width: 110%;
            height: 110%;
            background-image: url(${bg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: 0;
            will-change: transform;
          }

          .hero-grid-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background-image: 
              linear-gradient(${theme.text}08 1px, transparent 1px), 
              linear-gradient(90deg, ${theme.text}08 1px, transparent 1px), 
              linear-gradient(${theme.background}aa, ${theme.background}aa);
            background-size: 60px 60px, 60px 60px, cover;
            background-position: center, center, center;
            background-repeat: repeat, repeat, no-repeat;
            pointer-events: none;
          }

          .marquee-container {
            width: 100vw;
            max-width: 100%;
            display: flex;
            overflow: hidden;
            user-select: none;
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
          
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }

          .marquee-content {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 60px;
            padding-right: 60px;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .industry-item {
            font-size: 0.85rem;
            font-weight: 700;
            color: ${theme.textSecondary};
            text-transform: uppercase;
            letter-spacing: 2px;
            white-space: nowrap;
            opacity: 0.6;
          }

          @media (max-width: 1024px) {
            .hero-title { font-size: 3.5rem !important; }
            .avatar-floating { display: none !important; }
          }
          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem !important; }
            .hero-sub { font-size: 1.1rem !important; }
            .hero-highlight-line { bottom: 4px !important; height: 3px !important; }
          }
        `}
      </style>

      <motion.div className="hero-bg-animated" style={{ x: bgX, y: bgY }} />

      <div className="hero-grid-overlay" />

      {avatars.map((pos, i) => (
        <motion.div
          key={i}
          className="avatar-floating"
          initial={{ opacity: 0, scale: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, pos.yOffset, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            opacity: { delay: pos.delay + 0.5, duration: 0.5 },
            scale: { delay: pos.delay + 0.5, duration: 0.5, type: "spring" },
            y: {
              delay: pos.delay + 0.5,
              duration: pos.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              delay: pos.delay + 0.5,
              duration: pos.floatDuration * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            backgroundColor: theme.surface,
            border: `3px solid #ffffff`,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <motion.span
            className={`fi fi-${pos.code}`}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: pos.floatDuration + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontWeight: 800,
            color: theme.text,
            lineHeight: "1.1",
            letterSpacing: "-2px",
            marginBottom: "24px",
          }}
        >
          {t.heroTitle}{" "}
          <span
            style={{
              position: "relative",
              display: "inline-block",
              zIndex: 1,
            }}
          >
            {t.heroTitleHighlight}{" "}
          </span>{" "}
          {t.heroTitleEnd}
        </h1>

        <p
          className="hero-sub"
          style={{
            color: theme.textSecondary,
            marginBottom: "48px",
            lineHeight: "1.6",
          }}
        >
          {t.heroSub}
        </p>

        <div style={{ display: "flex", gap: "16px", marginBottom: "100px" }}>
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: theme.primary,
              color: "#ffffff",
              padding: "16px 32px",
              fontSize: "1rem",
              fontWeight: 700,
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            {t.heroCta}
          </motion.button>
        </div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: theme.primary,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "3px",
          }}
        >
          {t.sectorsTitle}
        </span>

        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              {t.sectors.map((sector, i) => (
                <div key={`orig-${i}`} className="industry-item">
                  {sector}
                </div>
              ))}
            </div>

            <div className="marquee-content" aria-hidden="true">
              {t.sectors.map((sector, i) => (
                <div key={`dup-${i}`} className="industry-item">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
