import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Grid } from "@material-ui/core";
import IconLink from "./styledComponents/IconLink";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/clem9281"
        aria-label="View my github profile"
      >
        Isaac Houle
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <IconLink
              label="visit Isaac Houle's github"
              Icon={GitHubIcon}
              url="https://github.com/clem9281"
            />
          </Grid>
          <Grid item>
            <IconLink
              label="visit Isaac Houle's LinkedIn"
              Icon={LinkedInIcon}
              url="https://www.linkedin.com/in/isaac-houle-090020174/"
            />
          </Grid>
          <Grid item>
            <IconLink
              label="email Isaac Houle"
              Icon={EmailIcon}
              url="isaac.houle0@gmail.com"
            />
          </Grid>
        </Grid>
      </div>
      <Copyright />
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    zIndex: 3,
    position: "relative",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));
