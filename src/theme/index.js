import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafe11',
      dark: '#e8e50f',
      contrastText: '#212121',
    },
    secondary: {
      main: '#212121',
      contrastText: '#fafe11',
    },
    text: {
      primary: '#212121',
      secondary: '#666666',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
    grey: {
      500: '#9e9e9e', // standard gray for focus border
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 500,
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            fontFamily: 'Manrope, sans-serif',
          },
          '& .MuiInputBase-input': {
            fontFamily: 'Manrope, sans-serif',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#9e9e9e', // gray focus border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#9e9e9e',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#9e9e9e', // gray focus label
          },
        },
      },
    },

 
  },
});

export default theme;
