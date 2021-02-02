import React, { useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { motion } from 'framer-motion';
import { AnimatedLogo } from '../AnimatedLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const StyledHeaderContainer = styled.div`
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80');
  background-size: cover;
  margin-bottom: 32px;
  border-bottom: solid 1px #ccc;
  background-position: center;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StyledHeaderContainerInner = styled.div`
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  h1 {
    color: ${Colors.primary};
    font-size: 3rem;
    margin-bottom: 0;
    font-weight: 200;
    position: relative;
  }
  h2 {
    margin-top: 0;
    position: relative;
    color: ${Colors.dark};
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

const StyledDownArrows = styled(FontAwesomeIcon)`
  color: #fff;
  opacity: 0.6;
`;

const Hero = () => {
  const heroContainer = useRef<HTMLDivElement>(null);
  return (
    <StyledHeaderContainer ref={heroContainer}>
      <StyledHeaderContainerInner>
        <AnimatedLogo />
        <div>
          <motion.h1
            initial={{ opacity: 0, right: '-300px' }}
            animate={{ opacity: 1, right: '0px' }}
            transition={{
              default: { duration: 2 },
              right: { duration: 1.5, ease: 'easeInOut' },
            }}
          >
            Adam Webster
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, right: '-300px' }}
            animate={{ opacity: 1, right: '0px' }}
            transition={{
              default: { duration: 2 },
              right: { duration: 1.5, ease: 'easeInOut' },
            }}
          >
            Designer and Front-end Developer
          </motion.h2>
        </div>
      </StyledHeaderContainerInner>
      <StyledDownArrows
        onClick={() =>
          window.scrollTo(
            0,
            heroContainer.current ? heroContainer.current.offsetHeight - 50 : 0
          )
        }
        size="5x"
        icon={faArrowCircleDown}
      />
    </StyledHeaderContainer>
  );
};

export default Hero;
