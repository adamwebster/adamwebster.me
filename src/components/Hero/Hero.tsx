import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animate, AnimatePresence, motion } from 'framer-motion';
import { usePopper } from 'react-popper';
import profile from '../../assets/images/profile.jpg';
import { AWMVariables } from '../../styles/StyledVariables';
import { name } from 'dayjs/locale/*';
import { darken } from 'polished';

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

const StyledPopper = styled.div`
  .poke-message {
    border-radius: ${AWMVariables.borderRadius};
    background-color: ${({ theme }) => theme.colors.cardColor};
    padding: 16px;
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
    box-shadow: 0 0 10px
      ${({ theme }) => darken(0.2, theme.colors.backgroundColor)};
  }
`;

const Hero = () => {
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null);
  const [pokeCount, setPokeCount] = useState(0);
  const [showPoke, setShowPoke] = useState(false);
  const [pokeMessage, setPokeMessage] = useState('Did you just poke me?');
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const handlePoke = () => {
    const newPokeCount = pokeCount + 1;
    setPokeCount(newPokeCount);
    setShowPoke(true);
    if (pokeCount >= 10)
      setPokeMessage("You just couldn't stop poking me could you?");
    if (update) update();
  };

  useEffect(() => {
    if (showPoke) {
      setTimeout(() => {
        setShowPoke(false);
      }, 5000);
    }
  }, [showPoke]);
  return (
    <StyledHero>
      <StyledHeroInner>
        <StyledHeroContent>
          <StyledProfileImage
            onClick={() => handlePoke()}
            ref={setReferenceElement}
          >
            <img src={profile} />
          </StyledProfileImage>
          <AnimatePresence>
            {showPoke && (
              <StyledPopper
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <motion.div
                  className="poke-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {pokeMessage}
                </motion.div>
              </StyledPopper>
            )}
          </AnimatePresence>

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
