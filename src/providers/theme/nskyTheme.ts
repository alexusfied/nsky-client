import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from '@mui/material/styles';

export const nskyTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111C27',
      paper: '#1F2A36',
    },
    primary: {
      main: '#A8781A',
      contrastText: '#111C27',
    },
    secondary: {
      main: '#1F2A36',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.7)',
    },
    warning: {
      main: '#e25f61'
    },
    divider: 'rgba(255,255,255,0.12)',
  },
});

export default nskyTheme;
