import React, { useState, useEffect } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import StyledTypography from "./styledComponents/StyledTypography";

const WelcomePage = ({ ready }) => {
  const classes = useStyles();
  const [shouldRender, setRender] = useState(ready);
  useEffect(() => {
    if (!ready) setRender(true);
  }, [ready]);

  const onAnimationEnd = () => {
    if (ready) setRender(false);
  };

  return (
    shouldRender && (
      <Container
        component="section"
        maxWidth="xl"
        disableGutters
        onAnimationEnd={onAnimationEnd}
        className={
          ready
            ? `${classes.container} ${classes.animation}`
            : classes.container
        }
      >
        <StyledTypography type="welcome-message">Welcome</StyledTypography>
      </Container>
    )
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    width: "100%",
    top: 0,
    backgroundColor: theme.palette.grey["A400"],
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      maxWidth: "none",
    },
  },
  animation: {
    animation: `$loader-leave 2s ${theme.transitions.easing.easeInOut} normal forwards`,
  },
  "@keyframes loader-leave": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

export default WelcomePage;
