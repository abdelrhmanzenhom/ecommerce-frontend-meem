import React, { createContext, useMemo, useState, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#fce918",
            light: "#e8c303",
          },
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f5f5f5" },
                text: { primary: "#000000" },
              }
            : {
                background: { default: "#121212" },
                text: { primary: "#ffffff" },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
