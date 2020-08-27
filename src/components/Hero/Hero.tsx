import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { LatestPortfolioItems } from '../LatestPortfolioItems';
import { LinkButton } from '../LinkButton';

const StyledHeroInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 10px 50px 10px;
  @media only screen and (max-width: 768px) {
    padding: 120px 10px 80px 10px;
  }
`;
const StyledHero = styled.section`
  width: 100%;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-family: 'HelveticaNeue-CondensedBold', sans-serif;
    text-transform: uppercase;
  }
  h3 {
    text-transform: uppercase;
    font-size: 28px;
    font-family: 'HelveticaNeue-CondensedBold', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  @media only screen and (max-width: 768px) {
    background-image: none;
    height: auto;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 30px;
`;
const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          fileName: file(relativePath: { eq: "heroGraphic@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <StyledHero id="Hero">
            <StyledHeroInner>
              <div>
                <LatestPortfolioItems />
              </div>
              <StyledLinkButton to="/portfolio">
                See More of My Work
              </StyledLinkButton>
            </StyledHeroInner>
          </StyledHero>
        );
      }}
    />
  );
};

export default Hero;
