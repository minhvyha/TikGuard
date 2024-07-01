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
  data: any,
  loading: boolean,
  language: string,
  setLanguage: (language: string) => void,
  setData: (data: any) => void, 
  toggleTheme: () => void,
  setPath: (path: string) => void,  
  setSeverity: (severity: string) => void,
  setTaskId: (taskId: string) => void,
  setText: (text:string) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
}

export const useStore = create<pageState>((set) => ({
  text: '',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tikguard.vercel.app/',
  error: null,
  severity: 'error',
  taskId: null,
  path: '',
  theme: darkTheme,
  language: 'en',
  data: null,
  loading: false,
  setLanguage: (language) => set({language}),
  setText: (text) => set({text}),
  setError: (error) => set({error}),
  setData: (data) => set({data}),
  setSeverity: (severity) => set({severity}),
  setTaskId: (taskId) => set({taskId}),
  setPath: (path) => set({path}),
  setLoading: (loading) => set({loading}),
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
        <div className={theme.palette.mode === 'dark' ? 'dark bg-black h-screen' : 'h-screen'}>
        {children}
        </div>
      </ThemeProvider>
  );
}

