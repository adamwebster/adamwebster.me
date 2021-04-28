import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from '../../assets/images/profile.jpg';

const StyledHero = styled.div`
  width: 100vw;
  height: 300px;
`;
const StyledHeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 300px;
  z-index: 99;
  position: relative;
  @media (max-width: 1120px) {
    padding: 0 16px;
  }
`;
const StyledWelcomeMessage = styled.h1`
  max-width: 540px;
  display: grid;
  grid-template-columns: 80px 1fr;
  font-weight: 100;
  font-family: 'Dosis', sans-serif;
  align-items: center;
  .intro-text {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    font-size: 3rem;
  }
  .sub-message {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const StyledMotionWave = styled(motion.span)`
  display: inline-block;
  padding: 0 16px 0 0;
  font-size: 3rem;
`;

const StyledProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 4px ${({ theme }) => theme.colors.primary};
  display: flex;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  box-sizing: border-box;
`;
const StyledHeroContent = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
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
            <StyledMotionWave
              transition={{ repeat: 10, duration: 1 }}
              animate={{ rotateZ: ['0deg', '25deg', '0deg'] }}
            >
              👋{' '}
            </StyledMotionWave>
            <div>
              <span className="intro-text">Hi, I’m Adam Webster</span>
              <br />
              <span className="sub-message">UI Designer & Developer</span>
            </div>
          </StyledWelcomeMessage>
        </StyledHeroContent>
      </StyledHeroInner>
    </StyledHero>
  );
};

export default Hero;
