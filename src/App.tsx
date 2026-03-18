// TITLE: App.tsx

import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";

import { HeroSection } from "./sections/HeroSection";
import { SectorsSection } from "./sections/SectorsSection";
import { ServicesBentoSection } from "./sections/ServicesBentoSection";
import { InfrastructureSection } from "./sections/InfrastructureSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { StatsSection } from "./sections/StatsSection";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";

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
