import { alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const brand = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
};

export const secondary = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
};

export const gray = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

export const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
};

export const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
};

const getDesignTokens = () => ({
  palette: {
    mode: 'dark', // Always set mode to 'dark'
    primary: {
      light: brand[200],
      main: brand[500],
      dark: brand[800],
      contrastText: brand[50],
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[800],
    },
    warning: {
      main: '#F7B538',
      dark: '#F79F00',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
    },
    grey: {
      50: gray[50],
      100: gray[100],
      200: gray[200],
      300: gray[300],
      400: gray[400],
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },

    purple: {
      50: purple[50],
      100: purple[100],
      200: purple[200],
      300: purple[300],
      400: purple[400],
      500: purple[500],
      600: purple[600],
      700: purple[700],
      800: purple[800],
      900: purple[900],
    },

    divider: alpha(gray[600], 0.3),
    background: {
      default: gray[900], // Set default background to dark mode
      paper: gray[800],   // Set paper background to dark mode
    },
    text: {
      primary: '#fff',    // Set primary text color to white
      secondary: gray[400],// Set secondary text color in dark mode
    },
    action: {
      selected: alpha(brand[800], 0.2),
    },
  },
  typography: {
    fontFamily: ['"Inter", "sans-serif"'].join(','),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});

export default function getLPTheme() {
  return {
    ...getDesignTokens(),
    components: {
      // Customize MUI components as needed
    },
  };
}
