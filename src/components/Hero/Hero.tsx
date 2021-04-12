import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../assets/images/profile.jpg';
import HeroLight from '../../assets/images/hero-light.jpg';

const StyledHero = styled.div`
  width: 100vw;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.heroBGColor};
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 600px;
    opacity: 0.1;
    background-image: url(${HeroLight});
    background-size: cover;
    background-position: center center;
  }
`;
const StyledHeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 600px;
  z-index: 99;
  position: relative;
  @media (max-width: 1120px) {
    padding: 0 16px;
  }
`;
const StyledWelcomeMessage = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  max-width: 540px;
  font-weight: 100;
  font-family: 'Dosis', sans-serif;
  .intro-text {
    font-weight: 800;
    font-size: 3rem;
  }
`;

const StyledMotionWave = styled(motion.span)`
  display: inline-block;
  padding: 0 16px 0 0;
  font-size: 3rem;
`;

const StyledProfileImage = styled.div`
  width: 195px;
  height: 195px;
  border-radius: 50%;
  border: solid 8px #006e90;
  display: flex;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  box-sizing: border-box;
`;
const StyledHeroContent = styled.div`
  display: grid;
  grid-template-columns: 195px auto;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 0 auto;
`;


const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroInner>
        <StyledHeroContent>
          <StyledProfileImage>
            <img src={profile} />
          </StyledProfileImage>

          <StyledWelcomeMessage>
            <span className="intro-text">
              <StyledMotionWave
                transition={{ repeat: 10, duration: 1 }}
                animate={{ rotateZ: ['0deg', '25deg', '0deg'] }}
              >
                👋{' '}
              </StyledMotionWave>
              Hi, I’m Adam Webster
            </span>
            <br />
            <span>
              I enjoy creating websites using new and exciting technologies!
            </span>
          </StyledWelcomeMessage>
        </StyledHeroContent>
      </StyledHeroInner>
    </StyledHero>
  );
};

export default Hero;
