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
  text:string | '',
  analysedText : string | '',
  error: string | null,
  taskId: string | null,
  severity: string | null,
  path: string | '',
  baseUrl: string,
  theme: Theme,
  videoUrl: string | '',
  data: any,
  loading: boolean,
  imgUrl: string,
  language: string,
  setImgUrl: (imgUrl: string) => void,
  setLanguage: (language: string) => void,
  setData: (data: any) => void, 
  setAnalysedText: (analysedText: string) => void,
  toggleTheme: () => void,
  setPath: (path: string) => void,  
  setSeverity: (severity: string) => void,
  setTaskId: (taskId: string) => void,
  setVideoUrl: (videoUrl: string) => void,
  setText: (text:string) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
}

export const useStore = create<pageState>((set) => ({
  text: '',
  analysedText: '',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tikguard.vercel.app/',
  error: null,
  severity: 'error',
  taskId: null,
  path: '',
  theme: darkTheme,
  videoUrl: '',
  setVideoUrl: (videoUrl) => set({videoUrl}),
  language: 'en',
  data: null,
 loading: false,
  imgUrl: '',
  setImgUrl: (imgUrl) => set({imgUrl}),
  setAnalysedText: (analysedText) => set({analysedText}),
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

