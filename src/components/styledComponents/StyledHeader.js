import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import StyledTypography from "./StyledTypography";

const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "1rem",
    pointerEvents: "none",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem"
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
