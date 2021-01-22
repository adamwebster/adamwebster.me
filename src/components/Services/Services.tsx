import React from 'react';
import { Card, Colors, FCTheme } from '@adamwebster/fused-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles';
import { SectionHeaderFront } from '../SectionHeader';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  @media only screen and (max-width: 900px) {
    gap: 32px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
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
  > div {
    width: 100%;
  }
`;

const StyledCardContent = styled.div`
  padding: 16px 32px 32px;
  h1 {
    margin: 16px 0 48px 0;
  }
`;

const StyledFrontEndGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 32px 0;
  opacity: 0.5;
  > div {
    display: flex;
    flex: 1 1;
    justify-content: center;
  }
`;

const StyledOverlayMotion = motion.custom(StyledOverlay);
const StyledCardModalMotion = motion.custom(StyledCardModal);
const StyledImageWrapperMotion = motion.custom(StyledImageWrapper);
const SectionHeaderFrontMotion = motion.custom(SectionHeaderFront);
const Services = () => {
  const [selectedId, setSelectedID] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const { theme } = useContext(FCTheme);
  return (
    <>
      <StyledContentWrapper>
        <SectionHeaderFrontMotion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          Services
        </SectionHeaderFrontMotion>
      </StyledContentWrapper>
      <AnimateSharedLayout type="crossfade">
        <StyledServicesGrid>
          <StaticQuery
            query={graphql`
              query {
                allServiceItemMdx(
                  limit: 3
                  sort: { order: ASC, fields: order }
                ) {
                  nodes {
                    id
                    title
                    body
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={({ allServiceItemMdx: { nodes } }) => {
              return (
                <>
                  {nodes.map((service: any, index: number) => {
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
                              <motion.div
                                layoutId={`card-container-${service.id}-img`}
                              >
                                <Img
                                  fluid={
                                    service.featuredImage.childImageSharp.fluid
                                  }
                                  alt={service.title}
                                />
                              </motion.div>
                            </StyledServicesCardImageWrapper>
                            <span>{service.title}</span>
                          </StyledServicesCard>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </>
              );
            }}
          />
        </StyledServicesGrid>

        <AnimatePresence>
          {selectedId && (
            <>
              {console.log(selectedService)}
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
                    <motion.div
                      layoutId={`card-container-${selectedService.id}-img`}
                    >
                      <Img
                        fluid={
                          selectedService.featuredImage.childImageSharp.fluid
                        }
                        alt={selectedService.title}
                      />
                    </motion.div>
                  </StyledImageWrapperMotion>
                  <StyledCardContent>
                    <motion.h1 animate>{selectedService.title}</motion.h1>
                    <motion.div animate>
                      <MDXProvider
                        components={{ FontAwesomeIcon, StyledFrontEndGrid }}
                      >
                        <MDXRenderer>{selectedService.body}</MDXRenderer>
                      </MDXProvider>
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
