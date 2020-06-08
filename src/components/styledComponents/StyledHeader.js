import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import StyledTypography from "./StyledTypography";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    textAlign: "center",
    padding: "2rem",
    pointerEvents: "none",
  },
}));

const StyledHeader = ({
  title,
  subtitle,
  titleType,
  subtitleType,
  animation,
}) => {
  const classes = useStyles();

  return (
    <header className={`${classes.header} ${animation && animation}`}>
      <StyledTypography type={titleType}>{title}</StyledTypography>
      <StyledTypography type={subtitleType}>{subtitle}</StyledTypography>
    </header>
  );
};

export default StyledHeader;
