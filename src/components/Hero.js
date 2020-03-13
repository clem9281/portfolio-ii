import React from "react";

import StyledHeader from "./styledComponents/StyledHeader";
import StyledHeaderButton from "./styledComponents/StyledHeaderButton";

import StyledTypography from "./styledComponents/StyledTypography";

const Hero = () => {
  return (
    <StyledHeader>
      <StyledTypography type="header-h1">
        Hi, I'm <strong>Isaac Houle</strong>, a Full-Stack Developer studying at
        Lambda School.
      </StyledTypography>
      <StyledTypography type="header-body">
        Versatile, full stack JavaScript developer, with experience building
        responsive single page applications and REST APIs. Passionate about user
        driven development and proficient in working asynchronously in a team.
        Enthusiastic about discovering and implementing new methodologies to
        solve complex problems.
      </StyledTypography>
      <StyledHeaderButton />
    </StyledHeader>
  );
};

export default Hero;
