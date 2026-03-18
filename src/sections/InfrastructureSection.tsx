// TITLE: InfrastructureSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

import container_ship from "../assets/container-ship.jpeg";
import cargo_plane from "../assets/cargo-plane.jpeg";
import cargo_bay from "../assets/cargo-bay.jpeg";
import cargo_containers from "../assets/cargo-containers.jpeg";

export const InfrastructureSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const blocks = [
    { title: t.infra[0].title, desc: t.infra[0].desc, image: cargo_bay },
    { title: t.infra[1].title, desc: t.infra[1].desc, image: container_ship },
    { title: t.infra[2].title, desc: t.infra[2].desc, image: cargo_containers },
    { title: t.infra[3].title, desc: t.infra[3].desc, image: cargo_plane },
  ];

  return (
    <section
      id="infrastructure"
      style={{
        padding: "160px 20px",
        backgroundColor: theme.darkSection,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .infra-container {
            display: flex;
            flex-direction: column;
            gap: 100px;
            max-width: 1200px;
            width: 100%;
          }

          .infra-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            will-change: transform, opacity;
          }

          .infra-image-wrapper {
            position: relative;
            height: 450px;
            border-radius: 32px;
            overflow: hidden;
            background-color: rgba(255,255,255,0.05);
            aspect-ratio: 4 / 3;
          }

          .infra-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
            will-change: transform;
            display: block;
          }

          .infra-row:hover .infra-image {
            transform: scale(1.08);
          }

          .infra-content {
            padding: 40px;
            text-align: left;
          }

          @media (max-width: 1124px) {
            .infra-container {
               gap: 60px;
            }
            .infra-row {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .infra-row:nth-child(even) .infra-image-wrapper {
              grid-row: 1;
            }
            .infra-image-wrapper {
              height: 380px;
              border-radius: 24px;
            }
            .infra-content {
              padding: 0 10px;
              text-align: center;
            }
            .infra-title {
              font-size: 1.85rem !important;
            }
            .infra-desc {
              font-size: 1.05rem !important;
            }
            .infra-header-title {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 768px) {
             section {
                padding: 100px 20px !important;
             }
             .infra-image-wrapper {
                height: 280px;
             }
          }
        `}
      </style>

      <div className="infra-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <h2
            className="infra-header-title"
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              color: theme.darkSectionText,
              marginBottom: "24px",
              letterSpacing: "-1.5px",
            }}
          >
            {t.infraTitle}
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            {t.infraSub}
          </p>
        </motion.div>

        {blocks.map((block, index) => (
          <motion.div
            key={index}
            className="infra-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
              direction: index % 2 === 0 ? "ltr" : "rtl",
            }}
          >
            <div className="infra-image-wrapper">
              <img
                src={block.image}
                alt={block.title}
                className="infra-image"
                loading="lazy"
                decoding="async"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div className="infra-content" style={{ direction: "ltr" }}>
              <h3
                className="infra-title"
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  color: theme.darkSectionText,
                  marginBottom: "20px",
                  letterSpacing: "-0.5px",
                }}
              >
                {block.title}
              </h3>
              <p
                className="infra-desc"
                style={{
                  fontSize: "1.15rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "1.8",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {block.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
