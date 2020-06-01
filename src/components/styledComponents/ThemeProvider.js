import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  teal,
  blue,
  deepPurple,
  green,
  yellow,
  red,
} from "@material-ui/core/colors";
export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
  },
  palette: {
    type: "dark",
    primary: { main: teal[200], light: teal[50], dark: teal[400] },
    secondary: {
      main: deepPurple[800],
      light: deepPurple[700],
      dark: deepPurple[900],
    },
    success: {
      main: green[700],
      light: green[600],
      dark: green[800],
    },
    warning: {
      main: yellow[800],
      light: yellow[700],
      dark: yellow[900],
    },
    error: red,
    info: blue,
  },
});

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
