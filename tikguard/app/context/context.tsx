"use client";

import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from "@mui/material";

import {create} from 'zustand';

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


interface pageState{
  text:string | ''
  error: string | null,
  taskId: string | null,
  severity: string | null,
  path: string | '',
  baseUrl: string,
  theme: Theme,
  toggleTheme: () => void,
  setPath: (path: string) => void,  
  setSeverity: (severity: string) => void,
  setTaskId: (taskId: string) => void,
  setText: (text:string) => void,
  setError: (error: string | null) => void,
}

export const useStore = create<pageState>((set) => ({
  text: '',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tikguard.vercel.app/',
  setText: (text) => set({text}),
  error: null,
  setError: (error) => set({error}),
  severity: 'error',
  setSeverity: (severity) => set({severity}),
  taskId: null,
  setTaskId: (taskId) => set({taskId}),
  path: '',
  setPath: (path) => set({path}),
  theme: darkTheme,

  toggleTheme: () => {
    set((state) => {
      return {
        ...state,
        theme: state.theme.palette.mode === 'dark' ? lightTheme : darkTheme,
      };
    });
  }
}))



export function ContextProviders({ children }: { children: ReactNode }) {
  const {theme} = useStore();


  return (
      <ThemeProvider theme={theme} >
        <div className={theme.palette.mode === 'dark' ? 'dark' : ''}>
        {children}
        </div>
      </ThemeProvider>
  );
}

