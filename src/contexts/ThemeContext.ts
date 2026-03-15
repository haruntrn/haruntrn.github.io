// TITLE: ThemeContext.tsx

import { createContext, useContext, type ReactNode } from "react";
import { type Theme } from "../theme";

export interface ThemeContextType {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export interface ThemeProviderProps {
  children: ReactNode;
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
