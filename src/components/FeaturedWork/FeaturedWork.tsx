import { Button } from '../Button/';
import React from 'react';
import styled from 'styled-components';
import { StyledSectionHeader } from '../../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledFeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: 352px auto;
  gap: 32px;
`;

const FeaturedWorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  height: 704px;

  > div {
    background-color: #ccc;
  }
`;

const FeaturedWork = () => {
  const {
    allPortfolioItem: { nodes: featuredWorkItems },
  } = useStaticQuery(graphql`
    {
      allPortfolioItem(limit: 4) {
        nodes {
          id
          title
          featuredImage {
            childrenImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  console.log(featuredWorkItems);
  return (
    <>
      <StyledFeaturedWorkGrid>
        <div>
          <StyledSectionHeader>Featured Work</StyledSectionHeader>
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
              console.log(image, featuredImage);
              return (
                <div key={id}>
                  {title}
                  {image && <GatsbyImage image={image} alt="test" />}
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
