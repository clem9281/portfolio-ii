import React from "react";

import StyledHeader from "./styledComponents/StyledHeader";
import StyledHeaderButton from "./styledComponents/StyledHeaderButton";
import StyledParticlesWithParams from "./styledComponents/StyledParticles";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Hero = ({ background, scrollTo, scrollToRef, showContent }) => {
  const classes = useStyles({ background });
  return (
    <Container
      className={classes.container}
      maxWidth="xl"
      disableGutters
      component="section"
    >
      <div className={classes.background}>
        <div className={classes.filter} />
        <StyledParticlesWithParams />
        <StyledHeader
          animation={showContent && classes.animation}
          title={
            "Hi, I'm Isaac Houle, a Full-Stack Developer studying at Lambda School."
          }
          subtitle={
            "Versatile, full stack JavaScript developer, with experience building responsive single page applications and REST APIs. Passionate about user driven development and proficient in working asynchronously in a team. Enthusiastic about discovering and implementing new methodologies to solve complex problems."
          }
          titleType="header-h1"
          subtitleType="header-body"
        />
        <StyledHeaderButton
          scrollTo={scrollTo}
          showContent={showContent}
          scrollToRef={scrollToRef}
        />
      </div>
    </Container>
  );
};
const useStyles = makeStyles((theme) => ({
  background: {
    background: (props) => props.background && `url("${props.background}")`,
    backgroundSize: (props) => props.background && "cover",
    backgroundPosition: (props) => props.background && "center",
    height: "100%",
    width: "inherit",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 0,
    [theme.breakpoints.up("md")]: {
      position: "fixed",
    },
  },
  container: {
    minHeight: "100vh",
    position: "relative",
    // don't want to see scroll bar during animation
    overflowX: "hidden",
    // margin bottom handles issue with interception observer
    marginBottom: "0.5px",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "1000px",
    },
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
      maxHeight: "1000px",
    },
  },
  animation: {
    animation: `$header-enter 2s ${theme.transitions.easing.easeInOut} 0ms normal forwards`,
  },
  "@keyframes header-enter": {
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}));
export default Hero;
