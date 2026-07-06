// TITLE: AlternativeHeroSection.tsx

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Cpu, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import bg from "../assets/background-world.webp";
import "flag-icons/css/flag-icons.min.css";
import { Link } from "react-router-dom";

export const AlternativeHeroSection: React.FC = () => {
  const { theme } = useTheme();

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

  return (
    <section
      className="hero-section-wrapper"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        backgroundColor: theme.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .hero-section-wrapper {
            padding-top: 80px;
            padding-bottom: 80px;
            padding-right: 24px;
            padding-left: 24px;
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
            opacity: 0.6;
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

          .hero-title {
            font-size: 4.5rem;
            max-width: 800px;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .hero-sub {
            font-size: 1.25rem;
            max-width: 700px;
          }

          .cards-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            width: 100%;
            max-width: 1000px;
            margin-top: 16px;
            padding: 0 20px;
          }

          .path-card {
            background-color: ${theme.surface};
            border-radius: 24px;
            padding: 48px 40px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.05);
            border: 1px solid ${theme.textSecondary}22;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            position: relative;
            z-index: 10;
          }

          .card-icon-wrapper {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: ${theme.primary}15;
            color: ${theme.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
          }

          .card-title {
            font-size: 2rem;
            font-weight: 800;
            color: ${theme.text};
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .card-desc {
            font-size: 1rem;
            color: ${theme.textSecondary};
            line-height: 1.6;
            margin-bottom: 32px;
          }

          .card-list {
            list-style: none;
            padding: 0;
            margin: 0 0 40px 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: left;
          }

          .card-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1rem;
            color: ${theme.textSecondary};
            font-weight: 500;
          }

          .card-btn-wrapper {
            width: 100%;
          }

          .card-btn {
            margin-top: auto;
            padding: 18px 24px;
            background-color: ${theme.primary};
            color: #ffffff;
            border-radius: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          @media (max-width: 1024px) {
            .hero-title { font-size: 3.5rem !important; }
            .cards-container { gap: 24px; }
            .path-card { padding: 40px 24px; }
          }
          
          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem !important; }
            .hero-sub { font-size: 1.1rem !important; }
            .cards-container { grid-template-columns: 1fr; }
            .avatar-floating { display: none !important; }
          }
        `}
      </style>

      <motion.div className="hero-bg-animated" style={{ x: bgX, y: bgY }} />
      <div className="hero-grid-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            padding: "8px 20px",
            backgroundColor: `${theme.primary}15`,
            color: theme.primary,
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "24px",
            marginTop: "24px",
          }}
        >
          Engineering & Market Expansion
        </span>

        <h1
          className="hero-title"
          style={{
            fontWeight: 900,
            color: theme.text,
            margin: "0px",
          }}
        >
          Built Across Borders
        </h1>

        <p
          className="hero-sub"
          style={{
            color: theme.textSecondary,
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          Agaspera connects businesses with engineering expertise and market
          expansion opportunities across the U.S. and Turkey.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "600px",
            margin: "12px 0 24px 0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "2px",
              backgroundColor: theme.text,
              opacity: 0.85,
            }}
          />
          <span
            style={{
              padding: "0 20px",
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "2px",
              color: theme.background,
              textTransform: "uppercase",
              backgroundColor: theme.text,
              borderRadius: "50px",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            Choose Your Path
          </span>
          <div
            style={{
              flex: 1,
              height: "2px",
              backgroundColor: theme.text,
              opacity: 0.85,
            }}
          />
        </div>

        <div className="cards-container">
          <motion.div
            className="path-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-icon-wrapper">
              <Cpu size={40} strokeWidth={1.5} />
            </div>
            <h3 className="card-title">Engineering Solutions</h3>
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: theme.primary,
                marginBottom: "24px",
              }}
            />
            <p className="card-desc">
              Custom electronics, software, and production-ready systems
              designed and built by experienced engineering teams.
            </p>
            <ul className="card-list">
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                Custom Electronics Design
              </li>
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                Software Development
              </li>
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                From Concept to Production
              </li>
            </ul>
            <motion.div
              className="card-btn-wrapper"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/outsourcing" className="card-btn">
                Explore Engineering <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="path-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-icon-wrapper">
              <Globe size={40} strokeWidth={1.5} />
            </div>
            <h3 className="card-title">U.S. Market Entry</h3>
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: theme.primary,
                marginBottom: "24px",
              }}
            />
            <p className="card-desc">
              Market entry strategy, distributor development, and scalable sales
              pipeline building in the United States.
            </p>
            <ul className="card-list">
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                Market Entry Strategy
              </li>
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                Distributor Development
              </li>
              <li>
                <CheckCircle2 size={20} color={theme.primary} />
                Sales Pipeline Building
              </li>
            </ul>
            <motion.div
              className="card-btn-wrapper"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/market-entry" className="card-btn">
                Explore Market Entry <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
