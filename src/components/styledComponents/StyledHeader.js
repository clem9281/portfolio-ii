import React from "react";
import StyledParticlesWithParams from "./StyledParticles";

import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    background:
      'url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1000px"
    }
  },
  filter: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1000px"
    }
  },
  header: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "2rem",
    pointerEvents: "none"
  }
}));

const StyledHeader = ({ children }) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
      maxWidth="xl"
      disableGutters
      component="section"
    >
      <StyledParticlesWithParams />
      <div className={classes.filter} />
      <header className={classes.header}>{children}</header>
    </Container>
  );
};

export default StyledHeader;
