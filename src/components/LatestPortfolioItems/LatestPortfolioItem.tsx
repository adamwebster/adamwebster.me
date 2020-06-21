import React from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const StyledLatestPortfolioItem = styled.div`
  border-radius: 5px;
  background-size: cover;
  text-align: center;
`;

const StyledImg = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  border: solid 1px
    ${({ theme }) => (theme === 'dark' ? Colors.darkModeMedium : Colors.border)};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    &:hover {
      filter: grayscale(0.5);
    }
  }
  @media only screen and (max-width: 1080px) {
    width: calc(24vw - 20px);
    height: calc(24vw - 20px);
    img {
      width: calc(24vw - 20px);
      height: calc(24vw - 20px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: calc(33vw - 20px);
    height: calc(33vw - 20px);
    img {
      width: calc(33vw - 20px);
      height: calc(33vw - 20px);
    }
  }
  @media only screen and (max-width: 600px) {
    width: calc(33vw - 20px);
    height: calc(33vw - 20px);
    img {
      width: calc(33vw - 20px);
      height: calc(33vw - 20px);
    }
  }
  @media only screen and (max-width: 340px) {
    width: calc(50vw - 20px);
    height: calc(50vw - 20px);
    img {
      width: calc(50vw - 20px);
      height: calc(50vw - 20px);
    }
  }
`;

interface Props {
  node: any;
}
const LatestPortfolioItem = ({ node }: Props) => {
  const theme = useSelector((state: { theme: string }) => state.theme);
  const {
    frontmatter: {
      path,
      title,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
  } = node;
  return (
    <StyledLatestPortfolioItem>
      <StyledImageWrapper theme={theme}>
        <Link to={path}>
          <StyledImg alt={title} fluid={fluid} />
        </Link>
      </StyledImageWrapper>
      {title}
    </StyledLatestPortfolioItem>
  );
};
export default LatestPortfolioItem;
