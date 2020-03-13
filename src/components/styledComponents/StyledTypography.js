import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "1.8rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
      paddingTop: "2rem"
    }
  },
  headerBody: {
    // paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8rem"
    }
  }
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
    default:
      return <Typography>{children}</Typography>;
  }
};

export default StyledTypography;
