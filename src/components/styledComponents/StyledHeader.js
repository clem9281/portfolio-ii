import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import StyledTypography from "./StyledTypography";

const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
    textAlign: "center",
    padding: "2rem",
    pointerEvents: "none",
    animation: `$header-enter 3s ${theme.transitions.easing.easeInOut} 500ms normal backwards`
  },
  "@keyframes header-enter": {
    "0%": {
      opacity: 0,
      transform: "scale(1.2)"
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)"
    }
  }
}));

const StyledHeader = ({ title, subtitle, titleType, subtitleType }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <StyledTypography type={titleType}>{title}</StyledTypography>
      <StyledTypography type={subtitleType}>{subtitle}</StyledTypography>
    </header>
  );
};

export default StyledHeader;
