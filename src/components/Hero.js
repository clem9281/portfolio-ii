import React from "react";

import StyledHeader from "./styledComponents/StyledHeader";
import StyledHeaderButton from "./styledComponents/StyledHeaderButton";
import StyledParticlesWithParams from "./styledComponents/StyledParticles";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Hero = ({ background }) => {
  const classes = useStyles({ background });
  return (
    <Container
      className={classes.container}
      maxWidth="xl"
      disableGutters
      component="section"
    >
      <div className={classes.filter} />
      <StyledParticlesWithParams />
      <StyledHeader
        title={
          "Hi, I'm Isaac Houle, a Full-Stack Developer studying at Lambda School."
        }
        subtitle={
          "Versatile, full stack JavaScript developer, with experience building responsive single page applications and REST APIs. Passionate about user driven development and proficient in working asynchronously in a team. Enthusiastic about discovering and implementing new methodologies to solve complex problems."
        }
        titleType="header-h1"
        subtitleType="header-body"
      />
      <StyledHeaderButton />
    </Container>
  );
};
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    background: props => props.background && `url("${props.background}")`,
    // background:
    //   'url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: props => props.background && "cover",
    backgroundPosition: props => props.background && "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1000px"
    }
  },
  filter: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.4)",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1000px"
    }
  }
}));
export default Hero;
