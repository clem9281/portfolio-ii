import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "1.8rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
      paddingTop: "2rem",
    },
  },
  headerBody: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  },
}));

const StyledTypography = ({ children, type }) => {
  const classes = useStyles();
  switch (type) {
    case "header-h1":
      return (
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={classes.header}
        >
          {children}
        </Typography>
      );
    case "header-body":
      return (
        <Typography
          variant="body1"
          component="p"
          paragraph
          className={classes.headerBody}
        >
          {children}
        </Typography>
      );
    case "section-header-title":
      return (
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {children}
        </Typography>
      );
    case "section-header-body":
      return (
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {children}
        </Typography>
      );
    default:
      return <Typography>{children}</Typography>;
  }
};

export default StyledTypography;
