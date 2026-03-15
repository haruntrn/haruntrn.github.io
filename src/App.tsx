import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { useTheme } from "./contexts/ThemeContext";
import { LanguageProvider } from "./providers/LanguageProvider";
import { useLanguage } from "./contexts/LanguageContext";

import { HeroSection } from "./sections/HeroSection";
import { SectorsSection } from "./sections/SectorsSection";
import { ServicesBentoSection } from "./sections/ServicesBentoSection";
import { InfrastructureSection } from "./sections/InfrastructureSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { StatsSection } from "./sections/StatsSection";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 40px",
        gap: "16px",
        backgroundColor: theme.background,
      }}
    >
      <button
        onClick={toggleLanguage}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: `1px solid ${theme.textSecondary}`,
          color: theme.text,
          borderRadius: "4px",
        }}
      >
        {t.switchLang}
      </button>
    </header>
  );
};

const MainLayout: React.FC = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <SectorsSection />
      <ServicesBentoSection />
      <InfrastructureSection />
      <TestimonialsSection />
      <StatsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
