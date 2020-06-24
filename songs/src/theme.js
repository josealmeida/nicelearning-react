import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
