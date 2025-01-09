'use client'

import createTheme from '@mui/material/styles/createTheme'

export const baseTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#0A1047',
      light: '#303880',
    },
    secondary: {
      main: '#FD7118',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#0A1047',
    },
    grey: {
      '50': '#00000040',
    },
    success: {
      main: '#27FD18',
    },
    info: {
      main: '#FED84C',
    },
    warning: {
      main: '#FD7118', // same as secondary
    },
    error: {
      main: '#FD1818',
    },
  },
  shape: {
    borderRadius: 8,
  },
})
