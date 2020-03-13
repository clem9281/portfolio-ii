import React from "react";
import Particles from "react-particles-js";

import styled from "styled-components";

const StyledParticles = styled(Particles)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;
`;

const StyledParticlesWithParams = () => {
  return (
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: "#ffffff",
            opacity: 0.3,
            width: 2
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.4
              }
            },
            bubble: {
              distance: 800,
              size: 30,
              duration: 2,
              opacity: 0.2,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default StyledParticlesWithParams;
