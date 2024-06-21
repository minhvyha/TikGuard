"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from "@mui/material";

import {create} from 'zustand';

interface pageState{
  text:string | ''
  error: string | null,
  taskId: string | null,
  severity: string | null,
  path: string | '',
  setPath: (path: string) => void,  
  setSeverity: (severity: string) => void,
  setTaskId: (taskId: string) => void,
  setText: (text:string) => void,
  setError: (error: string | null) => void,
}

export const useStore = create<pageState>((set) => ({
  text: '',
  setText: (text) => set({text}),
  error: null,
  setError: (error) => set({error}),
  severity: 'error',
  setSeverity: (severity) => set({severity}),
  taskId: null,
  setTaskId: (taskId) => set({taskId}),
  path: '',
  setPath: (path) => set({path}),
}))

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
