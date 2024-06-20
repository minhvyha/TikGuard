"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#ffffff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#282a36",
    },
  },
});

const ThemeContext = createContext({
  theme: darkTheme,
  toggleTheme: () => {},
});

export function ContextProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.mode === 'dark' ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
