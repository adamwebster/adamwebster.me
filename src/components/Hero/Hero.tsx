import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { LatestPortfolioItems } from '../LatestPortfolioItems';
import { LinkButton } from '../LinkButton';

const StyledHeroInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1160px;
  margin: 0 auto;
  gap: 30px;
  padding: 80px 10px 50px 10px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 120px 10px 80px 10px;
  }
`;
const StyledHero = styled.section`
  width: 100%;
  background-color: ${Colors.primary};
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

const StyledHeroMessage = styled.div`
  color: #fff;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    padding-top: 20px;
    text-align: center;
  }
`;

const StyledImageWrapper = styled.div`
  width: 400px;
  margin-top: 40px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  border: solid 1px #fff;
  background-color: transparent;
  color: #fff;
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
              <StyledHeroMessage>
                <h1>Adam Webster</h1>
                <h3>Designer and Front-end Developer</h3>
                <p>
                  I specialize in designing and coding responsive, accessible
                  websites using technologies such as{' '}
                  <strong>Wordpress, React</strong> and <strong>Svelte</strong>.
                </p>
                <p>
                  I also design logos, business card and other marketing
                  materials.
                </p>
                <StyledLinkButton to="/portfolio">
                  See More of My Work
                </StyledLinkButton>
              </StyledHeroMessage>
            </StyledHeroInner>
          </StyledHero>
        );
      }}
    />
  );
};

export default Hero;
