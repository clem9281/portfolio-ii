import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const useStyles = makeStyles(theme => ({
  button: {
    pointerEvents: "all",
    position: "absolute",
    bottom: "2%",
    animation: `$button-enter 1s ${theme.transitions.easing.easeInOut} 2s 1 normal backwards`,
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      bottom: "15%"
    }
  },
  "@keyframes button-enter": {
    "0%": {
      bottom: "-4.5rem"
    }
  },
  icon: {
    fontSize: "3rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem"
    }
  }
}));

const StyledHeaderButton = () => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button} aria-label="view-my-work">
      <ArrowDropDownCircleOutlinedIcon
        className={classes.icon}
        fontSize="large"
      />
    </IconButton>
  );
};

export default StyledHeaderButton;
