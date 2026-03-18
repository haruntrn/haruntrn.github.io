import { useEffect, type ReactNode } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { theme } from "../theme";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.setProperty("-webkit-font-smoothing", "antialiased");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
