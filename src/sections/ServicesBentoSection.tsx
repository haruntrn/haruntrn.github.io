// TITLE: ServicesBentoSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const ServicesBentoSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="services"
      style={{
        padding: "128px 20px",
        backgroundColor: theme.background,
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            width: 100%;
          }
          
          .bento-item {
            background-color: ${theme.surface};
            border: 1px solid ${theme.textSecondary}15;
            padding: 48px;
            border-radius: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: default;
            min-height: 320px;
          }

          .bento-item:hover {
            background-color: ${theme.primary};
            transform: translateY(-8px);
            border-color: ${theme.primary};
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .bento-title {
            font-size: 1.75rem;
            font-weight: 800;
            color: ${theme.text};
            line-height: 1.2;
            letter-spacing: -0.5px;
            margin-bottom: 24px;
            transition: color 0.4s ease;
          }

          .bento-desc {
            font-size: 1.1rem;
            color: ${theme.textSecondary};
            line-height: 1.7;
            margin: 0;
            transition: color 0.4s ease;
          }

          .bento-item:hover .bento-title,
          .bento-item:hover .bento-desc {
            color: #ffffff;
          }

          .bento-arrow {
            position: absolute;
            top: 48px;
            right: 48px;
            opacity: 0;
            transform: translate(-15px, 15px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            color: #ffffff;
          }

          .bento-item:hover .bento-arrow {
            opacity: 1;
            transform: translate(0, 0);
          }

          @media (max-width: 1124px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .bento-item {
               padding: 32px;
               min-height: 280px;
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 80px 20px !important;
            }
            .services-header {
              font-size: 2.5rem !important;
              margin-bottom: 16px !important;
            }
            .bento-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            .bento-item {
              grid-column: span 1 !important;
              padding: 32px;
              min-height: auto;
              border-radius: 24px;
            }
            .bento-title {
              font-size: 1.4rem;
              margin-bottom: 12px;
            }
            .bento-desc {
              font-size: 1rem;
            }
            .bento-arrow {
              display: none; /* Clean up mobile UI */
            }
          }
        `}
      </style>

      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <h2
            className="services-header"
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              color: theme.text,
              margin: "0 0 24px 0",
              letterSpacing: "-1.5px",
              maxWidth: "600px",
              lineHeight: "1.1",
            }}
          >
            {t.servicesTitle}
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
              color: theme.textSecondary,
              maxWidth: "600px",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            End-to-end strategic solutions designed to establish and scale your
            industrial presence in the United States market.
          </p>
        </motion.div>

        <div className="bento-grid">
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              className="bento-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{
                gridColumn: service.span === 2 ? "span 2" : "span 1",
              }}
            >
              <div style={{ zIndex: 2, position: "relative", maxWidth: "90%" }}>
                <h3 className="bento-title">{service.title}</h3>
                <p className="bento-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
