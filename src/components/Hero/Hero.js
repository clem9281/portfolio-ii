import React from "react";
import StyledParticlesWithParams from "../styledComponents/StyledParticles";

import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHeader>
      <StyledParticlesWithParams />
      <StyledFilter />
      <div class="inner">
        <span class="icon major fa-code-branch"></span>
        <h1>
          Hi, I'm <strong>Isaac Houle</strong>, a<br />
          Full-Stack Developer studying at
          <a href="https://lambdaschool.com/" target="_blank" id="title-link">
            Lambda School
          </a>
          .
        </h1>
        <p class="title-description">
          Versatile, full stack JavaScript developer, with experience building
          responsive single page applications and REST APIs. Passionate about
          user driven development and proficient in working asynchronously in a
          team. Enthusiastic about discovering and implementing new
          methodologies to solve complex problems.
        </p>
        <ul class="actions special">
          <li>
            <a href="#three" class="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Hero;

export const StyledHeader = styled.header`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  display: flex;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  //   filter: brightness(0.75);
`;
export const StyledFilter = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
`;
