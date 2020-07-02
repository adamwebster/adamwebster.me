import React, { useContext } from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AWMVariables } from '../../styles/StyledVariables';
import { SiteContext } from '../../state';

const StyledLatestPortfolioItem = styled.div`
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
  border-radius: ${AWMVariables.borderRadius};
  overflow: hidden;
  border: solid 1px
    ${({ theme }) => (theme === 'dark' ? Colors.darkModeMedium : Colors.border)};
  transition: all 0.2s ease 0s;
  box-shadow: 0 0 5px #aaa;
  margin-bottom: 10px;
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
    height: calc(24vw - 40px);
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
  @media only screen and (max-width: 400px) {
    width: calc(50vw - 20px);
    height: calc(50vw - 20px);
    img {
      width: calc(50vw - 20px);
      height: calc(50vw - 20px);
    }
  }
`;

const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    ${StyledImageWrapper} {
      transform: scale(1.05);
    }
  }
`;
interface Props {
  node: any;
}
const LatestPortfolioItem = ({ node }: Props) => {
  const { globalState } = useContext(SiteContext);
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
      <StyledLink title={title} to={path}>
        <StyledImageWrapper theme={globalState.theme}>
          <StyledImg alt={title} fluid={fluid} />
        </StyledImageWrapper>
      </StyledLink>
      <Link tabIndex={-1} to={path}>
        {title}
      </Link>
    </StyledLatestPortfolioItem>
  );
};
export default LatestPortfolioItem;
