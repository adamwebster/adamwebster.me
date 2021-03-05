import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { AWMVariables } from '../../styles/StyledVariables';
import { Colors } from '@adamwebster/fused-components';

const StyledFloatingImage = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  float: ${({ float }) => float};
  margin-bottom: 15px;
  border-radius: ${AWMVariables.borderRadius};
  margin-top: 15px;
  ${({ float }) =>
    float === 'right'
      ? css`
          margin-left: 30px;
        `
      : css`
          margin-right: 30px;
        `}
  p,figure {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
`;
interface Props {
  float?: string;
  width?: string;
  height?: string;
  imageFilename?: string;
  caption?: string;
}
const FloatingImage = ({
  float = 'left',
  width = '50%',
  height = 'auto',
  imageFilename = 'default.jpg',
  caption = '',
}: Props) => {
  const ImageQuery = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            resize {
              originalName
            }
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  `);
  const imageItem = ImageQuery.allImageSharp.edges.filter(
    (img: any) => img.node.resize.originalName === imageFilename
  )[0];
  const image = getImage(imageItem.node.gatsbyImageData);
  return (
    <StyledFloatingImage float={float} width={width} height={height}>
      <figure>
        {image && (
          <GatsbyImage
            loading="eager"
            image={image}
            objectFit="cover"
            alt={`${caption}`}
          />
        )}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </StyledFloatingImage>
  );
};

export default FloatingImage;
