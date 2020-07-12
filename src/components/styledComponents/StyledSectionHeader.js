import React, { useRef } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StyledHeader from "./StyledHeader";

import useVisibility from "../../hooks/useVisibility";

const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
  },
  animation: {
    opacity: (props) => (props.isVisible ? 1 : 0),
    transform: (props) => (props.isVisible ? "scale(1)" : "scale(1.2)"),
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: "1s",
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

const StyledSectionHeader = ({ title, subtitle }) => {
  const ref = useRef(null);

  const isVisible = useVisibility(ref);

  const classes = useStyles({ isVisible });
  return (
    <div className={classes.headerContent} ref={ref}>
      <Container maxWidth="sm">
        <StyledHeader
          title={title}
          subtitle={subtitle}
          titleType="section-header-title"
          subtitleType="section-header-body"
          animation={classes.animation}
        />
      </Container>
    </div>
  );
};

export default StyledSectionHeader;
