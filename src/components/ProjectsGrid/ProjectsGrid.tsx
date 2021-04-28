import { Button } from '../Button';
import React, { useContext, useState } from 'react';
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

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(8rem, 1fr));
  grid-template-rows: repeat(2, minmax(4rem, 1fr));
  gap: 32px;
  > div {
    max-height: 200px;
    .gatsby-image-wrapper {
      border-radius: 4px;
      width: 100% !important;
      height: 100% !important;
      picture {
        display: flex;
        justify-content: center;
      }
      img {
        width: 200%;
        position: relative;
        height: auto;
      }
    }
  }
`;

const StyledSelectedImage = styled.div`
  > div {
    height: 100vh;
    width: 100vw;
  }

  .gatsby-image-wrapper {
    border-radius: 4px;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gatsby-image-wrapper img {
    max-height: 80vh;
    position: relative;
    width: auto;
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
`;

const StyledOverlayMotion = motion(StyledOverlay);
const FeaturedWork = () => {
  const { globalState } = useContext(SiteContext);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const {
    allPortfolioItem: { nodes: featuredWorkItems },
  } = useStaticQuery(graphql`
    {
      allPortfolioItem(sort: { order: DESC, fields: date }, limit: 6) {
        nodes {
          id
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: COVER, grayscale: false }
              )
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <div>
        <SectionHeader>Projects</SectionHeader>
      </div>
      <AnimateSharedLayout type="crossfade">
        <StyledProjectsGrid>
          {featuredWorkItems.map(
            (item: { id: string; title: string; featuredImage: any }) => {
              const { id, title, featuredImage } = item;
              const image = getImage(featuredImage);
              return (
                <motion.div
                  onClick={() => setSelectedImage({ image, title, id })}
                  key={id}
                  layoutId={id}
                >
                  {image && (
                    <GatsbyImage
                      objectFit="fill"
                      image={image}
                      alt={`${title} featured image`}
                    />
                  )}
                </motion.div>
              );
            }
          )}
        </StyledProjectsGrid>
        <AnimatePresence>
          {selectedImage && (
            <StyledOverlayMotion
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15 },
              }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: 'auto' }}
            >
              <StyledSelectedImage>
                <motion.div
                  onClick={() => setSelectedImage(null)}
                  layoutId={selectedImage.id}
                >
                  <GatsbyImage
                    objectFit="fill"
                    image={selectedImage.image}
                    alt="image"
                  />
                </motion.div>
              </StyledSelectedImage>
            </StyledOverlayMotion>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default FeaturedWork;
