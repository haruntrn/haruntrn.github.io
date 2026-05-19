// TITLE: StatsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const StatsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      style={{
        padding: "80px 20px",
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        backgroundColor: `${theme.primary}16`,
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          .stat-value {
            font-size: 3.1rem;
            font-weight: 800;
            line-height: 1;
            display: block;
            margin-bottom: 12px;
          }
          .stat-label {
            font-size: 1.1rem;
            font-weight: 500;
            opacity: 0.8;
          }
          @media (max-width: 1224px) {
            .stat-value {
              font-size: 2.5rem;
            }
            .stat-label {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 480px) {
            .stat-value {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px 60px",
        }}
      >
        {t.stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            style={{
              textAlign: "center",
              flex: "1 1 200px",
              minWidth: "150px",
            }}
          >
            <span className="stat-value" style={{ color: theme.text }}>
              {stat.value}
            </span>
            <span className="stat-label" style={{ color: theme.textSecondary }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
