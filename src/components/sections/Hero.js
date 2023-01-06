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
  const heroSubtitleRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(
      heroSubtitleRef.current, {
        strings:  [
          'I am a Software Developer',
          'I am a Software Developer in Test',
          'I am a Medical Simulation Technician',
          'I am a Sound Designer',
          'I am a Composer',
          'I am a Musician',
          'I am an Armchair Game Designer',
          'I am an Armchair Historian',
          'I am a Shadetree Mechanic',
          'I am a Computer Programmer',
          'I am Test-Driven',
          'I am Behavior-Driven',
          'I am Solution-Focused',
          'I love writing Unit Tests',
          'I love writing Integration Tests',
          'I love Updating Dependencies',
          'I think I\'m funny',
          'I am a Geek',
          'I am a Nerd',
          'I love Research and Development',
          'I am a Power User',
          'I am a Gearhead',
          'I am hard on my stuff',
          'I give great hugs',
          'I love coffee',
          'I am a morning person... sometimes',
          'I am more than the sum of my parts'
        ],
        loop: true,
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 600,
        smartBackspace: false,
        shuffle: true
      });

      return () => {
        typedRef.current.destroy();
      };
  });

  return (
    <HeroContainer id="hero" className="route bg-image">
      <HeroOverlay></HeroOverlay>
      <HeroContent>
        <TableCell>
          <Container>
            <HeroTitle data-testid="hero-title" className="mb-4">I am Dave Matney</HeroTitle>
            <HeroSubtitle><span className="typed" ref={heroSubtitleRef}></span></HeroSubtitle>
          </Container>
        </TableCell>
      </HeroContent>
    </HeroContainer>
  );
}
