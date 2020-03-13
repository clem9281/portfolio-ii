import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

const useStyles = makeStyles(theme => ({
  button: {
    pointerEvents: "all"
  },
  icon: {
    fontSize: "4rem"
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
