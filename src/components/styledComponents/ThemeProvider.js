import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import { lightBlue, orange, blue, deepPurple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
  },
  palette: {
    type: "dark",
    react: { stroke: lightBlue["A200"], fill: "black" },
    knex: { stroke: orange[800], fill: "white" },
    express: { stroke: orange[800], fill: "white" },
    less: { stroke: "white", fill: blue[900] },
    html: { stroke: orange[800], fill: "white" },
    redux: { stroke: deepPurple[400], fill: deepPurple[500] },
    postgres: { stroke: orange[800], fill: "white" },
    javascript: { stroke: orange[800], fill: "white" },
    sass: { stroke: orange[800], fill: "white" },
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
