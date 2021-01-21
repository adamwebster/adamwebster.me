import React from 'react';
import { Card, Colors, FCTheme } from '@adamwebster/fused-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles';
import { SectionHeader } from '../SectionHeader';

const StyledServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  padding: 0 16px;
  > div {
    flex: 1 1;
  }
`;

const StyledServicesCard = styled(Card)`
  border: none;
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease 0s;
  padding-bottom: 30px;
  box-shadow: 0 0 10px ${({ theme }) => (theme === 'dark' ? '#000' : '#ccc')};

  &:hover {
    transform: scale(1.05);
  }
  svg {
    margin-bottom: 32px;
    + svg {
      margin-left: 16px;
    }
  }
`;

const StyledServicesCardImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 32px;
  img {
    width: 100%;
  }
`;
const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const StyledCardModal = styled.div`
  position: fixed;
  z-index: 1;
  overflow: hidden;
  height: auto;
  max-width: 700px;
  pointer-events: none;
  background-color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeDark : '#fff'};
  border-radius: 8px;
  box-shadow: 0 0 10px ${({ theme }) => (theme === 'dark' ? '#000' : '#ccc')};
  z-index: 2;
`;

const StyledImageWrapper = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const StyledCardContent = styled.div`
  padding: 16px 32px 32px;
`;

const ServicesItems = [
  {
    id: 1,
    name: ' Front-end Development',
    description:
      'This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos. You can take a look at his photos on his instagram @NorthernCaravan.',
    img:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    id: 2,
    name: ' Web & Mobile Design',
    description:
      'This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos. You can take a look at his photos on his instagram @NorthernCaravan.',
    img:
      'https://adamwebster.me/static/1636c8ef247f3cee9f35b7f2900e97cc/f422e/NorthernCaravan.jpg',
  },
  {
    id: 3,
    name: 'Logo Design & Branding',
    description:
      'This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos. You can take a look at his photos on his instagram @NorthernCaravan.',
    img:
      'https://adamwebster.me/static/1636c8ef247f3cee9f35b7f2900e97cc/f422e/NorthernCaravan.jpg',
  },
];

const StyledOverlayMotion = motion.custom(StyledOverlay);
const StyledCardModalMotion = motion.custom(StyledCardModal);
const StyledImageWrapperMotion = motion.custom(StyledImageWrapper);

const Services = () => {
  const [selectedId, setSelectedID] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const { theme } = useContext(FCTheme);
  return (
    <>
      <StyledContentWrapper>
        <SectionHeader>Services</SectionHeader>
      </StyledContentWrapper>
      <AnimateSharedLayout type="crossfade">
        <StyledServicesGrid>
          {ServicesItems.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                style={{ position: 'relative' }}
                initial={{ opacity: 0, top: '-30px' }}
                animate={{ opacity: 1, top: '0px' }}
                transition={{
                  default: {
                    duration: 0.5,
                    delay: index / 2,
                  },
                  top: {
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
              >
                <motion.div
                  layoutId={`card-container-${service.id}`}
                  exit={{ opacity: 0 }}
                >
                  <StyledServicesCard
                    theme={theme}
                    tabIndex={0}
                    onKeyDown={e => {
                      const { key } = e;
                      console.log(key);
                      switch (key) {
                        case 'Enter':
                          e.preventDefault();
                          setSelectedID(service.id);
                          setSelectedService(service);
                          break;
                        default:
                      }
                    }}
                    onClick={() => {
                      setSelectedID(service.id);
                      setSelectedService(service);
                    }}
                  >
                    <StyledServicesCardImageWrapper>
                      <motion.img
                        src={service.img}
                        alt={service.name}
                        layoutId={`card-container-${service.id}-img`}
                      />
                    </StyledServicesCardImageWrapper>
                    <span>{service.name}</span>
                  </StyledServicesCard>
                </motion.div>
              </motion.div>
            );
          })}
        </StyledServicesGrid>

        <AnimatePresence>
          {selectedId && (
            <>
              <StyledOverlayMotion
                theme={theme}
                onClick={() => setSelectedID(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}
                className="overlay"
              >
                <StyledCardModalMotion
                  theme={theme}
                  layoutId={`card-container-${selectedId}`}
                >
                  <StyledImageWrapperMotion>
                    <motion.img
                      src={selectedService.img}
                      alt={selectedService.name}
                      layoutId={`card-container-${selectedService.id}-img`}
                    />
                  </StyledImageWrapperMotion>
                  <StyledCardContent>
                    <motion.h1 animate>{selectedService.name}</motion.h1>
                    <motion.div animate>
                      {selectedService.description}
                    </motion.div>
                  </StyledCardContent>
                </StyledCardModalMotion>
              </StyledOverlayMotion>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default Services;
