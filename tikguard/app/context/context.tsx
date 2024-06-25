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
  setData: (data: any) => void, 
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
  setData: (data) => set({data}),
  setSeverity: (severity) => set({severity}),
  taskId: null,
  setTaskId: (taskId) => set({taskId}),
  path: '',
  data: [
    {
      "namespace": "hate-speech_en_1.1",
      "id": "1000",
      "label": "Personal Insult",
      "hierarchy": [
          "Personal Insult"
      ],
      "score": 120,
      "frequency": 0,
      "winner": true,
      "positions": [
          {
              "start": 0,
              "end": 4
          },
          {
              "start": 5,
              "end": 8
          }
      ]
    }
  ],
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
        <div className={theme.palette.mode === 'dark' ? 'dark bg-black h-screen' : 'h-screen'}>
        {children}
        </div>
      </ThemeProvider>
  );
}

