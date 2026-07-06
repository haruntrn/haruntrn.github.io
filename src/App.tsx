// TITLE: App.tsx

import React from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";

import { HeroSection } from "./sections/HeroSection";
import { ServicesBentoSection } from "./sections/ServicesBentoSection";
import { InfrastructureSection } from "./sections/InfrastructureSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { StatsSection } from "./sections/StatsSection";
import { FinalCTA } from "./sections/FinalCTA";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./_layout";
import { OutsourcingWhatWeDoSection } from "./sections/outsourcing/OutsourcingWhatWeDoSection";
import { OutsourcingServicesSection } from "./sections/outsourcing/OutsourcingServicesSection";
import { OutsourcingWhyAndHowSection } from "./sections/outsourcing/OutsourcingWhyAndHowSection";
import { OutsourcingCaseStudySection } from "./sections/outsourcing/OutsourcingCaseStudySection";
import { OutsourcingHeroSection } from "./sections/outsourcing/OutsourcingHeroSection";
import { OutsourcingKeyStatementSection } from "./sections/outsourcing/OutsourcingKeyStatementSection";
import { OutsourcingFinalCTASection } from "./sections/outsourcing/OutsourcingFinalCTASection";
import { AlternativeHeroSection } from "./sections/AlternativeHeroSection";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              {/* <HeroSection /> */}
              <AlternativeHeroSection />
              {/* <ServicesBentoSection />
              <InfrastructureSection />
              <TestimonialsSection />
              <StatsSection /> */}
              {/* <FinalCTA /> */}
            </>
          }
        />

        <Route
          path="market-entry"
          element={
            <>
              <HeroSection />
              <ServicesBentoSection />
              <InfrastructureSection />
              <TestimonialsSection />
              <StatsSection />
              <FinalCTA />
            </>
          }
        />

        <Route
          path="outsourcing"
          element={
            <>
              <OutsourcingHeroSection />
              <OutsourcingWhatWeDoSection />
              <OutsourcingServicesSection />
              <OutsourcingWhyAndHowSection />
              <OutsourcingKeyStatementSection />
              <OutsourcingCaseStudySection />
              <OutsourcingFinalCTASection />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
