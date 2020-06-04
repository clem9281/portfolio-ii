import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const StyledHeaderButton = ({ scrollTo, scrollToRef }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.button}
      aria-label="view-my-work"
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
      pointerEvents: "all",
      position: "absolute",
      animation: `$button-enter 1s ${theme.transitions.easing.easeInOut} 2s 1 normal backwards`,
      zIndex: 1,
      bottom: "15%",
    },
  },
  "@keyframes button-enter": {
    "0%": {
      bottom: "-4.5rem",
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
