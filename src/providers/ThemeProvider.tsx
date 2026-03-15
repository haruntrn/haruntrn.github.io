import {
  type ThemeProviderProps,
  ThemeContext,
} from "../contexts/ThemeContext";
import { theme } from "../theme";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
