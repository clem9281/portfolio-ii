import React, { useState, useEffect } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <div className={classes.loader}>
          <div></div>
        </div>
      </Container>
    )
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
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
  loader: {
    display: "inline-block",
    transform: "translateZ(1px)",
    "& div": {
      display: "inline-block",
      width: "6.4rem",
      height: "6.4rem",
      margin: "0.8rem",
      borderRadius: "50%",
      background: theme.palette.primary.main,
      animation: "$loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite",
    },
  },
  "@keyframes loader-animation": {
    "0%, 100%": {
      animationTimingFunction: "cubic-bezier(0.5, 0, 1, 0.5)",
    },
    "0%": {
      transform: "rotateY(0deg)",
    },
    "50%": {
      transform: "rotateY(1800deg)",
      animationTimingFunction: "cubic-bezier(0, 0.5, 0.5, 1)",
    },
    "100%": {
      transform: "rotateY(3600deg)",
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
