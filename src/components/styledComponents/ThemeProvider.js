import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import { lightBlue, blue, deepPurple, cyan } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
  },
  palette: {
    type: "dark",
    primary: {
      main: cyan[400],
    },
    react: { stroke: lightBlue["A200"], fill: "black" },
    knex: { stroke: "#E16426", fill: "white" },
    express: { stroke: "#8cc84b", fill: "black" },
    less: { stroke: "white", fill: blue[900] },
    html: { stroke: "#e34f26", fill: "white" },
    redux: { stroke: deepPurple[400], fill: "#764ABC" },
    postgres: { stroke: blue[300], fill: "#336791" },
    javascript: { stroke: "#f7df1e", fill: "#f7df1e" },
    sass: { stroke: "#c69", fill: "#c69" },
    django: { stroke: "#44B78B", fill: "#44B78B" },
    "material-ui": { stroke: "#0081cb", fill: "#0081cb" },
    "styled-components": { stroke: "#cb45a2", fill: "#cb45a2" },
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
