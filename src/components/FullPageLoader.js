import React, { useState, useEffect } from "react";

import Loader from "react-loader-spinner";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { theme } from "./styledComponents/ThemeProvider";

const WelcomePage = ({ ready, setShowContent }) => {
  const classes = useStyles();
  const [shouldRender, setRender] = useState(ready);
  useEffect(() => {
    if (!ready) setRender(true);
  }, [ready]);

  const onAnimationEnd = () => {
    if (ready) {
      setRender(false);
      setShowContent(true);
    }
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
        <Loader
          type="BallTriangle"
          color={theme.palette.primary.main}
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Container>
    )
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.grey["A400"],
    [theme.breakpoints.up("md")]: {
      // position: "fixed",
      maxWidth: "none",
    },
  },
  animation: {
    animation: `$loader-leave 2s ${theme.transitions.easing.easeInOut} normal forwards`,
  },
  "@keyframes loader-leave": {
    "0%": {
      opacity: 1,
      backgroundColor: theme.palette.grey["A400"],
    },
    "100%": {
      opacity: 0,
      backgroundColor: "rgba(48, 48, 48, 0)",
    },
  },
}));

export default WelcomePage;
