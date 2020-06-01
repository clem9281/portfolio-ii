import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StyledHeader from "./StyledHeader";

const useStyles = makeStyles(theme => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    // z index set here to hide hero button during its animation
    zIndex: 2,
    position: "relative"
  }
}));

const StyledSectionHeader = ({ title, subtitle, animation }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerContent}>
      <Container maxWidth="sm">
        <StyledHeader
          title={title}
          subtitle={subtitle}
          titleType="section-header-title"
          subtitleType="section-header-body"
        />
      </Container>
    </div>
  );
};

export default StyledSectionHeader;
