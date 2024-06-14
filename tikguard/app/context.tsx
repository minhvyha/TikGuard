"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

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
 