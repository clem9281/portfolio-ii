import React, { forwardRef } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StyledHeader from "./StyledHeader";

const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const StyledSectionHeader = forwardRef(
  ({ title, subtitle, animation }, ref) => {
    const classes = useStyles();
    return (
      <div className={classes.headerContent} ref={ref}>
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
  }
);

export default StyledSectionHeader;
