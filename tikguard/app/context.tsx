"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import {create} from 'zustand';

interface pageState{
  text:string
  setText: (text:string) => void  
}

export const useStore = create<pageState>((set) => ({
  text: "why are you so dumb, you can't even reach the top shelf.",
  setText: (text) => set({text})
}))
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#282a36"
    },
  },
});
export default function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
  );
}
