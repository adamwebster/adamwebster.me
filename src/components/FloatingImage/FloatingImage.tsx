import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledFloatingImage = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  float: ${({ float }) => float};
  overflow: hidden;
  margin-bottom: 15px;
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
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);
  console.log(imageFilename);

  const image = ImageQuery.allImageSharp.edges.filter(
    (img: any) => img.node.fluid.originalName === imageFilename
  );
  console.log(image);

  return (
    <StyledFloatingImage float={float} width={width} height={height}>
      <figure>
        <Img alt={caption} fluid={image[0].node.fluid} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </StyledFloatingImage>
  );
};

export default FloatingImage;
