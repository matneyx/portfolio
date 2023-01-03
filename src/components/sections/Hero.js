import React, {useEffect, useRef} from "react";
import { Container } from "react-bootstrap";
import { DisplayTable, TableCell } from "../DisplayTable";
import styled from "styled-components";
import Typed from "typed.js";

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  color: #fff;
  background-image: url(assets/img/hero-bg.jpg);
`;

const HeroOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
`;

const HeroContent = styled(DisplayTable)`
  text-align: center;
  position: absolute;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
      font-size: 2.5rem;
  }
`;

export const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(
      el.current, {
        strings:  [
          'Developer',
          'Medical Simulation Technician',
          'Sound Designer',
          'Composer',
          'Musician'
        ],
        loop: true,
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 500,
        smartBackspace: true
      });

      return () => {
        typed.destroy();
      };
  });

  return (
    <HeroContainer id="hero" className="route bg-image">
      <HeroOverlay></HeroOverlay>
      <HeroContent>
        <TableCell>
          <Container>
            <HeroTitle className="mb-4">I am Dave Matney</HeroTitle>
            <HeroSubtitle><span className="typed" ref={el}></span></HeroSubtitle>
          </Container>
        </TableCell>
      </HeroContent>
    </HeroContainer>
  );
}
