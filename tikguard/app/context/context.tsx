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
  language: 'en',
  data: null,
//   data: {
//     "nudity": {
//         "none": 0.97,
//         "classes": {
//             "sexual_activity": 0.01,
//             "sexual_display": 0.01,
//             "erotica": 0.01,
//             "very_suggestive": 0.01,
//             "suggestive": 0.01,
//             "mildly_suggestive": 0.03,
//             "bikini": 0.01,
//             "cleavage": 0.01,
//             "cleavage_categories": 0.99,
//             "lingerie": 0.01,
//             "male_chest": 0.01,
//             "male_chest_categories": 0.99,
//             "male_underwear": 0.01,
//             "miniskirt": 0.01,
//             "minishort": 0.01,
//             "nudity_art": 0.01,
//             "schematic": 0.01,
//             "sextoy": 0.01,
//             "suggestive_focus": 0.01,
//             "suggestive_pose": 0.01,
//             "swimwear_male": 0.01,
//             "swimwear_one_piece": 0.01,
//             "visibly_undressed": 0.01,
//             "other": 0.01,
//             "sea_lake_pool": 0.03,
//             "outdoor_other": 0.81,
//             "indoor_other": 0.16
//         }
//     },
//     "weapon": {
//         "classes": {
//             "firearm": 0.01,
//             "firearm_gesture": 0.01,
//             "firearm_toy": 0.01,
//             "knife": 0.01,
//             "animated": 0.01,
//             "aiming_threat": 0.01,
//             "aiming_safe": 0.01,
//             "in_hand_not_aiming": 0.01,
//             "worn_not_in_hand": 0.01,
//             "not_worn": 0.01
//         }
//     },
//     "recreational_drug": {
//         "prob": 0.01,
//         "classes": {
//             "cannabis": 0.01,
//             "cannabis_logo_only": 0.01,
//             "cannabis_plant": 0.01,
//             "cannabis_drug": 0.01,
//             "recreational_drugs_not_cannabis": 0.01
//         }
//     },
//     "alcohol": {
//         "prob": 0.01
//     },
//     "offensive": {
//         "prob": 0.01,
//         "classes": {
//             "nazi": 0.01,
//             "confederate": 0.01,
//             "supremacist": 0.01,
//             "terrorist": 0.01,
//             "middle_finger": 0.01
//         }
//     },
//     "gore": {
//         "prob": 0.01,
//         "classes": {
//             "very_bloody": 0.01,
//             "slightly_bloody": 0.01,
//             "body_organ": 0.01,
//             "serious_injury": 0.01,
//             "superficial_injury": 0.01,
//             "corpse": 0.01,
//             "skull": 0.01,
//             "unconscious": 0.01,
//             "body_waste": 0.01,
//             "other": 0.01,
//             "animated": 0.01,
//             "fake": 0.01,
//             "real": 0.01
//         }
//     },
//     "tobacco": {
//         "prob": 0.01,
//         "classes": {
//             "regular_tobacco": 0.01,
//             "ambiguous_tobacco": 0.01
//         }
//     },
//     "violence": {
//         "prob": 0.01,
//         "classes": {
//             "physical_violence": 0.01,
//             "firearm_threat": 0.01,
//             "combat_sport": 0.01
//         }
//     },
//     "self-harm": {
//         "prob": 0.01,
//         "classes": {
//             "real": 0.01,
//             "fake": 0.01,
//             "animated": 0.01
//         }
//     },
//     "money": {
//         "prob": 0.01
//     },
//     "gambling": {
//         "prob": 0.01
//     }
// },
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

