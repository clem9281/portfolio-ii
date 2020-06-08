import React, { forwardRef } from "react";

import { Container, Grid, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProjectCard from "./styledComponents/ProjectCard";
import StyledSectionHeader from "./styledComponents/StyledSectionHeader";

import projects from "../utils/projects.js";

const Album = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <section className={classes.section} ref={ref}>
      <StyledSectionHeader
        title="My Recent Work"
        subtitle={
          <>
            These are sme of my most recent and favorite projects. I created
            this portfolio too, check it out on{" "}
            <Link
              href="https://github.com/clem9281/portfolio-ii"
              className={classes.link}
            >
              GitHub
            </Link>
          </>
        }
      ></StyledSectionHeader>
      <Container className={classes.cardContainer} maxWidth="md">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
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
    // don't want to see scroll bar during animation
    overflowX: "hidden",
  },
  cardContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  link: {
    pointerEvents: "all",
    color: theme.palette.primary.light,
  },
}));
export default Album;
