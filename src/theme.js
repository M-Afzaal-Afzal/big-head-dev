import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 480,
      lg: 768,
      xl: 1024,
      xxl:1280,
    },
  },
  palette: {
    primary: {
      main: '#246833',
    },
    secondary: {
      main: '#181616',
    },
    white: {
      main: "#FBFAF5"
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontFamily: "Signatra",
      fontWeight: "400",
      fontSize: "100px",
    },
    h2: {
      fontFamily: "Signatra",
      fontWeight: 400,
      fontSize: "50px",
      // lineHeight: 52.5,
    },
    body1: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '22.44px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '34px',
    }
  }
});

export default theme;