import { ThemeProvider, createTheme } from '@mui/material/styles';

// :root {
//   --teal-50: #f0fdfa;
//   --teal-100: #ccfbf1;
//   --teal-200: #99f6e4;
//   --teal-300: #5eead4;
//   --teal-400: #2dd4bf; /* Your primary */
//   --teal-500: #02A9B6;  
//   --teal-600: #0d9488; /* Your primary */
//   --teal-700: #0f766e;
//   --teal-800: #115e59;
//   --teal-900: #134e4a;
// }

export const transGivTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#02A9B6', // your teal500
    },
    ...({
      teal50: '#f0fdfa',
      teal100: '#ccfbf1',
      teal200: '#99f6e4',
      teal300: '#5eead4',
      teal400: '#2dd4bf',
      teal500: '#02A9B6',
      teal600: '#0d9488',
      teal700: '#0f766e',
      teal800: '#115e59',
      teal900: '#134e4a',
    } as any),
  },
});
