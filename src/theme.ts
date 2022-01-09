import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#8a5dd2',
    },
    secondary: {
      main: '#d4c4f1',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;