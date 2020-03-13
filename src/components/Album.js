import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import ProjectCard from "./styledComponents/ProjectCard";

import projects from "../utils/projects.js";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export default function Album() {
  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {projects.map(project => (
            <ProjectCard {...project} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
