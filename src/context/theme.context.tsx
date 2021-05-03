import * as React from "react";

type setModeType = React.Dispatch<React.SetStateAction<string>>;
type ThemeContextType = {
  mode: string;
  setMode: setModeType;
};

const THEME_KEY = process.env.REACT_APP_THEME_KEY || "theme_mode";
const THEME_MODE: Record<string, string> = { light: "light", dark: "dark" };
const ThemeContext = React.createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider: React.FC = (props) => {
  const [mode, setMode] = React.useState<string>(() => {
    try {
      return window.localStorage.getItem(THEME_KEY) || THEME_MODE.dark;
    } catch (e) {
      return THEME_MODE.dark;
    }
  });
  React.useEffect(() => {
    window.localStorage.setItem(THEME_KEY, mode);
  }, [mode]);
  const value = React.useMemo(() => ({ mode, setMode }), [mode]);
  return (
    <ThemeContext.Provider value={value} {...props}></ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(`Using useTheme outside of <ThemeProvider />`);
  }
  return context as ThemeContextType;
}
