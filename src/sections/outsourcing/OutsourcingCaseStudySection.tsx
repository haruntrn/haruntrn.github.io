// TITLE: CaseStudySection.tsx

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Check } from "lucide-react";

export const OutsourcingCaseStudySection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: theme.surface,
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          backgroundColor: theme.background,
          borderRadius: "24px",
          padding: "48px",
          border: `1px solid ${theme.textSecondary}22`,
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              padding: "6px 12px",
              backgroundColor: theme.primary,
              color: "#fff",
              borderRadius: "50px",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Case Study
          </span>
        </div>

        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            color: theme.text,
            marginBottom: "40px",
            lineHeight: 1.2,
          }}
        >
          Custom IoT System Development for Industrial Use
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: "16px",
                borderBottom: `2px solid ${theme.primary}`,
                display: "inline-block",
                paddingBottom: "8px",
              }}
            >
              Challenge
            </h3>
            <p style={{ color: theme.textSecondary, lineHeight: 1.6 }}>
              A manufacturing company needed a custom IoT-based monitoring
              system to track and manage their operations more efficiently. They
              lacked the internal engineering resources to design both the
              hardware and software components required for a reliable, scalable
              solution.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: "16px",
                borderBottom: `2px solid ${theme.primary}`,
                display: "inline-block",
                paddingBottom: "8px",
              }}
            >
              Solution
            </h3>
            <p
              style={{
                color: theme.textSecondary,
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              Agaspera designed and delivered a fully integrated IoT system,
              including:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                "Custom electronic hardware design",
                "Embedded firmware development",
                "Sensor integration and data acquisition",
                "Cloud-based monitoring interface",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: theme.textSecondary,
                    fontSize: "0.95rem",
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <Check
                    size={16}
                    color={theme.primary}
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            backgroundColor: `${theme.primary}11`,
            borderRadius: "12px",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: theme.text,
              marginBottom: "12px",
            }}
          >
            Results
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {[
              "Delivered end-to-end",
              "Improved operational visibility",
              "Reduced manual monitoring",
              "High client satisfaction",
            ].map((res, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: theme.primary,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                • {res}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
