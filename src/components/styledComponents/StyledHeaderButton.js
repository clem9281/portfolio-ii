import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const StyledHeaderButton = ({ scrollTo, scrollToRef, showContent }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={
        showContent ? `${classes.button} ${classes.animation}` : classes.button
      }
      aria-label="view-my-work-button"
      onClick={() => scrollTo(scrollToRef)}
    >
      <ArrowDropDownCircleOutlinedIcon
        className={classes.icon}
        fontSize="large"
      />
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      pointerEvents: "all",
      position: "absolute",
      zIndex: 1,
      bottom: "-4.5rem",
      left: "50%",
    },
  },
  animation: {
    animation: `$button-enter 1s ${theme.transitions.easing.easeInOut} 1s normal forwards`,
  },
  "@keyframes button-enter": {
    "100%": {
      bottom: "15%",
    },
  },
  icon: {
    fontSize: "3rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
    },
  },
}));

export default StyledHeaderButton;
