import { Button } from '../Button/';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SectionHeader } from '../SectionHeader';
import { SiteContext } from '../../state';
import { LightMode } from '../../themes/LightMode';

const StyledFeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: 352px auto;
  gap: 32px;
`;

const FeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(8rem, 1fr));
  grid-template-rows: repeat(2, minmax(4rem, 1fr));
  gap: 32px;
  .gatsby-image-wrapper {
    border-radius: 4px;
  }
`;

const FeaturedWork = () => {
  const { globalState } = useContext(SiteContext);
  const {
    allPortfolioItem: { nodes: featuredWorkItems },
  } = useStaticQuery(graphql`
    {
      allPortfolioItem(sort: { order: DESC, fields: date }, limit: 4) {
        nodes {
          id
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 700
                height: 700
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
      <StyledFeaturedWorkGrid>
        <div>
          <SectionHeader
            textColor={
              globalState.theme.name === 'dark'
                ? '#fff'
                : LightMode.colors.primary
            }
          >
            Featured Work
          </SectionHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            fames pellentesque cursus donec. Ornare ac sem porttitor urna. Id
            ipsum hendrerit pretium amet pellentesque ut eu.
          </p>
          <p>
            Massa, in luctus varius in elit cras vel lacus, cursus. Orci eget
            sed amet sed elementum id in. Quis nunc, et sit turpis enim. Ipsum
            morbi volutpat facilisis faucibus mattis et duis. Congue elementum a
            a volutpat iaculis convallis.
          </p>
          <Button>See more of my work</Button>
        </div>
        <FeaturedWorkGrid>
          {featuredWorkItems.map(
            (item: { id: string; title: string; featuredImage: any }) => {
              const { id, title, featuredImage } = item;
              const image = getImage(featuredImage);
              return (
                <div key={id}>
                  {image && (
                    <GatsbyImage
                      objectFit="fill"
                      image={image}
                      alt={`${title} featured image`}
                    />
                  )}
                </div>
              );
            }
          )}
        </FeaturedWorkGrid>
      </StyledFeaturedWorkGrid>
    </>
  );
};

export default FeaturedWork;
