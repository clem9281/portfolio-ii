import React, { forwardRef } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import ProjectCard from "./styledComponents/ProjectCard";
import StyledSectionHeader from "./styledComponents/StyledSectionHeader";

import projects from "../utils/projects.js";

const Album = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <StyledSectionHeader
        title="My Recent Work"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dapibus ante, et pretium nunc. Nulla nec nisl vitae eros molestie efficitur et eu purus"
        ref={ref}
      ></StyledSectionHeader>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Container>
    </section>
  );
});

const useStyles = makeStyles((theme) => ({
  section: {
    zIndex: 3,
    position: "relative",
    backgroundColor: theme.palette.grey["A400"],
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));
export default Album;
