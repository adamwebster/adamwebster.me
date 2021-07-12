import { Button } from '../Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  withArtDirection,
} from 'gatsby-plugin-image';
import { SectionHeader } from '../SectionHeader';
import { SiteContext } from '../../state';
import { LightMode } from '../../themes/LightMode';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { AWMVariables } from '../../styles/StyledVariables';
import ReactMarkdown from 'react-markdown';
import { StyledTag } from '../../styles';

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(8rem, 1fr));
  grid-template-rows: repeat(2, auto);
  gap: 32px;
  > div {
    max-height: 250px;
  }

  .gatsby-image-wrapper {
    img {
      border-radius: ${AWMVariables.borderRadius};
      overflow: hidden;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(8rem, 1fr));
    grid-template-rows: repeat(3, auto);
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSelectedModal = styled(motion.div)`
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
  min-height: 500px;
  max-height: 90vh;
  max-width: 90vw;
  background-color: ${({ theme }) =>
    `var(--color-background, ${theme.colors.backgroundColor})`};
  border-radius: 8px;
  overflow: hidden;
  .selected-modal-content {
    padding: 32px 32px 32px 0;
    .meta-header {
      font-size: 1.2rem;
      margin-top: 32px;
    }
    .technologies-used {
      margin-bottom: 32px;
      div {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    gap: 0;
    .selected-modal-content {
      padding: 24px;
      overflow: auto;
    }
  }
`;

const StyledSelectedImage = styled.div`
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledOverlayMotion = motion(StyledOverlay);
const FeaturedWork = () => {
  const { globalState, dispatch } = useContext(SiteContext);
  const overlayRef = useRef<HTMLDivElement | any>();
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const {
    allPortfolioItemMdx: { nodes: featuredWorkItems },
  } = useStaticQuery(graphql`
    {
      allPortfolioItemMdx(sort: { order: DESC, fields: date }, limit: 6) {
        nodes {
          id
          title
          description
          technologyUsed
          software
          category
          demo
          repo
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                aspectRatio: 1.5
                formats: [AUTO, WEBP, AVIF]
              )
              original {
                src
              }
            }
          }
        }
      }
    }
  `);

  const handleModalKeyDown = (e: any) => {
    if (selectedImage) {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        dispatch({ type: 'DISABLE_SCROLL', payload: false });
      }
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleModalKeyDown);
    return () => {
      document.removeEventListener('keydown', handleModalKeyDown);
    };
  });
  return (
    <>
      <div>
        <SectionHeader>Projects</SectionHeader>
      </div>
      <AnimateSharedLayout type="crossfade">
        <StyledProjectsGrid>
          {featuredWorkItems.map(
            (item: {
              id: string;
              title: string;
              featuredImage: any;
              description: string;
              technologyUsed: string;
              software: string;
              category: string;
              demo: string;
              repo: string;
            }) => {
              const {
                id,
                title,
                featuredImage,
                description,
                technologyUsed,
                software,
                category,
                demo,
                repo,
              } = item;
              const image = getImage(featuredImage);
              const originalSource = featuredImage.childImageSharp.original.src;
              return (
                <motion.div
                  tabIndex={0}
                  role="button"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      dispatch({ type: 'DISABLE_SCROLL', payload: true });
                      setSelectedImage({
                        image,
                        title,
                        id,
                        technologyUsed,
                        description,
                        originalSrc: originalSource,
                        software,
                        category,
                        demo,
                        repo,
                      });
                    }
                  }}
                  onClick={() => {
                    dispatch({ type: 'DISABLE_SCROLL', payload: true });
                    setSelectedImage({
                      image,
                      title,
                      id,
                      technologyUsed,
                      description,
                      originalSrc: originalSource,
                      software,
                      category,
                      demo,
                      repo,
                    });
                  }}
                  key={id}
                  layoutId={`${id}`}
                >
                  {image && (
                    <motion.div layoutId={`${id}_image`}>
                      <GatsbyImage
                        objectFit="fill"
                        image={image}
                        alt={`${title} featured image`}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            }
          )}
        </StyledProjectsGrid>
        <AnimatePresence>
          {selectedImage && (
            <StyledOverlayMotion
              ref={overlayRef}
              onClick={e => {
                if (e.target === overlayRef.current) {
                  setSelectedImage(null);
                  dispatch({ type: 'DISABLE_SCROLL', payload: false });
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15 },
              }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: 'auto' }}
            >
              <StyledSelectedModal layoutId={selectedImage.id}>
                <StyledSelectedImage>
                  <motion.img
                    layoutId={`${selectedImage.id}_image`}
                    src={selectedImage.originalSrc}
                  />
                </StyledSelectedImage>
                <div className="selected-modal-content">
                  <h1>{selectedImage.title}</h1>
                  <StyledTag>{selectedImage.category}</StyledTag>
                  <ReactMarkdown>{selectedImage.description}</ReactMarkdown>
                  {selectedImage.technologyUsed && (
                    <div className="technologies-used">
                      <h2 className="meta-header"> Technologies Used</h2>
                      {selectedImage.technologyUsed
                        .split(',')
                        .map((tech: string) => (
                          <StyledTag key={tech}>{tech}</StyledTag>
                        ))}
                    </div>
                  )}
                  {selectedImage.software && (
                    <div>
                      <h2 className="meta-header">Software</h2>{' '}
                      <StyledTag>{selectedImage.software}</StyledTag>
                    </div>
                  )}

                  {selectedImage.demo && (
                    <>
                      <h2 className="meta-header">Demo</h2>
                      <ReactMarkdown>{selectedImage.demo}</ReactMarkdown>
                    </>
                  )}

                  {selectedImage.repo && (
                    <>
                      <h2 className="meta-header">Git Repository</h2>
                      <ReactMarkdown>{selectedImage.repo}</ReactMarkdown>
                    </>
                  )}
                </div>
              </StyledSelectedModal>
            </StyledOverlayMotion>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default FeaturedWork;
