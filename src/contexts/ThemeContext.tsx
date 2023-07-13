import { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import dark from "../config/theme/dark";
import light from "../config/theme/light";
import useSettings from "../hooks/useSettings";
// ============================================================

export const enum ThemeMode {
  dark = 'dark',
  light = 'light'
}

const initialState = ThemeMode.light;

export const ThemeContext = createContext({
  mode: initialState,
  theme: light,
  set: (arg: any) => { },
});

// ============================================================

const ThemeProvider = ({ children }: any) => {
  const scheme = useColorScheme();
  const { settings } = useSettings();

  const [mode, setMode] = useState<ThemeMode>(ThemeMode.light);
  const [theme, setTheme] = useState<any>(light);

  /**
  * Set theme in local storage
  * @returns void
  * */

  const set = (mode: ThemeMode) => {
    setMode(mode);
    setTheme(mode == ThemeMode.dark ? dark : light);
  };


  useEffect(() => {
    if (settings) set(settings.darkMode ? ThemeMode.dark : ThemeMode.light)
    return () => { }
  }, [settings])


  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        set
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
